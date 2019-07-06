const Recipe = require('./model.recipes')

module.exports = async (req, res) => {
  try {
    const recipe = new Recipe(req.body)
    await recipe.save()
    res.status(201).send(recipe)
  } catch (err) {
    res.status(400).send(err)
  }
}
