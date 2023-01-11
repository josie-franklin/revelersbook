const sequelize = require("../config/connection");
const { Chart } = require("../models");

const chartData = [
  {
    bookNumber: 1,
    title: "",
    composer: "",
    arranger: "",
  },
  {
    bookNumber: 2,
    title: "",
    composer: "",
    arranger: "",
  },
  {
    bookNumber: 2,
    title: "",
    composer: "",
    arranger: "",
  },
];

const seedCharts = () => Chart.bulkCreate(chartData, { individualHooks: true });

module.exports = seedCharts;
