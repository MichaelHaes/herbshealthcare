const axios = require("axios");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var cors = require("cors");
const express = require('express')
const app = express()
const port = 5000

app.use(cors());
app.get('/', function (req, res) {
  res.send('API is working properly');
});

//fetch from json server
app.get('/user', function (req, res) {
  let users
  axios.get(`http://localhost:8000/user`)
    .then(response => {
      users = response.data
      res.send(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
})

//get from database
app.get('/showuser', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/user/:id', function (req, res) {
  res.send(req.params.id)
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
