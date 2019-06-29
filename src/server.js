const express = require('express')
const api = express()
const port = process.env.PORT || 3000

async function setupServer () {
  try {
    await require('./db/mongoose').connect()
    setUpRoutes()

    api.listen(port, () => {
      console.log(`Serving meal-folio API on port: ${port}`)
    })
  } catch (err) {
    console.log('error', err)
  }
}

function setUpRoutes () {
  const recipeRouter = require('./recipes/routes.recipe')
  api.use(express.json())
  api.use(express.static('public'))
  api.get('/', (req, res) => res.sendFile('/public/index.html'))
  api.use('/recipes', recipeRouter)
  api.all('*', (req, res) => res.status(404).send('404 Not Found'))
}

(async () => { await setupServer() })()

module.exports = api
