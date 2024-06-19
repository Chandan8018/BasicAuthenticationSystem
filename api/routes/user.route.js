// routes/user.route.js
import express from "express";
import { getProfile } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile", authenticateToken, getProfile);

export default router;
