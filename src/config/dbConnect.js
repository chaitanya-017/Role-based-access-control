const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = dbConnect;
