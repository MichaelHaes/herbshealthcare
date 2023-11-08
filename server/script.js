const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var cors = require("cors");
const express = require('express')
const session = require('express-session')
const bcrypt = require('bcrypt')
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'herbscare',
  resave: false,
  saveUninitialized: false
}))

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

app.get('/login', async (req, res) => {
  try {
    const { email, password } = req.query
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    bcrypt.compare(password, user.password)
      .then((isMatch) => {
        if (isMatch) {
          req.session.user = user;
          res.json(user);
        } else {
          res.status(401).json({ error: 'Unauthorized' });
        }
      })
      .catch(err => console.error(err.message))
  } catch (error) {
    console.error('Error in /login route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

