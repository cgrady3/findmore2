var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8, 15],
        is: ["^[A-Za-z0-9_-]+$",'i']
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [8],
        is: ["^[a-z]+$",'i']
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Collection, {
      onDelete: "cascade"
    });
  };

  User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", function(User) {
    User.password = bcrypt.hashSync(
      User.password, 10
    );
  });

  return User;
};