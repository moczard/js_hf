var expect = require('chai').expect;
var getRecipeMW = require('../../../middleware/recipe/getRecipe');

describe('getRecipe middleware ', function () {

	it('should return one recipe', function (done) {
		var req = {
			params: {
				id: 'test'
			}
		};
		var res = {
			tpl: {}
		};
		var fakeRecipeModel = {
			findOne: function (findParam, callback) {
				callback(undefined, { name: 'rec1' });
			}
		}

		getRecipeMW({
			recipeModel: fakeRecipeModel
		})(req, res, function (err) {
			expect(res.tpl.recipe).to.eql({ name: 'rec1' });
			expect(err).to.eql(undefined);
			done();
		})
	});

	it('should redirect to home page when no recipe found', function (done) {
		var req = {
			params: {
				id: 'test'
			}
		};
		var res = {
			redirect: function (to) {
				expect(to).to.eql('/home');
				done();
			}
		};
		var fakeRecipeModel = {
			findOne: function (findParam, callback) {
				callback(undefined, undefined);
			}
		}

		getRecipeMW({
			recipeModel: fakeRecipeModel
		})(req, res, function (err) {
			expect(true).to.eql(false);
			done();
		})
	});

	it('should redirect to home when db returns an error', function (done) {
		var req = {
			params: {
				id: 'test'
			}
		};
		var res = {
			redirect: function (to) {
				expect(to).to.eql('/home');
				done();
			}
		};
		var fakeRecipeModel = {
			findOne: function (findParam, callback) {
				callback('ERROR', {});
			}
		}

		getRecipeMW({
			recipeModel: fakeRecipeModel
		})(req, res, function (err) {
			expect(true).to.eql(false);
			done();
		})
	});
});