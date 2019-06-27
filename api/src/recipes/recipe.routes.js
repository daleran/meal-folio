const recipesEndpoint = require('express').Router();
const Recipe = require('./recipe.model');

recipesEndpoint.get('/', async (req,res) => {

    try{
        const allRecipes = await Recipe.find();
        res.send(allRecipes);
    } catch(e){
        res.status(500).send();
    }

});

recipesEndpoint.post('/', async (req,res) => {
    const recipe = new Recipe(req.body);

    try {
        await recipe.save();
        res.status(201).send(recipe);
    } catch (e){
        res.status(400).send(e);
    }
    
});

recipesEndpoint.get('/:id', async (req,res) =>{
    const id = req.params.id;

    try{
        const recipe = await Recipe.findOne({ _id: id});

        if(!recipe){
            return res.status(404).send();
        }

        res.send(recipe);
    } catch(e) {
        res.status(500).send(e);
    }
});

recipesEndpoint.put('/:id', async (req,res) =>{
    res.status(200).send('Update a recipe with the id '+req.params.id);
});

recipesEndpoint.delete('/:id', async (req,res) =>{
    res.status(204).send('Delete a recipe with the id '+req.params.id);
});

module.exports = recipesEndpoint;