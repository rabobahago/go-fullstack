const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')

const app = express()
mongoose
  .connect(
    'mongodb+srv://raboski:lWxWJKXiHlTCqrT3@cluster0.dmr0d.mongodb.net/<dbname>?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('successfully connected to mongoDB atlas')
  })
  .catch((error) => {
    console.log('Unable to connect to mongoDB atlas')
    console.error(error)
  })
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  )
  next()
})

app.use(bodyParser.json())
app.use('/api/stuff', stuffRoutes)
app.use('/api/auth', userRoutes)
module.exports = app

//lWxWJKXiHlTCqrT3
//mongodb+srv://raboski:lWxWJKXiHlTCqrT3@cluster0.dmr0d.mongodb.net/<dbname>?retryWrites=true&w=majority
//https://upload.wikimedia.org/wikipedia/commons/e/e3/Canon_EOS_60D_01.jpg
