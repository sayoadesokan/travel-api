const express = require('express');
const {
  flightDetails,
  flightDate,
  flightStatus,
  flightDepature,
  flightAirline,
  flightArrival,
} = require('../controller/flightController');
const router = express.Router();

router
  .get('/details', flightDetails)
  .get('/date', flightDate)
  .get('/status', flightStatus)
  .get('/depature', flightDepature)
  .get('/airline', flightAirline)
  .get('/arrival', flightArrival);

module.exports = router;
