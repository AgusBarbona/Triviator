const express = require('express')
const app = express();
const cors = require("cors");


const port = process.env.PORT || 3000;

// Middleware ----------------

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true })); 

//--------------------------------

app.get('/', (req, res) => {
  res.send('Hello Server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
}) 

