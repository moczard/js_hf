/**
 * Recipe model (mock)
 * @constructor
 */
var Recipe = function () {
};

/**
 * An instance
 */
var RecipeInstanceMock = {
	id: 2,
	name: 'cookie',
	image: 'img',
	ingredients: ['1.5l milk', 'salt'],
	preparation: ['cut that', 'cook that'],
	added: '2019-03-14'
}

/**
 * Find one element with the criteria
 * @param criteria
 * @param callback error first callback
 * @returns {*}
 */
Recipe.prototype.findOne = function (criteria, callback) {

  //returns 1 mocked item
  return callback(null, RecipeInstanceMock);
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param callback error first callback
 * @returns {*}
 */
Recipe.prototype.find = function (criteria, callback) {

  //returns 3 mocked item
  return callback(null, [RecipeInstanceMock, RecipeInstanceMock, RecipeInstanceMock]);
};

/**
 * Save the item to the db
 * @param callback error first callback
 * @returns {*}
 */
Recipe.prototype.save = function (callback) {
  return callback(null, this);
};

/**
 * Delete an object
 * @param callback
 * @returns {*}
 */
Recipe.prototype.remove = function (callback) {
  return callback(null);
};

module.exports = Recipe;