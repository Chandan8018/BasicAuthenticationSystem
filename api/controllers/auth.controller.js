import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const userId = await User.create(username, email, hashedPassword);
    res.status(201).json({ userId, username, email });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isValidPassword = bcryptjs.compareSync(password, user.password);
    if (!isValidPassword) {
      return next(errorHandler(400, "Invalid password"));
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: pass, ...rest } = user;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ rest });
  } catch (error) {
    next(error);
  }
};
