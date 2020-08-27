const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    })
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: 'successfully save user data to the database',
        })
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        })
      })
  })
}
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: new Error('User not found!'),
        })
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Invalid password'),
            })
          }
          const token = jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', {
            expiresIn: '24h',
          })
          res.status(200).json({
            userId: user.id,
            token: token,
          })
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          })
        })
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      })
    })
}
