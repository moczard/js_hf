var renderMW = require('../middleware/generic/render');

var getRecipeMW = require('../middleware/recipe/getRecipe');
var getReviewByRecipeIdMW = require('../middleware/review/getReviewByRecipeId');
var addReviewMW = require('../middleware/review/addReview');

var recipeModel = require('../models/recipe');
var reviewModel = require('../models/review');

module.exports = function (app) {
  var objectRepository = {
    recipeModel: recipeModel,
    reviewModel: reviewModel
  };

  /**
   * Show one recipe
   */
  app.get('/recipe/:id',
    getRecipeMW(objectRepository),
    getReviewByRecipeIdMW(objectRepository),
    renderMW(objectRepository, 'recipe')
  );

  /**
   * Add review
   */
  app.get('/recipe/:id',
		getRecipeMW(objectRepository),
    addReviewMW(objectRepository),
    function (req, res, next) {
      return res.redirect('/recipe/' + req.param('id'));
    });
};
