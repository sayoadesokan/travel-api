# Thriller Travels

## Introduction

Welcome to the API documentation for \*_Thriller Travel API \*_. This guide will provide you with the necessary information to interact with the \*SIX BUILT API \*\_ endpoints and utilize their functionalities. Please follow the instructions below to get started.

## Documentation

The URL for the documentation: `https://documenter.getpostman.com/view/22494723/2s9Y5SWR7Y`

## Base URL

The base URL for all API requests is: `https://easy-capris-bat.cyclic.cloud`

# Endpoints

## Flight API

### GET /details

- Get flight details.
- Endpoint: `/v1/ap1/details`

### GET /date

- Get flight details by date.
- Endpoint: `/v1/api/date`

### GET /status

- Get flight details by status.
- Endpoint: `/v1/api/status`

### GET /departure

- Get flight details by departure.
- Endpoint: `/v1/api/depature`

### GET /airline

- Get flight details by airline.
- Endpoint: `/v1/api/airline`

### GET /arrival

- Get flight details by arrival.
- Endpoint: `/v1/api/arrival`

### GET USERS FLIGHT DETAILS

**Description:** To get the flight Details

**URL:** `https://easy-capris-bat.cyclic.cloud/v1/api/details`

**Method:** `[GET]`

#### Request Body using the user ticket code (IATA):

```json
{
  "flightIataCode": "SQ305"
}
```

Response: returns flight details, does not return an empty array-object
Status Code: 200 OK

```json
  "pagination": {
    "limit": 100,
    "offset": 0,
    "count": 2,{
  "success": true,
  "data": {
    "field1": "value1",
    "field2": "value2"
  }
}
    "total": 2
  },
  "flights": [{}]
```

Status Code: 400 Bad Request

```json
{
  "error": {
    "name": "NOT FOUND",
    "statusCode": 400,
    "description": "Invalid flight IATA code. Please provide a valid code."
  }
}
```

Example
Request:

[GET STATUS] `https://easy-capris-bat.cyclic.cloud/v1/api/details`
Request Body:

```json
{
  "flightIataCode": "SQ305"
}
```

Response:
Status Code: 200 OK
Response Body:

```json
["active", "landed"]
```

Status Code: 400 Bad Request

```json
{
  "error": {
    "name": "NOT FOUND",
    "statusCode": 400,
    "description": "Invalid flight IATA code. Please provide a valid code."
  }
}
```

# Conclusion

You have successfully learned how to interact with Triller travel endpoints. Please feel free to explore the different endpoints and functionalities provided by the API. If you encounter any issues or have any questions, please refer to the provided contact information.
