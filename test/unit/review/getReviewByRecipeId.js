var expect = require('chai').expect;
var getReviewByRecipeIdMW = require('../../../middleware/review/getReviewByRecipeId');

describe('getReviewByRecipeId middleware ', function () {

	it('should return reviews', function (done) {
		var req = {
			params: {
				id: 'test'
			}
		};
		var res = {
			tpl: {}
		};
		var fakeReviewModel = {
			find: function (params, callback) {
				callback(undefined, [{ rating: 3, comment: 'Test1' }, { rating: 2, comment: 'Test2' }])
			}
		}

		getReviewByRecipeIdMW({
			reviewModel: fakeReviewModel
		})(req, res, function (err) {
			expect(res.tpl.reviews).to.eql([{ rating: 3, comment: 'Test1' }, { rating: 2, comment: 'Test2' }]);
			expect(err).to.eql(undefined);
			done();
		})
	});


	it('should return error when db returns error', function (done) {
		var req = {
			params: {
				id: 'test'
			}
		};

		var fakeReviewModel = {
			find: function (params, callback) {
				callback('ERROR', undefined)
			}
		}

		getReviewByRecipeIdMW({
			reviewModel: fakeReviewModel
		})(req, {}, function (err) {
			expect(err).to.eql('ERROR');
			done();
		})
	});
});