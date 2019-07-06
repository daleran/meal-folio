const Recipe = require('./model.recipes')

module.exports = async (req, res) => {
  const updates = req.body
  const id = req.params.id

  try {
    const recipe = await Recipe.findOneAndUpdate({ _id: id }, updates, { runValidators: true, new: true })
    if (!recipe) {
      return res.status(404).send({ error: 'Recipe not found' })
    }
    res.status(204).send(recipe)
  } catch (e) {
    res.status(400).send(e)
  }
}
