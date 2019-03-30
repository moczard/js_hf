var requireOption = require('../common').requireOption;

/**
 * Create (or update) a recipe if we have the data for it
 *  - if everything is ok redirect to /recipes/:id
 */

module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');

    return function (req, res, next) {

        return next();
    };

};