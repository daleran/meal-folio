const mongoose = require('mongoose')

module.exports.connect = async () => {
  try {
    setUpErrors()
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useFindAndModify: false })
  } catch (err) {
    console.log('error', err)
    return null
  }
}

async function setUpErrors () {
  const connection = mongoose.connection
  connection.on('error', console.error.bind('console', 'DB Connection Error:'))
  connection.on('open', () => console.log('Connected to Mongoose on ' + process.env.DB_URL))
  connection.on('disconnected', () => console.log('Mongoose disconnected from ' + process.env.DB_URL))
  process.on('SIGINT', function () {
    connection.close(function () {
      console.log('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  })
}

module.exports.mongoose = mongoose
