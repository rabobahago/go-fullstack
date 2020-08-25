const express = require('express')

const app = express()
app.use((req, res, next) => {
  console.log('Require received!')
  next()
})
app.use((req, res, next) => {
  res.json({ message: 'successfully created using express' })
  next()
})
app.use((req, res) => {
  console.log('Header sent successully')
})
module.exports = app
