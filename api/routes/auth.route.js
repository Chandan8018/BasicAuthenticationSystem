import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: number
 *          description: The Auto-generated id of user collection
 *        username:
 *          type: string
 *          description: User name
 *        email:
 *          type: string
 *          description: user email address
 *        password:
 *          type: string
 *          description: user password
 *      example:
 *        username: Chandan123
 *        email: chandan@gmail.com
 *        password: chandan@123
 */
/**
 *  @swagger
 *  tags:
 *    name: Auth
 *    description: authentication apis
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, and password
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User registered successfully
 *       '400':
 *         description: Invalid request body
 *       '409':
 *         description: User already exists
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate user with email and password
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User authenticated successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized
 */
router.post("/login", login);

export default router;
