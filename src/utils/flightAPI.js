const axios = require('axios');
const { API_KEY, BASE_URL } = require('../config');

const API_URL = BASE_URL;
const ACCESS_KEY = API_KEY;

const getFlightData = async (flightIataCode) => {
  const params = {
    access_key: ACCESS_KEY,
    flight_iata: flightIataCode,
  };

  try {
    const response = await axios.get(API_URL, { params });
    const flightData = response.data;

    const pagination = flightData.pagination;
    const flights = flightData.data;

    return { pagination, flights };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getFlightData };
