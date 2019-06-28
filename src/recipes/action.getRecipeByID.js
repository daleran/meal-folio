module.exports = function (id) {
  return require('./model.recipe').findOne({ _id: id })
}
