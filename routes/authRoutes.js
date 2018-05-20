const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log("auth")
      res.send(req.user);
    }
  );

  // const fetchAlbums = async ()=>{
  //   const res =await fetch();
  //   const json = await res.json();

  // }
  app.get(
    '/test',
    (req, res) => {
      res.redirect('/api/current_user');
    }
  );
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });
  
};
