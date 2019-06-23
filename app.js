const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile('/public/index.html'));
app.post('/recipes', (req, res) => res.send('Form recieved.'));

app.listen(port, () => console.log(`Listening on port ${port}.`));

