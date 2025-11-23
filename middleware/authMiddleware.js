// ✅ Import jwt at the top
import jwt from "jsonwebtoken";
import user from "../models/user.model.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    // Check if Authorization header exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extract token
      token = req.headers.authorization.split(" ")[1];
    }

    console.log("Token from header:", token); // ✅ DEBUG

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. No token provided",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token payload:", decoded); // ✅ DEBUG

    req.user = await user.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    next();
  } catch (error) {
    console.error("JWT error:", error); //  DEBUG
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
