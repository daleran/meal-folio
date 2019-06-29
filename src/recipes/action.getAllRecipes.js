const Recipe = require('./model.recipe')

module.exports = async (req, res) => {
  try {
    const allRecipes = await Recipe.find().exec()
    res.send(allRecipes)
  } catch (e) {
    res.status(500).send()
  }
}
