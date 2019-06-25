const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

var connection = mongoose.connection;
connection.on('error',console.error.bind('console', 'DB Connection Error:'));
connection.once('open', ()=> console.log('Connected to MongoDB on '+process.env.DB_URL));

module.exports = mongoose;