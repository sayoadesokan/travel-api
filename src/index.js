const express = require('express');
const expressApp = require('./utils/expressApp');
const { PORT } = require('./config');
const app = express();

const startServer = async () => {
  try {
    await expressApp(app);
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
