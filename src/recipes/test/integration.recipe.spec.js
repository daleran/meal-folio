process.env.NODE_ENV = 'test'

const server = require('../../server')
const Recipe = require('../model.recipes')
const testRecipeData = require('./recipe.testData')

const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Recipe Integration Tests', () => {
  it('should POST a recipe object', (done) => {
    chai.request(server)
      .post('/recipes')
      .type('json')
      .send(JSON.stringify(testRecipeData.validRecipe('Recipe1')))
      .end((err, res) => {
        assert.isNull(err, 'There should be no errors')
        assert.propertyVal(res, 'status', 201, 'The status code should be a resource created 201')
        assert.propertyVal(res.body, 'name', 'Recipe1', 'The response body should have a name of Recipe1')
        
        const recipe = Recipe.findById(res.body._id)
        assert.isNotNull(recipe, 'The recipe should exsist in the database')
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

  it('should GET an array of all recipes', function (done) {
    const recipe1 = new Recipe(testRecipeData.validRecipe('Recipe1'))
    recipe1.save()
    const recipe2 = new Recipe(testRecipeData.validRecipe('Recipe2'))
    recipe2.save()

    chai.request(server)
      .get('/recipes')
      .end((err, res) => {
        assert.isNull(err, 'There should be no errors')
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.isArray(res.body, 'The response body should be an array')
        assert.lengthOf(res.body, 2, 'A recipe array of size 2 should be returned')

        const recipes = Recipe.find({})
        assert.lengthOf(recipes, 2, '2 Recipes should be found in the database')
        done()
      })
  })

  it('should GET a recipe by id', function (done) {
    const recipe1 = new Recipe(testRecipeData.validRecipe('Recipe1'))
    recipe1.save()
   
    chai.request(server)
      .get('/recipes/' + recipe1._id)
      .end((err, res) => {
        assert.isNull(err)
        assert.isNotArray(res)
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.propertyVal(res.body, 'name', 'Recipe1', 'The recipe name should be Recipe1')
        done()
      })
  })

  it('should PATCH the a rceipe with an id and an update object', function (done) {
    const recipe1 = new Recipe(testRecipeData.validRecipe('Recipe1'))
    recipe1.save()
    
    chai.request(server)
      .patch('/recipes/' + recipe1._id)
      .type('json')
      .send(JSON.stringify(testRecipeData.patchName('ChangedName')))
      .end((err, res) => {
        assert.isNull(err)
        assert.isNotArray(res)
        assert.isNotEmpty(res.body)
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.propertyVal(res.body, 'name', 'ChangedName', 'The response should be ChangedName')

        const foundRecipe = Recipe.findById(recipe1._id)
        assert.isNotNull(foundRecipe, 'The recipe should be in the database')
        assert.propertyVal(foundRecipe, 'name', 'ChangedName', 'The name in the database should have changed')

        done()
      })
  })

  it('should DELETE the posted recipe by id', function (done) {
    const recipe1 = new Recipe(testRecipeData.validRecipe('Recipe1'))
    recipe1.save()
    
    chai.request(server)
      .delete('/recipes/' + recipe1._id)
      .end((err, res) => {
        assert.isNull(err)
        assert.isNotArray(res)
        assert.isNotEmpty(res.body)
        assert.propertyVal(res, 'status', 200, 'The status code should be 200')
        assert.propertyVal(res.body, '_id', recipe1._id, 'The response object should include the deleted recipe id')

        const deletedRecipe = Recipe.findById(recipe1._id)
        assert.isNull(deletedRecipe, 'The deleted recipe should not be in the database')
        done()
      })
  })

  afterEach((done) => {
    Recipe.deleteMany({}, (error) => {
      console.log(error)
      done()
    })
  })
})
