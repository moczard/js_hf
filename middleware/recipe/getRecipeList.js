var requireOption = require('../common').requireOption;

/**
 * Get the recipes with a given criteria and put them on res.tpl.recipes
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');

    return function (req, res, next) {
        recipeModel.find({}, function (err, results) {
            if (err) {
                return next(new Error('Error getting recipes'));
            }

            res.tpl.recipes = results;
            return next();
        });
    };
};
