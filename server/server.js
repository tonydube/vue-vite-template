require('dotenv').config()

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json())

const users = []

let refreshTokens = []

app.post('/token', (req, res) => {
  console.log(refreshTokens)
  const refreshToken = req.body.token
  console.log('token', refreshToken)
  if (refreshToken == null) return res.sendStatus(401)
  if (refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  console.log('here')
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ username: user.username })
    res.json({ accessToken: accessToken })
  })
})

app.get('/users', authenticateToken, (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

// app.post('/users/login', async (req, res) => {
//   try {
//     const user = users.find(user => user.name = req.body.name)
//     if(user == null) {
//       return res.status(400).send('Cannot find user')
//     }
//     if(await bcrypt.compare(req.body.password, user.password)) {
//       res.send('Success')
//     } else {
//       res.send('Not allowed')
//     }
//   } catch {
//     res.status(500).send()
//   }
// });

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.post('/login', (req, res) => {
  // authenticate user

  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  refreshTokens.push(refreshToken)
  res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s'})
}

app.listen(3000)