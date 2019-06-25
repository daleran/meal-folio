require('dotenv').config();

var express = require('express');
var app = express();


app.get('/',(req,res)=>  res.send("API root page"));


app.listen(process.env.PORT, ()=> console.log("Serving meal-folio API on port: "+process.env.PORT));