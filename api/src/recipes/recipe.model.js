module.exports = (function(){

    const mongoose = require('mongoose');

    var recipeSchema = new mongoose.Schema({
        name: {
            type: String, 
            trim: true, 
            required: "Recipe Name is Required"
        },
        ingredients: [{
            type: String,
            trim: true
        }],
        steps: [String]
    }, {
        timestamps: true
    });

    const model = mongoose.model("Recipe",recipeSchema);

    return model;
})();