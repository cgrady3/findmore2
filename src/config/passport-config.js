const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
var bcrypt = require("bcryptjs");

// registration handler
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passReqToCallback: true
    },
    function(req, username, password, done) {
      db.users
        .findOne({ where: { username: username } })
        .then(function(err, user) {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(null, false, {
              message: "username is already in use."
            });
          }
          db.users
            .create({
              username: username,
              password: password
            })
            .then(function(dbUser) {
              return done(null, dbUser);
            });
        });
    }
  )
);

// login handler
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "username"
    },
    function(username, password, done) {
      db.users.findOne({ where: { username: username } }).then(function(user) {
        if (!user) {
          return done(null, false, { message: "username incorrect" });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;