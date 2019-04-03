var requireOption = require('../common').requireOption;

/**
 * Get the recipes with a given criteria and put them on res.tpl.recipes
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');

    return function (req, res, next) {
        recipeModel.find({ name: { $regex: "^" + (req.query.name || '') } })
            .sort({ added: -1 })
            .limit(4)
            .exec(function (err, results) {
                if (err) {
                    return next(err);
                }

                res.tpl.recipes = results;
                return next();
            });
    };
};
