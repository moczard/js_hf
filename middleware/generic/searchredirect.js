/**
 * This middleware redirects form /home to /recipes
 */
module.exports = function (objectrepository) {
	return function (req, res, next) {
		if (req.query.search) {
			return res.redirect('recipes?name=' + req.query.name);
		} else {
			return next();
		}
	};
};
