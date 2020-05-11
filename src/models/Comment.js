module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45, 250],
      },
    },
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.Collection, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return Comment;
};
