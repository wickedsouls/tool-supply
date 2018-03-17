const express = require('express');
const app = express();
const tools = require('./json-data/tools');

app.get('/tools', (req, res) => {
  let allowedOrigins = ["https://enigmatic-cliffs-25405.herokuapp.com", "http://localhost:9000"];
  let origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
  }
  res.status(200).json({tools})
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});