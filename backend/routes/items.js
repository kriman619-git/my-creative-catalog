// backend/routes/items.js
import express from "express";
import jwt from "jsonwebtoken";
import Item from "../models/Item.js";

const router = express.Router();

// Middleware to protect routes
const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

// Create a new item
router.post("/", protect, async (req, res) => {
  try {
    const item = await Item.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find().populate("createdBy", "name email");
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an item
router.patch("/:id", protect, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    if (item.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    Object.assign(item, req.body);
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an item
router.delete("/:id", protect, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    if (item.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await item.deleteOne(); // safer than remove()
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
