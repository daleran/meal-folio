const Recipe = require('./model.recipe')

module.exports = async (req, res) => {
  const id = req.params.id

  try {
    const recipe = await Recipe.findOne({ _id: id }).exec()

    if (!recipe) {
      return res.status(404).send({ error: 'Recipe not found' })
    }

    res.send(recipe)
  } catch (err) {
    res.status(500).send(err)
  }
}
