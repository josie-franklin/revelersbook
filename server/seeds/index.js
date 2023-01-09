const seedCharts = require('./chart-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedCharts();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedAll();