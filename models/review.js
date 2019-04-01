var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Review = db.model('Review', {
	rating: Number,
	comment: String,
	added: Date,
	_recipeid: {
		type: Schema.Types.ObjectId,
		ref: 'Recipe'
	}
});

module.exports = Review;
