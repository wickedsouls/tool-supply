const express = require('express');
const app = express();
const tools = require('./json-data/tools');

app.use(function(req, res, next) {

  return next();
});

app.get('/tools', (req, res) => {
  res.status(200).json({tools})
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});