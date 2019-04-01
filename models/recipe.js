var db = require('../config/db');

var Recipe = db.model('Recipe', {
  name: String,
  image: String,
  ingredients: [String],
  preparations: [String],
  added: Date
})

module.exports = Recipe;
