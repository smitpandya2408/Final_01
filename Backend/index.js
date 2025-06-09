import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // Load env vars

const app = express();
const port = 3000;
const MongoDBURL = process.env.MONGODBURL; // Use uppercase env var

app.use(cors());
app.use(express.json()); // Required to parse JSON body

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(MongoDBURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectToMongoDB();

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
