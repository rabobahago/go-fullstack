const express = require('express')

const app = express()

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

app.use('/api/stuff', (req, res) => {
  const stuff = [
    {
      _id: 'regdggh',
      title: 'my first stuff for sale',
      description: 'A clean first stuff for sale with discount included',
      imageUrl: '',
      price: 4000,
      userId: '',
    },
    {
      _id: 'tebfh',
      title: 'my second stuff for sale',
      description: 'A clean second stuff for sale with discount included',
      imageUrl: '',
      price: 7000,
      userId: '',
    },
  ]
  res.status(201).json(stuff)
})
module.exports = app
