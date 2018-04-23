const express = require('express');
const app = express();
const tools = require('./json-data/tools');
const menu = require('./json-data/menu');
const questions = require('./json-data/questions');
const cors = require('cors');


app.use(cors());

app.get('/tools', (req, res) => {
  res.status(200).json({tools})
});
app.get('/menu', (req,res)=>{
    res.status(200).json({menu})
});
app.get('/questions', (req,res)=>{
  res.status(200).json({questions})
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});