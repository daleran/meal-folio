const Recipe = require('./model.recipe')

module.exports = async (req, res) => {
  try {
    const allRecipes = await Recipe.find().exec()
    res.status(200).send(allRecipes)
  } catch (err) {
    res.status(500).send(err)
  }
}
