module.exports = (function(){

    const mongoose = require('mongoose');
    
    var ingredientSchema = new mongoose.Schema({
        amount: {
            type: Number,
        },
        unit: {
            type: String,
        },
        ingredient: {
            type: String
        }
    });
    
    var recipeSchema = new mongoose.Schema({
        name: {
            type: String, 
            trim: true, 
            required: "Recipe Name is Required"
        },
        author: {
            type: String,
            trim: true
        },
        tags: [{type: String, trim: true}],
        ingredients: [{
            type: ingredientSchema
        }],
        steps: [String],
        notes: [String]
    });

    const model = mongoose.model("Recipe",recipeSchema);

    return model;
})();