var renderMW = require('../middleware/generic/render');

var getRecipeListMW = require('../middleware/recipe/getRecipeList');
var getRecipeMW = require('../middleware/recipe/getRecipe');
var deleteRecipeMW = require('../middleware/recipe/deleteRecipe');
var updateRecipeMW = require('../middleware/recipe/updateRecipe');

var recipeModel = require('../models/recipe');

module.exports = function (app) {
    var objectRepository = {
        recipeModel: recipeModel
    };

    /**
    * List searched recipes
    */
    app.use('/recipes',
        getRecipeListMW(objectRepository),
        renderMW(objectRepository, 'recipes')
    );

    /**
    * Create new recipes
    */
    app.use('/recipes/new',
        updateRecipeMW(objectRepository),
        renderMW(objectRepository, 'newrecipe')
    );

    /**
    * Edit recipe details
    */
    app.use('/recipe/:id/edit',
        getRecipeMW(objectRepository),
        updateRecipeMW(objectRepository),
        renderMW(objectRepository, 'newrecipe')
    );

    /**
    * Delete recipe (will redirect to /home after finish)
    */
    app.use('/recipe/:id/delete',
        getRecipeMW(objectRepository),
        deleteRecipeMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/home');
        }
    );
}