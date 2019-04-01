var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipe', { useNewUrlParser: true });

module.exports = mongoose;
