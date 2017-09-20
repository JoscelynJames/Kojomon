const express = require('express');
const passport = require('passport');
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/login');
const request = require('request');
const knex = require('../knex/knex.js')
require('dotenv').config();
const router = express.Router();


// THIS PULLS UP THE AUTH0 LOGIN PAGE
router.get('/login', passport.authenticate('auth0', {
    clientID: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_DOMAIN,
    redirectUri: process.env.AUTH0_CALLBACK_URL,
    audience: 'https://' + process.env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid profile email'
  }),
  function(req, res) {
    res.redirect('/');
  }
);

// USER LOGOUT
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


// THIS WILL REDIRECT THE USER TO THE HOME PAGE OF THE GAME AFTER THEY LOGIN
// router.get('/callback', passport.authenticate('auth0', {
//     failureRedirect: '/'
//   }), // ensureLoggedIn,
//   function(req, res) {
//     var user = {
//       last_login: req.user._json.updated_at,
//       email: req.user.emails[0].value,
//       name: req.user.name.givenName
//     };
//     updateUser(user);
//     res.redirect('https://kojomon-ae289.firebaseapp.com/home.html');
//   }
// );


router.get('/callback', passport.authenticate('auth0', {
     failureRedirect: '/'
   }),
   function(req, res) {
     var user = {
       last_login: req.user._json.updated_at,
       email: req.user.emails[0].value,
       name: req.user.name.givenName
     };
     updateUser(user);
     console.log(user);
     res.send(user);
   }
 );



// THIS WILL MAKE SURE THE USER EXISTS, IF THEY DO, IT WILL SHOW THEIR PET AND DATA.
// IF THEY DONT EXIST, IT WILL SHOW THEM A NEW GAME
function updateUser(user) {
  return knex('player').where('email', user.email)
    .then(function(player) {
      if (!player || player.length < 1) {
        console.log('player not found', player);
        return knex('player')
          .insert(user);
        //if user does no exist
        // .then((x) => {
        //   redirect to play.html
        //   display how to & new kojomon info
        // })
      }
      console.log('player found', JSON.parse(JSON.stringify(player)));
      return knex('player')
        .where('email', user.email)
        .update({
          last_login: user.last_login
        });
      //if user already exist
      // .then((b) => {
      //   redirect to the firebase play.html
      //   display pet.id where player.id = player_id & where active = true
      // })
    });
}

module.exports = router;
