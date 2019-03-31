var requireOption = require('../common').requireOption;

/**
 * Get the recipe for the id param
 *  - if there is no such recipe, redirect to /home
 *  - if there is one, put it on res.tpl.recipes
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');

    return function (req, res, next) {
        recipeModel.findOne({ id: req.params.recipeId }, function (err, result) {
            if (err || !result) {
                return req.redirect('/home');
            }

            res.tpl.recipe = result;
            return next();
        });
    };
};
