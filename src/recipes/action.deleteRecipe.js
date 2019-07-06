const Recipe = require('./model.recipes')

module.exports = async (req, res) => {
  const id = req.params.id

  try {
    const recipe = await Recipe.findOneAndDelete({ _id: id })

    if (!recipe) {
      return res.status(404).send({ error: 'Recipe not found' })
    }

    res.status(200).send(recipe)
  } catch (err) {
    res.status(500).send(err)
  }
}
