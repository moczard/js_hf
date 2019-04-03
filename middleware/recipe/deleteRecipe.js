var requireOption = require('../common').requireOption;

/**
 * Delete the Recipe object
 */

module.exports = function (objectrepository) {
    var reviewModel = requireOption(objectrepository, 'reviewModel');

    return function (req, res, next) {
        if (typeof res.tpl.recipe === 'undefined') {
            return next();
        }

        // remove the reviews
        reviewModel.find({ _recipeid: res.tpl.recipe._id }).deleteMany(function (err) {
            if (err) {
                return next(err);
            }
        })

        // remove the recipe
        res.tpl.recipe.remove(function (err) {
            if (err) {
                return next(err);
            }

            res.redirect('/home');
        });
    };
};
