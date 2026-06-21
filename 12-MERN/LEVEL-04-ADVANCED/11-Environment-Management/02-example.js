// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  // Select connection string based on active environment status
  const connectionString = process.env.NODE_ENV === 'production' 
    ? process.env.MONGO_URI_PROD 
    : 'mongodb://localhost:27017/devdb';

  await mongoose.connect(connectionString);
  console.log(`Connected to ${process.env.NODE_ENV} database.`);
};

module.exports = connectDB;