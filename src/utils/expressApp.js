const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('../routes/flightRoutes');

module.exports = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors());

  app.use('/v1/travel', router);
};
