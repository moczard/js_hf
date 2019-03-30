var requireOption = require('../common').requireOption;

/**
 * Delete the Recipe object
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');

    return function (req, res, next) {

        return next();
    };

};
