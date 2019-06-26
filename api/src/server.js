require('dotenv').config();
var express = require('express');
var api = express();

require('./db/mongoose');



api.get('/',(req,res)=>  res.send("API root page"));
api.use(express.json());
api.use('/recipes',require('./recipes/recipe.routes'));
api.all('*', (req,res)=> res.status(404).send('404 Not Found'));

api.listen(process.env.PORT, ()=> console.log("Serving meal-folio API on port: "+process.env.PORT));