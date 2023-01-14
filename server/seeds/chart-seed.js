const sequelize = require("../config/connection");
const { Chart } = require("../models");

const chartData = [
  {
    bookNumber: 1,
    title: "Chasers",
    composer: "",
    arranger: "",
  },
  {
    bookNumber: 2,
    title: "Special Occasion Medley",
    composer: "Frank Comstock",
    arranger: "",
  },
  {
    bookNumber: 3,
    title: "East of the Sun",
    composer: "Brooks Bowman",
    arranger: "Jack Aston",
  },
];

const seedCharts = () => Chart.bulkCreate(chartData, { individualHooks: true });

module.exports = seedCharts;
