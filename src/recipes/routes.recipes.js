const recipesEndpoint = require('express').Router()

recipesEndpoint.get('/', require('./action.getAllRecipes'))
recipesEndpoint.post('/', require('./action.addRecipe'))
recipesEndpoint.get('/:id', require('./action.getRecipeByID'))
recipesEndpoint.patch('/:id', require('./action.updateRecipe'))
recipesEndpoint.delete('/:id', require('./action.deleteRecipe'))

module.exports = recipesEndpoint
