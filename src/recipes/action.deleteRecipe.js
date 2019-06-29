const Recipe = require('./model.recipe')

module.exports = async (req, res) => {
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
}
