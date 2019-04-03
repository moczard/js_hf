var renderMW = require('../middleware/generic/render');

var getRecipeMW = require('../middleware/recipe/getRecipe');
var getReviewByRecipeIdMW = require('../middleware/review/getReviewByRecipeId');
var updateRecipeMW = require('../middleware/recipe/updateRecipe');
var deleteRecipeMW = require('../middleware/recipe/deleteRecipe');
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
    renderMW(objectRepository, 'onerecipe')
  );

  /**
   * Edit recipe details
   */
  app.use('/recipe/:id/edit',
    getRecipeMW(objectRepository),
    updateRecipeMW(objectRepository),
    renderMW(objectRepository, 'editrecipe')
  );

  /**
  * Delete recipe (will redirect to /home after finish)
  */
  app.use('/recipe/:id/delete',
    getRecipeMW(objectRepository),
    deleteRecipeMW(objectRepository)
  );

  /**
   * Add review
   */
  app.post('/recipe/:id',
    getRecipeMW(objectRepository),
    addReviewMW(objectRepository)
  );
};
