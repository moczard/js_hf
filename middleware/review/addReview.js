var requireOption = require('../common').requireOption;

/**
 * Create a review
 */
module.exports = function (objectrepository) {

	var reviewModel = requireOption(objectrepository, 'reviewModel');

  return function (req, res, next) {

    /**
		 * if (typeof req.body.comment === 'undefined')
     * {
     *   return next();
     * }
		 * var review = new reviewModel();
		 * review.recipeId = req.tpl.recipe.id;
		 * review.rating = req.body.rating;
		 * review.comment = req.body.comment;
		 * review.added = new Date();
		 * review.save(function(err,result){
     *    if (err){
     *      return next(err);
     *    }
     *
     *    return res.redirect('/recipe/' + res.tpl.recipe.id);
     *  )
		 */

    return next();
  };

};