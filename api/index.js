import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { errorHandler } from "./utils/error.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 7970;

app.use(bodyParser.json());
app.use(cookieParser());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Basic Authentication System",
      version: "1.0.0",
      description: "Node JS Basic Authentication System API",
      contact: {
        name: "Chandan Kumar Sahoo",
        email: "chandankumarsahoo@gmail.com",
        url: "https://github.com/Chandan8018",
      },
    },
    servers: [
      {
        url: "http://localhost:7979/",
      },
    ],
  },

  apis: ["./api/routes/*.js"],
};

const specification = swaggerJSDoc(options);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specification));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
