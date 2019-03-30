var renderMW = require('../middleware/generic/render');

var getRecipeListMW = require('../middleware/recipe/getRecipeList');
var getTopRatedRecipesMW = require('../middleware/recipe/getTopRatedRecipes');

var recipeModel = {};

module.exports = function (app) {

	var objectRepository = {
		recipeModel: recipeModel
	};

	/**
	 * List top rated and latest recipes
	 */
	app.use('/home',
		getRecipeListMW(objectRepository),
		getTopRatedRecipesMW(objectRepository),
		renderMW(objectRepository, 'recipes')
	);
};