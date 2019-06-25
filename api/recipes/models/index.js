module.exports = function(mongoose){

    var recipeSchema = new mongoose.Schema({
        name: String,


    });

    return mongoose.model("Recipe",recipeSchema);
}