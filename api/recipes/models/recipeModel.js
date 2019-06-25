module.exports = (function(){

    const mongoose = require('mongoose');
    
    var recipeSchema = new mongoose.Schema({
        name: String
    });

    const model = mongoose.model("Recipe",recipeSchema);

    return model;
})();