var recipesEndpoint = require('express').Router();

recipesEndpoint.get('/', function(req,res){
    res.status(200).send('Get All Recipes');
});

recipesEndpoint.post('/', function(req,res){
    res.status(201).send('Post a new recipe');
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