process.env.NODE_ENV = 'test'

const server = require('../../server')
const chai = require('chai')
const assert = chai.assert
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')
const testRecipeData = require('./recipe.testData')

chai.use(chaiHttp)

describe('Recipe Integration Tests', function () {
  var testedRecipeID

  before(function (done) {
    server.on('server_started', function () {
      done()
    })
  })

  it('should POST a recipe object', function (done) {
    chai.request(server)
      .post('/recipes')
      .type('json')
      .send(JSON.stringify(testRecipeData.validRecipe('Recipe1')))
      .end((err, res) => {
        assert.isNull(err, 'There should be no errors')
        assert.propertyVal(res, 'status', 201, 'The status code should be a resource created 201')
        assert.propertyVal(res.body, 'name', 'Recipe1', 'The response body should have a name of Recipe1')
        testedRecipeID = res.body._id
        done()
      })
  })

  it('should not POST a recipe object with no name', function (done) {
    chai.request(server)
      .post('/recipes')
      .type('json')
      .send(JSON.stringify(testRecipeData.noNameRecipe()))
      .end((err, res) => {
        assert.isNull(err, 'There should be no errors')
        assert.propertyVal(res, 'status', 400, 'The status code should be a bad response 400')
        assert.propertyVal(res.body, 'name', 'ValidationError', 'The response body should have a validation error')
        done()
      })
  })

  it('should GET the posted recipe in an array of all recipes', function (done) {
    chai.request(server)
      .get('/recipes')
      .end((err, res) => {
        assert.isNull(err, 'There should be no errors')
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.isArray(res.body, 'The response body should be an array')
        assert.lengthOf(res.body, 1, 'A recipe array of size 1 should be returned')
        assert.propertyVal(res.body[0], 'name', 'Recipe1', 'The recipe name should be Recipe1')
        done()
      })
  })

  it('should GET the posted recipe by id', function (done) {
    chai.request(server)
      .get('/recipes/' + testedRecipeID)
      .end((err, res) => {
        assert.isNull(err)
        assert.isNotArray(res)
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.propertyVal(res.body, 'name', 'Recipe1', 'The recipe name should be Recipe1')
        done()
      })
  })

  it('should PATCH the posted recipe with an id and an update object', function (done) {
    chai.request(server)
      .patch('/recipes/' + testedRecipeID)
      .type('json')
      .send(JSON.stringify(testRecipeData.patchName('ChangedName')))
      .end((err, res) => {
        assert.isNull(err)
        assert.isNotArray(res)
        assert.isNotEmpty(res.body)
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.propertyVal(res.body, 'name', 'ChangedName', 'The recipe name change to ChangedName')
        done()
      })
  })

  it('should DELETE the posted recipe by id', function (done) {
    chai.request(server)
      .delete('/recipes/' + testedRecipeID)
      .end((err, res) => {
        assert.isNull(err)
        assert.isNotArray(res)
        assert.isNotEmpty(res.body)
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.propertyVal(res.body, '_id', testedRecipeID, 'The recipe name change to ChangedName')
        done()
      })
  })

  it('should GET 0 recipe objects', function (done) {
    chai.request(server)
      .get('/recipes')
      .end((err, res) => {
        assert.isNull(err, 'There should be no errors')
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.isArray(res.body, 'The response body should be an array')
        assert.lengthOf(res.body, 0, 'A recipe array should be empty')
        done()
      })
  })

  after(function (done) {
    mongoose.connection.db.dropDatabase(done)
    done()
  })
})
