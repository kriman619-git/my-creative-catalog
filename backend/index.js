import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"; // only once
import itemRoutes from "./routes/items.js"; // if you have item routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Routes
app.use("/auth", authRoutes);   // register & login
app.use("/items", itemRoutes);  // items CRUD

// Simple route
app.get("/", (req, res) => {
  res.send("API is working fine ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
