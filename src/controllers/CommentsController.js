const db = require("../models");

module.exports = {
  findByCollection: function (req, res) {
    db.Comment
      .findAll({
        include: [{ model: db.Collection }],
        where: {
          bookCollectionId: req.params.id
        }
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Comment
      .create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Comment
      .destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
