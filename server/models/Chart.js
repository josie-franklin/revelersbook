const sequelize = require("../config/connection.js");
const { Model, DataTypes } = require("sequelize");

class Chart extends Model {}

Chart.init(
  {
    bookNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    composer: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    arranger: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "chart",
  }
);

module.exports = Chart;
