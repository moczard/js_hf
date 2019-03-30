var express = require('express');
var app = express();

app.use(express.static('static'));

require('./routes/home')(app);
require('./routes/oneRecipe')(app);
require('./routes/recipeList')(app);

var server = app.listen(3000, function () {
});