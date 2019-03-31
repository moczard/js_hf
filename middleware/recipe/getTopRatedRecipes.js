var requireOption = require('../common').requireOption;

/**
 * Get the top rated recipes and put them on res.tpl.recipes
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');
    var reviewModel = requireOption(objectrepository, 'reviewModel');

    return function (req, res, next) {
        reviewModel.findBest(function (err, ids) {
            if (err) {
                return next(new Error('Error getting best recipeIds'));
            }

            recipeModel.findByIds(ids, function (err, recipes) {
                if (err) {
                    return next(new Error('Error getting recipes'));
                }
    
                res.tpl.bestRecipes = recipes;
                return next();
            });
        });
    };
};
