/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to /home 
 */
module.exports = function (objectrepository) {

  return function (req, res, next) {
      return res.redirect('/home');
  };

};
