const recipesEndpoint = require('express').Router()
const Recipe = require('./model.recipe')

recipesEndpoint.get('/', async (req, res) => {
  try {
    const allRecipes = await Recipe.find()
    res.send(allRecipes)
  } catch (e) {
    res.status(500).send()
  }
})

recipesEndpoint.post('/', async (req, res) => {
  try {
    const response = await require('./action.addRecipe')(req.body)
    res.status(201).send(response)
  } catch (err) {
    res.status(400).send(err)
  }
})

recipesEndpoint.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const recipe = await require('./action.getRecipeByID')(id)

    if (!recipe) {
      return res.status(404).send({ error: 'Recipe not found' })
    }

    res.send(recipe)
  } catch (e) {
    res.status(500).send(e)
  }
})

recipesEndpoint.patch('/:id', async (req, res) => {
  const update = req.body
  const id = req.params.id

  try {
    const recipe = await Recipe.findOneAndUpdate({ _id: id }, update, { runValidators: true })
    res.send(recipe)
  } catch (e) {
    res.status(400).send(e)
  }
})

recipesEndpoint.delete('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const recipe = await Recipe.findOneAndDelete({ _id: id })

    if (!recipe) {
      return res.status(404).send()
    }

    res.send(recipe)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = recipesEndpoint
