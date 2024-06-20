// routes/user.route.js
import express from "express";
import { getProfile } from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/user/getprofile/{id}:
 *   get:
 *     summary: Search user by registration number
 *     description: Search for a user by their registration number
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Need id of the user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User found successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: User not found
 */

router.get("/getprofile/:id", authenticateToken, getProfile);

export default router;
