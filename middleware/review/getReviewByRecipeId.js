var requireOption = require('../common').requireOption;

/**
 * Get the reviews for the :recipeId recipe
 *  - if there is one, put it on res.tpl.reviews
 */
module.exports = function (objectrepository) {

  var reviewModel = requireOption(objectrepository, 'reviewModel');

  return function (req, res, next) {
    /**
     *  reviewModel.find({ recipeId: req.param('recipeId')},function(err,results){
     *    if (err){
     *      return next(err);
     *    }
     *
     *    res.tpl.reviews = results;
     *    return next();
     *  )
     */

    return next();
  };

};
