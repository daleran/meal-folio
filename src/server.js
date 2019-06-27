require('dotenv').config();
const api = require('./api');
const port = process.env.PORT;

api.listen(port, ()=> {
    console.log("Serving meal-folio API on port: "+port)
});