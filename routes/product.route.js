import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

import { protect } from "../middleware/authMiddleware.js"; // ⬅️ added

const router = express.Router();

// PUBLIC ROUTE
router.get("/", getProducts);

// PROTECTED ROUTES (login required)
router.post("/", protect, createProduct); // ⬅️ protected
router.put("/:id", protect, updateProduct); // ⬅️ protected
router.delete("/:id", protect, deleteProduct); // ⬅️ protected

export default router;
