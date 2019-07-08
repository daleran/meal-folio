process.env.NODE_ENV = 'test'

const server = require('../../server')
const User = require('../model.users')

const chai = require('chai')
const assert = chai.assert
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('User Integration Tests', () => {
  it('should POST a new user to the database with a valid email and password', (done) => {
    const testEmail = 'test@test.com'
    const testPass = 'testing123'

    chai.request(server)
      .post('/users')
      .type('json')
      .send(JSON.stringify({ email: testEmail, password: testPass }))
      .end((error, res) => {
        assert.isNull(error, 'There should be no errors')
        assert.propertyVal(res, 'status', 201, 'The status code should be a resource created 201')
        assert.propertyVal(res.body, 'email', testEmail, `The response body should a email of ${testEmail}`)
        assert.propertyVal(res.body, 'password', testPass, `The response body should a password of ${testPass}`)

        const user = User.find({ email: testEmail })
        assert.isNotNull(user, 'The database should contain the user')
        done()
      })
  })

  afterEach((done) => {
    User.deleteMany({}, (error) => {
      console.log(error)
      done()
    })
  })
})
