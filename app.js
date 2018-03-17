const express = require('express');
const app = express();
const tools = require('./json-data/tools');

// allow acces from other ports (Cross Origin Resource Sharing)
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Origin',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if(req.method ==='OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH DELETE GET');
    return res.status(200).json({})
  }
  next()
});

app.get('/tools', (req, res) => {
  res.status(200).json({tools})
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});