const passport = require('passport');

module.exports = app => {
  //Present user with request for Google profile info
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile email']
    })
  );
  
  //After obtaining user permission, present token to Google to get user info
  app.get('/auth/google/callback', passport.authenticate('google'));
};
