const chai = require('chai')
const expect = chai.expect()
const Recipe = require('../../src/recipes/model.recipe')

describe('Recipe Shcema', function () {
  it('should be invalid if empty', function () {
    var recipe = new Recipe()
  })
})
