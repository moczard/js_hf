var requireOption = require('../common').requireOption;

/**
 * Get the top rated recipes and put them on res.tpl.recipes
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');

    return function (req, res, next) {

        return next();
    };

};
