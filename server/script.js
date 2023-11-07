const { PrismaClient } = require('@prisma/client')
var cors = require("cors");
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const { createServer } = require("http");
const bcrypt = require('bcrypt')
const { Server } = require("socket.io")

const app = express()
const port = 5000
const prisma = new PrismaClient()
const store = new session.MemoryStore()
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(session({
  secret: 'herbscare',
  resave: true,
  cookie: { maxAge: 60000 },
  saveUninitialized: false,
  store
}))

app.use((req, res, next) => {
  // console.log(store)
  next();
})

io.on('connection', (socket) => {
  console.log("Connection on: " + socket.id)
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
    if (req.session.authenticated) {
      res.json(req.session)
    } else {
      const user = await prisma.user.findUnique({
        where: {
          email: email
        }
      })
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            req.session.authenticated = true
            req.session.user = user;
            res.json(req.session);
          } else {
            res.status(401).json({ error: 'Unauthorized' });
          }
        })
        .catch(err => console.error(err.message))
    }
  }
})

app.get('/dashboard', async (req, res) => {
  console.log(req.session.user)
  const user = req.session.user;
  res.json(user)
})

app.get('/plantsinformation', async (req, res) => {
  const devices = await prisma.devices.findMany()
  res.json(devices)
})

app.post('/makepot', async (req, res) => {
  const newPot = await prisma.devices.create({
    data: {
      user_id: 1,
    }
  });

  const devices = await prisma.devices.findMany()
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

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

