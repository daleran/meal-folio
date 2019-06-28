const express = require('express')
require('./db/mongoose')
const recipeRouter = require('./recipes/recipe.routes')

var api = express()

api.use(express.json())
api.use(express.static('public'))
api.get('/', (req, res) => res.sendFile('/public/index.html'))
api.use('/recipes', recipeRouter)
api.all('*', (req, res) => res.status(404).send('404 Not Found'))

module.exports = api
