module.exports = function (recipeJSON) {
  const Recipe = require('./model.recipe')
  const recipe = new Recipe(recipeJSON)
  recipe.save()
  return recipe
}
