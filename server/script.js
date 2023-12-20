const { PrismaClient } = require('@prisma/client')
var cors = require("cors");
const express = require('express')
const session = require('express-session')
const { DateTime } = require('luxon')
const bodyParser = require('body-parser');
const { createServer } = require("http");
const bcrypt = require('bcrypt')
const { Server } = require("socket.io")
const cookieParser = require("cookie-parser")
const mqtt = require("mqtt")

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
  saveUninitialized: true,
  // cookie: {
  //   maxAge: 900000,
  //   httpOnly: true
  // },

  store: memoryStore
}))

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on('connection', (socket) => {
  // console.log("Connection on: " + socket.id)
})

const mqtt_client = mqtt.connect('mqtt://broker.emqx.io:1883')

mqtt_client.on('connect', () => {
  // mqtt_client.subscribe('MOBILE_PERVASIVE_HERBSCARE2023');
  console.log('Connected')
})

app.use(function (req, res, next) {
  req.mqttPublish = function (topic, message) {
    mqtt_client.publish(topic, message)
  }

  req.mqttSubscribe = function (topic, callback) {
    mqtt_client.subscribe(topic)
    mqtt_client.on('message', function (t, m) {
      if (t === topic) {
        callback(m.toString())
      }
    })
  }

  // console.log(memoryStore.sessions)
  next();
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
        // await prisma.session.create({
        //   data: {
        //     session_id: req.sessionID,
        //     expires: expirationTime.toISO(),
        //     data: user
        //   }
        // });
        res.cookie('user_id', req.sessionID, { maxAge: 60 * 60 * 1000, httpOnly: true });
        res.status(200).json(req.session);
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    }
  }
})

app.get('/dashboard', async (req, res) => {
  const user = req.session.user;
  req.mqttSubscribe('MOBILE_PERVASIVE_HERBSCARE2023', async (message) => {
    const parsedMsg = JSON.parse(message)
    // console.log('Received message: ' + message);
    // console.log('Received message: ' + parsedMsg.deviceId);
    // console.log('Received message: ' + parsedMsg.waterLevelPercentage);
    // console.log('Received message: ' + parsedMsg.soilMoistureValue);
    // console.log('Received message: ' + parsedMsg.brightnessValue);
    try {
      await prisma.sensorData.create({
        data: {
          device_id: parsedMsg.deviceId,
          user_id: req.session.user.user_id,
          humidity: parsedMsg.soilMoistureValue,
          luminosity: parsedMsg.brightnessValue,
          waterLevel: parsedMsg.waterLevelPercentage,
        }
      });
      // Code to execute if the operation is successful
    } catch (error) {
      // Code to handle the error
      console.error('Error creating sensor data:', error);
    }
    
  });
  // console.log(req.session)
  res.json(user)
})

app.get('/isLoggedIn', async (req, res) => {
  var status;
  if (req.cookies.user_id === req.sessionID) status = 1;
  else status = 0;
  // console.log(status)
  res.json(status)
})

app.get('/plantsinformation', async (req, res) => {
  // console.log(req.session)
  const user_session_id = req.session.user.user_id;
  const devices = await prisma.devices.findMany({
    where: {
      user_id: user_session_id
    }
  })
  res.json(devices)
})

app.post('/makepot', async (req, res) => {
  // console.log(req.session)
  const user_session_id = req.session.user.user_id;
  var potNumber = 0;
  const dev = await prisma.devices.findMany({
    where: {
      user_id: user_session_id
    }
  })

  if (dev.length === 0) {
    potNumber = 1;
  } else {
    const maxPotNumber = Math.max(...dev.map(device => device.pot_number));
    potNumber = maxPotNumber + 1;
  }

  await prisma.devices.create({
    data: {
      user_id: user_session_id,
      pot_number: potNumber
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

app.delete('/logout', async (req, res) => {
  req.session.destroy()
  console.log('logging out on ', req.sessionID)
  res.sendStatus(200)
})

app.get('/userinformation', async (req, res) => {
  console.log('Cookies: ', req.session)
  res.json(req.session.user)
})

app.post('/eventhandler', async (req, res) => {
  console.log(req.body)
  if (req.body.params.type === 'pump')
    req.mqttPublish('MOBILE_PERVASIVE_HERBSCARE2023_EVENT', req.body.params.waterPumpOn.toString());
  else if (req.body.params.type === 'led')
    req.mqttPublish('MOBILE_PERVASIVE_HERBSCARE2023_EVENT', req.body.params.ledLightOn.toString());
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

