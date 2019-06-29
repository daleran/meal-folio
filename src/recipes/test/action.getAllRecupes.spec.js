const chai = require('chai')
const expect = chai.expect()
const sinon = require('sinon')
const getAllRecipes = require('../action.getAllRecipes')
const Recipe = require('../model.recipe')
const testData = require('./recipe.testData')

describe('Get all recipes', function () {
  afterEach(() => {
    Recipe.find.restore()
  })

  it('should return an array of recipe objects', function () {   
    const stubFind = {
      exec () {
        return [testData.validRecipe('Steak1'), testData.validRecipe('Steak2'), testData.validRecipe('Steak3')]
      }
    }
    
    sinon.stub(Recipe, 'find')
  
  })

  it('should send a 500 code if there is an error', function () {

  })
})
