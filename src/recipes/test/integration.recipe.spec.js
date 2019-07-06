process.env.NODE_ENV = 'test'

const server = require('../../server')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const recipes = require('../model.recipes')
const testRecipeData = require('./recipe.testData')

chai.use(chaiHttp)

describe('Recipe Integration Tests', function () {
  let testedRecipeID

  before(done => {
    server.on('server_started', function () {
      recipes.remove({},
        done())
    })
  })

  it('should POST 2 recipe objects', function (done) {
    chai.request(server)
      .post('/recipes')
      .type('json')
      .send(JSON.stringify(testRecipeData.validRecipe('Recipe1')))
      .end((req, res) => {
        expect(res).to.have.property('status', 201)
        expect(res.body).to.have.property('name', 'Recipe1')
        done()
      })
  })

  it('should GET 2 recipe objects', function (done) {
    done()
  })

  it('should GET a recipe with an id', function (done) {
    done()
  })

  it('should PATCH a recipe with an id', function (done) {
    done()
  })

  it('should DELETE a recipe with an id', function (done) {
    done()
  })

  it('should GET 1 recipe objects', function (done) {
    done()
  })
})
