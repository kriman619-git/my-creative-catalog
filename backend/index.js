import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import authRoutes from "./routes/auth.js";
import itemRoutes from "./routes/items.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Creative Catalog API is running ✅"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
