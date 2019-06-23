const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('public'));

var handleRecipe = function(req, res){
  var newRecipe = {
    recipeName: req.body.recipeName,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  };
  res.send(JSON.stringify(newRecipe));
}

app.get('/', (req, res) => res.sendFile('/public/index.html'));
app.post('/recipes', handleRecipe);

app.listen(port, () => console.log(`Listening on port ${port}.`));

