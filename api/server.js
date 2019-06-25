require('dotenv').config();

var express = require('express');
var app = express();


app.listen(process.env.PORT, ()=> console.log("Serving meal-folio API on port: "+process.env.PORT));

