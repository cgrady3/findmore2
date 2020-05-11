const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  findByTitle: function (req, res) {
    db.Collection.findAll({
      where: {
        [Op.and]: [
          { type: req.params.type },
          {
            [Op.or]: [
              { title1: req.params.title },
              { title2: req.params.title },
              { title3: req.params.title },
              { title4: req.params.title },
              { title5: req.params.title },
              { title6: req.params.title },
              { title7: req.params.title },
            ],
          },
        ],
      },
    })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Collection.findOne({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.Collection.findOne({
      include: [{ model: db.user }],
      where: { userId: req.params.id },
    })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Collection.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  updateUpVotes: function (req, res) {
    db.Collection.update(
      { upVotes: req.params.votes + 1 },
      { where: { id: req.params.id } }
    )
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  updateDownVotes: function (req, res) {
    db.Collection.update(
      { downVotes: req.params.votes - 1 },
      { where: { id: req.params.id } }
    )
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Collection.destroy({ where: { id: req.params.id } })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
