require('dotenv').config();
var express = require('express');
var db = require('./db');
var api = express();


api.get('/',(req,res)=>  res.send("API root page"));
api.use('/recipes',require('./recipes/routes'));
api.all('*', (req,res)=> res.status(404).send('404 Not Found'));

api.listen(process.env.PORT, ()=> console.log("Serving meal-folio API on port: "+process.env.PORT));