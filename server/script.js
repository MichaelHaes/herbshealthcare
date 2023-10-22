const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var cors = require("cors");
const express = require('express')
const session = require('express-session')
const app = express()
const port = 5000
 
app.use(cors());
app.use(express.json()); 
app.use(session({ 
  secret: 'herbscare',  
  resave: true, 
  saveUninitialized: false
})) 

app.get('/login', async (req, res) => {
  try {
    const {email, password} = req.query
    
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    req.session.user = { id: 1, username: 'example' };

    res.json(user)
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

app.get('/device', async (req, res) => {
  const device = parseInt(req.query.id)
  
  const plants = await prisma.sensorData.findMany({
    where: {
      device_id: device
    }
  })
  res.json(plants)
})

app.post('/adduser', async (req, res) => {
  const { name, email, password } = req.body.user
  const newuser = await prisma.user.create({
    data: {
      name,
      email,
      password
    },
  })
  res.json(newuser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// async function main() {
//     await prisma.user.create({
//       data: {
//         name: 'Mike',
//         email: 'mike@prisma.o',
//         password: 'mike'
//       },
//     })
  
//     const allUsers = await prisma.user.findMany()
//     console.dir(allUsers, { depth: null })
//   }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
