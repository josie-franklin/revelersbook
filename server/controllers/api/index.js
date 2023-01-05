const router = require('express').Router();

const chartRoutes = require('./chart-routes.js');

router.use('/charts', chartRoutes);

module.exports = router;