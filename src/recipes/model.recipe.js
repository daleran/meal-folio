
const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Recipe Name is Required'
  },
  ingredients: [{
    type: String,
    trim: true
  }],
  steps: [String]
}, {
  timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
