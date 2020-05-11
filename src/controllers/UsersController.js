const db = require("../models");
const passport = require("../config/passport-config");

module.exports = {
  findById: function (req, res) {
    db.user
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  login: function (req, res) {
      passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "/login",
      })
  },
  register: function (req, res) {
      passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/register"
      })
  },
  remove: function (req, res) {
    db.user
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
