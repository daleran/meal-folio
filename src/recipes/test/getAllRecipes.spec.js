process.env.NODE_ENV = 'test'

const server = require('../../server')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const testData = require('./recipe.testData')

chai.use(chaiHttp)

describe('Recipe Integration Tests', function () {
  describe('GET /recipes', function () {
    it('should GET all the recipe objects', function () {
      chai.request(server)
        .get('/recipes')
        .end((req, res) => {
          expect(res).to.have.property('status', 200)
          expect(res.body).to.be.a('array')
          expect(res.body.length).to.eql(0)
        })
    })
  })
})
