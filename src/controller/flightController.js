const FlightInputs = require('../services/flightService');
const { APIError, BadRequestError } = require('../utils/appErrors');

const service = new FlightInputs();

module.exports.flightDetails = async (req, res, next) => {
  try {
    const { flightIataCode } = req.body;

    const flightData = await service.getFlightData({ flightIataCode });

    return res.status(200).json({
      message: 'Success!',
      data: flightData,
    });
  } catch (error) {
    if (error instanceof BadRequestError || error instanceof APIError) {
      res.status(error.statusCode).json(error);
    } else {
      next(error);
    }
  }
};

module.exports.flightDate = async (req, res, next) => {
  try {
    const { flightIataCode } = req.body;

    const flightData = await service.getFlightDate({ flightIataCode });

    return res.status(200).json({
      message: 'Success!',
      data: flightData,
    });
  } catch (error) {
    if (error instanceof BadRequestError || error instanceof APIError) {
      res.status(error.statusCode).json(error);
    } else {
      next(error);
    }
  }
};

module.exports.flightStatus = async (req, res, next) => {
  try {
    const { flightIataCode } = req.body;

    const flightData = await service.getFlightStatus({ flightIataCode });

    return res.status(200).json({
      message: 'Success!',
      data: flightData,
    });
  } catch (error) {
    if (error instanceof BadRequestError || error instanceof APIError) {
      res.status(error.statusCode).json(error);
    } else {
      next(error);
    }
  }
};

module.exports.flightDepature = async (req, res, next) => {
  try {
    const { flightIataCode } = req.body;

    const flightData = await service.getFlightDepature({ flightIataCode });

    return res.status(200).json({
      message: 'Success!',
      data: flightData,
    });
  } catch (error) {
    if (error instanceof BadRequestError || error instanceof APIError) {
      res.status(error.statusCode).json(error);
    } else {
      next(error);
    }
  }
};

module.exports.flightAirline = async (req, res, next) => {
  try {
    const { flightIataCode } = req.body;

    const flightData = await service.getFlightAirline({ flightIataCode });

    return res.status(200).json({
      message: 'Success!',
      data: flightData,
    });
  } catch (error) {
    if (error instanceof BadRequestError || error instanceof APIError) {
      res.status(error.statusCode).json(error);
    } else {
      next(error);
    }
  }
};

module.exports.flightArrival = async (req, res, next) => {
  try {
    const { flightIataCode } = req.body;

    const flightData = await service.getFlightArrival({ flightIataCode });

    return res.status(200).json({
      message: 'Success!',
      data: flightData,
    });
  } catch (error) {
    if (error instanceof BadRequestError || error instanceof APIError) {
      res.status(error.statusCode).json(error);
    } else {
      next(error);
    }
  }
};
