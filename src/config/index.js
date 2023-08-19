const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'prod') {
  const configFile = `./.env`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config();
}

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  BASE_URL: process.env.BASE_URL,
  API_KEY: process.env.API_KEY,
};
