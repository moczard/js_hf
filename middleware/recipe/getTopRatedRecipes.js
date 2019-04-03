var requireOption = require('../common').requireOption;

/**
 * Get the top rated recipes and put them on res.tpl.recipes
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');
    var reviewModel = requireOption(objectrepository, 'reviewModel');

    return function (req, res, next) {
        reviewModel.aggregate([
            {
                $group: { _id: "$_recipeid", averageRating: { $avg: "$rating" } },
            },
            {
                $sort: { averageRating: -1 }
            },
            {
                $limit: 4
            }
        ]).exec(function (err, results) {
            if (err) {
                return next(err);
            }

            recipeModel.find({ _id: results.map(r => r._id) }, function (err, recipes) {
                if (err) {
                    return next(err);
                }

                res.tpl.bestRecipes = recipes;
                return next();
            })
        });
    }
};
