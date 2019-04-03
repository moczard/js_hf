var requireOption = require('../common').requireOption;

/**
 * Create (or update) a recipe
 *  - if everything is ok redirect to /recipes/:id or /home
 */
recipe = null;
module.exports = function (objectrepository) {

    var recipeModel = requireOption(objectrepository, 'recipeModel');

    return function (req, res, next) {
        if (recipe === null) {
            if (typeof res.tpl.recipe !== 'undefined') {
                recipe = res.tpl.recipe;
            } else {
                recipe = new recipeModel();
                recipe.ingredients = [];
                recipe.preparations = [];
            }
        }

        res.tpl.recipe = recipe;
        if (req.body.ingredient) {
            recipe.ingredients.push(req.body.ingredient);
        }

        if (req.body.preparation) {
            recipe.preparations.push(req.body.preparation);
        }

        if (req.body.name) {
            recipe.name = req.body.name;
        }

        if (req.body.image) {
            recipe.image = req.body.image;
        }

        if (req.body.cancel) {
            recipe = null;
            return res.redirect('/home');
        }

        if (req.body.save) {
            recipe.added = new Date();
            recipe.save(function (err, result) {
                recipe = null;
                if (err) {
                    return next(err);
                }
                return res.redirect('/recipe/' + result._id);
            });
        } else {
            return next();
        }
    };
};