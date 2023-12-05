const { PrismaClient } = require('@prisma/client')
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
var cors = require("cors");
const express = require('express')
const session = require('express-session')
const mysql = require('mysql2');
const { DateTime } = require('luxon')
const bodyParser = require('body-parser');
const { createServer } = require("http");
const bcrypt = require('bcrypt')
const { Server } = require("socket.io")
const cookieParser = require("cookie-parser")
const app = express()
const port = 5000
const prisma = new PrismaClient()
const memoryStore = new session.MemoryStore()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(session({
  secret: 'herbscare',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 600000,
  },

  store: memoryStore
}))

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

app.use((req, res, next) => {
  console.log(memoryStore.sessions)
  next();
})

io.on('connection', (socket) => {
  // console.log("Connection on: " + socket.id)
})

app.post('/register', async (req, res) => {
  const saltRounds = 10
  const { name, email, password, confirm_password } = req.body.user
  if (password === confirm_password) {
    bcrypt
      .genSalt(saltRounds)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => {
        return prisma.user.create({
          data: {
            name,
            email,
            password: hash
          },
        })
      })
      .then(newuser => {
        res.json(newuser)
      })
      .catch(err => console.error(err.message))
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (user === null) res.status(401).json({ error: 'User not found' })
    else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session.user = user;
        const expirationTime = DateTime.now().plus({ hours: 7, minutes: 15 });
        await prisma.session.create({
          data: {
            session_id: req.sessionID,
            expires: expirationTime.toISO(),
            data: user
          }
        });
        res.cookie('user_id', req.sessionID, { maxAge: 900000, httpOnly: true });
        res.status(200).json(req.session);
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    }
  }
})

app.get('/dashboard', async (req, res) => {
  const user = req.session.user;
  console.log(user)
  res.json(user)
})

app.get('/plantsinformation', async (req, res) => {
  console.log(req.session)
  const user_session_id = req.session.user.user_id;
  console.log(user_session_id)
  const devices = await prisma.devices.findMany({
    where: {
      user_id: user_session_id
    }
  })
  res.json(devices)
})

app.post('/makepot', async (req, res) => {
  console.log(req.session)
  const user_session_id = req.session.user.user_id;
  await prisma.devices.create({
    data: {
      user_id: user_session_id,
    }
  });

  const devices = await prisma.devices.findMany({
    where: {
      user_id: user_session_id
    }
  })
  io.emit('newPot', devices);

  res.send('new pot is made')
})


app.get('/device', async (req, res) => {
  const device = parseInt(req.query.id)

  const plants = await prisma.sensorData.findMany({
    where: {
      device_id: device
    }
  })
  res.json(plants)
})

app.get('/userinformation', async (req, res) => {
  console.log('Cookies: ', req.session)
  res.json(req.session.user)
})

app.delete('/logout', async (req, res) => {
  req.session.destroy()
  console.log('logging out on ', req.sessionID)
  res.sendStatus(200)
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

