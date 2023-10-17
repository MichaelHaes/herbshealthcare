const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var cors = require("cors");
const express = require('express')
const app = express()
const port = 5000

app.use(cors());
app.use(express.json()); 


app.get('/', function (req, res) {
  res.send('API is working properly');
});

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

//get from database
app.get('/showuser', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
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
