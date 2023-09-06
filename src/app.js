require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const apiRoutes = require("./routes/api/v1/index");
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/v1", apiRoutes);

app.use((req, res) => {
  res.status(200).json({
    message: "Its working...",
  });
});

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404;
  next(error)
})

app.use((req, res, next) => {
  req.headers('Access-Control-Allow-Origin', '*');
  req.headers('Access-Contol-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept, Authorization');
  if(req.method === 'OPTIONS') {
      req.headers('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE')
      return res.status(200).json({})
  }
  next();
})

module.exports = app;
