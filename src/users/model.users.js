const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: 'An email is required as a username',
    lowercase: true,
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    trim: true,
    minlength: 8,
    required: 'All users need a password.'
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User
