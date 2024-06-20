import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const { password, ...userData } = user;
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};
