require('./db/mongoose')
const express = require('express')
const api = express()
const port = process.env.PORT || 3000

const userRouter = require('./users/routes.users')
const recipeRouter = require('./recipes/routes.recipes')

api.use(express.json())
api.use(express.static('public'))
api.get('/', (req, res) => res.sendFile('/public/index.html'))
api.use('/users', userRouter)
api.use('/recipes', recipeRouter)
api.all('*', (req, res) => res.status(404).send('404 Not Found'))

api.listen(port, () => {
  console.log(`Serving meal-folio API on port: ${port}`)
  api.emit('server_started')
})

module.exports = api
