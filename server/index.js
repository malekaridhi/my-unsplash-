const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require('fs');
require("dotenv").config();
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }, (err) => {
    if (err) throw err;
    console.log("MONGO connected on port 5050")
  }
  );

  const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`the server is running on port : ${PORT}`));