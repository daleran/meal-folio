process.env.NODE_ENV = 'test'

const server = require('../../server')
const chai = require('chai')
const assert = chai.assert
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')

chai.use(chaiHttp)

describe('User Integration Tests', function () {
  var testUserID

  before(function (done) {
    server.on('server_started', function () {
      done()
    })
  })

  after(function (done) {
    mongoose.connection.db.dropDatabase(done)
    done()
  })
})
