const api = require('./api');
const port = process.env.PORT || 3000;

api.listen(port, ()=> {
    console.log("Serving meal-folio API on port: "+port)
});