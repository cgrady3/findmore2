module.exports = function (sequelize, DataTypes) {
    var Collection = sequelize.define("Collection", {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [45,180],
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title2: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title3: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title4: {
        type: DataTypes.TEXT,
      },
      title5: {
        type: DataTypes.TEXT,
      },
      title6: {
        type: DataTypes.TEXT,
      },
      title7: {
        type: DataTypes.TEXT,
      },
      upVotes: {
        type: DataTypes.INTEGER,
      },
      downVotes: {
        type: DataTypes.INTEGER,
      },
    });
  
    Collection.associate = function (models) {
      Collection.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
      });
      Collection.hasMany(models.Comment, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
      });
    };
  
    return Collection;
  };