const mongoose = require("mongoose");

const connectDB = (MONGODB_URL) => {
  return mongoose.connect(MONGODB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
