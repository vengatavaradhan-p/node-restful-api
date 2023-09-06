const mongoose = require("mongoose")

const { MONGODB_URI } = require("dotenv").config().parsed;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "freekart" });

// Get the default connection
const db = mongoose.connection;

// Event handling for successful connection
db.on('connected', () => {
  console.log(`Connected to MongoDB at ${MONGODB_URI}`);
});

// Event handling for connection error
db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Event handling when the connection is disconnected
db.on('disconnected', () => {
  console.log('MongoDB connection disconnected');
});

// Gracefully close the MongoDB connection when the Node.js app is terminated
process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});

module.exports = db;
