require('dotenv').config();

var express = require('express');
var app = express();


app.get('/',(req,res)=>  res.send("API root page"));

app.use('/recipes',require('./recipes/routes'));

app.all('*', (req,res)=> res.status(404).send('404 Not Found'));


app.listen(process.env.PORT, ()=> console.log("Serving meal-folio API on port: "+process.env.PORT));