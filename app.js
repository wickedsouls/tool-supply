const express = require('express');
const app = express();
const tools = require('./json-data/tools');
const cors = require('cors');


app.use(cors());

app.get('/tools', (req, res) => {
  res.status(200).json({tools})
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});