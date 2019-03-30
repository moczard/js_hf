/**
 * Review model (mock)
 * @constructor
 */
var Review = function() {
};

/**
 * An instance
 */
var ReviewInstanceMock = {
	id: 1,
	recipeId: 2,
	rating: 4,
	comment: 'Nice recipe',
	added: '2019-03-12'
}

/**
 * Find all elements with the criteria
 * @param criteria
 * @param callback error first callback
 * @returns {*}
 */
Review.prototype.find = function (criteria, callback) {
  //returns 3 mocked item
  return callback(null, [ReviewInstanceMock, ReviewInstanceMock, ReviewInstanceMock]);
};

/**
 * Find best rated elements
 * @param callback error first callback
 * @returns {*}
 */
Review.prototype.findBest = function (callback) {
  //returns 4 recipeIds
  return callback(null, [1, 2, 3, 4]);
};

/**
 * Save the review to the db
 * @param callback error first callback
 * @returns {*}
 */
Review.prototype.save = function (callback) {
  return callback(null, this);
};

module.exports = Review;
