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

  //deauthenticate user and kill their cookie
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //check the login status of current user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
