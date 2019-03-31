var renderMW = require('../middleware/generic/render');

var mainRedirectMW = require('../middleware/generic/mainredirect');

var getRecipeListMW = require('../middleware/recipe/getRecipeList');
var getTopRatedRecipesMW = require('../middleware/recipe/getTopRatedRecipes');

var recipeModel = require('../models/recipe');
var reviewModel = require('../models/review');

module.exports = function (app) {

	var objectRepository = {
		recipeModel: recipeModel,
		reviewModel: reviewModel
	};

	/**
   * Main page
   */
  app.get('/',
    mainRedirectMW(objectRepository)
  );

	/**
	 * List top rated and latest recipes
	 */
	app.use('/home',
		getRecipeListMW(objectRepository),
		getTopRatedRecipesMW(objectRepository),
		renderMW(objectRepository, 'home')
	);
};