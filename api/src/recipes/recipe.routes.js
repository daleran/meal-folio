var recipesEndpoint = require('express').Router();
var Recipe = require('./recipe.model');

recipesEndpoint.get('/', function(req,res){
    res.status(200).send('Get All Recipes');
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

recipesEndpoint.get('/:id', function(req,res){
    res.status(200).send('Get a recipe with the id '+req.params.id);
});

recipesEndpoint.put('/:id', function(req,res){
    res.status(200).send('Update a recipe with the id '+req.params.id);
});

recipesEndpoint.delete('/:id', function(req,res){
    res.status(204).send('Delete a recipe with the id '+req.params.id);
});

module.exports = recipesEndpoint;