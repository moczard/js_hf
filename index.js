var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.tpl = {};
  res.tpl.error = [];

  return next();
});

require('./routes/home')(app);
require('./routes/oneRecipe')(app);
require('./routes/recipeList')(app);

app.use(function (err, req, res, next) {
	res.status(500).send('ERROR');
	console.error(err.stack);
});

var server = app.listen(3000, function () {
});