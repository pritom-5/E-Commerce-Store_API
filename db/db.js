const mongoose = require("mongoose");

const connectDb = async () => {
  const mongo_uri = process.env.MONGODB_URI;
  await mongoose.connect(mongo_uri);
  console.log("db connected");
};

module.exports = connectDb;
