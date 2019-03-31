var renderMW = require('../middleware/generic/render');

var getRecipeListMW = require('../middleware/recipe/getRecipeList');
var updateRecipeMW = require('../middleware/recipe/updateRecipe');

var recipeModel = require('../models/recipe');

module.exports = function (app) {
    var objectRepository = {
        recipeModel: recipeModel
    };

    /**
    * List searched recipes
    */
    app.get('/recipes',
        getRecipeListMW(objectRepository),
        renderMW(objectRepository, 'recipelist')
    );

    /**
    * Create new recipes
    */
    app.use('/recipes/new',
        updateRecipeMW(objectRepository),
        renderMW(objectRepository, 'newrecipe')
    );
}