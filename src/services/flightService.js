const { getFlightData } = require('../utils/flightAPI');
const { APIError, BadRequestError } = require('../utils/appErrors');
const { validation } = require('../utils/validator');

class FlightInputs {
  async getFlightData(userInput) {
    const { flightIataCode } = userInput;

    if (validation(flightIataCode)) {
      try {
        const { pagination, flights } = await getFlightData(flightIataCode);

        const flightData = {
          pagination,
          flights: flights.map((flight) => ({
            flight_date: flight.flight_date,
            flight_status: flight.flight_status,
            departure: flight.departure,
            arrival: flight.arrival,
            airline: flight.airline,
            flight: flight.flight,
            aircraft: flight.aircraft,
            live: flight.live,
          })),
        };

        return flightData;
      } catch (error) {
        throw new APIError('Error fetching flight data', error);
      }
    } else {
      throw new BadRequestError(
        'Invalid flight IATA code. Please provide a valid code.'
      );
    }
  }

  async getFlightDate(userInput) {
    const flightData = await this.getFlightData(userInput);
    return flightData.flights.map((flight) => flight.flight_date);
  }

  async getFlightStatus(userInput) {
    const flightData = await this.getFlightData(userInput);
    return flightData.flights.map((flight) => flight.flight_status);
  }

  async getFlightDepature(userInput) {
    const flightData = await this.getFlightData(userInput);
    return flightData.flights.map((flight) => flight.departure);
  }

  async getFlightAirline(userInput) {
    const flightData = await this.getFlightData(userInput);
    return flightData.flights.map((flight) => flight.airline);
  }

  async getFlightArrival(userInput) {
    const flightData = await this.getFlightData(userInput);
    return flightData.flights.map((flight) => flight.arrival);
  }
}

module.exports = FlightInputs;
