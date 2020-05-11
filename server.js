require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./src/config/passport-config");
const app = express();
const routes = require("./src/routes");
const db = require("./src/models");
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);
// Add routes, both API and view
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ----/
db.sequelize
  .query("SET FOREIGN_KEY_CHECKS = 0")
  .then(function() {
    return db.sequelize.sync(syncOptions);
  })
  .then(function() {
    return db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  })
  .then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });

module.exports = app;