const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");
var cors = require('cors');
require('dotenv').config()


//creating a server
const  app = express();

//connecting to
mongoose.connect('mongodb://localhost/rightdocs');
mongoose.Promise = global.Promise;



//middleware
app.use(cors());

app.use(bodyParser.json());

//routes
app.use("/api", routes);

//error handling middleware
app.use((err,req,res,next) =>{
  res.status(422).json({
    "error": err.message
  })
});

app.listen(process.env.port || 4000, ()=>{
  console.log("server up and running.........");
});
