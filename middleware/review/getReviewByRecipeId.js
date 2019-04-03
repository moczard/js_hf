var requireOption = require('../common').requireOption;

/**
 * Get the reviews for the :id recipe
 *  - if there is any, put it on res.tpl.reviews
 */
module.exports = function (objectrepository) {
  var reviewModel = requireOption(objectrepository, 'reviewModel');

  return function (req, res, next) {
    reviewModel.find({ _recipeid: req.params.id }, function (err, results) {
      if (err) {
        return next(err);
      }
      res.tpl.reviews = results;
      return next();
    });
  };

};
