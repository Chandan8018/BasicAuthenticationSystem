# Basic Authentication System

Welcome to the Basic Authentication System! This project is a simple and robust authentication system built with Node.js, Express, and MySQL2. The system allows users to register, login, and access protected routes.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- API Documentation with Swagger
- Error Handling

## Tech Stack

- Node.js
- Express
- MySQL2
- Sequelize (ORM)
- JWT (JSON Web Tokens)
- Swagger for API Documentation
- Mocha & Chai for Testing

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/chandan8018/basicauthenticationsystem.git
    cd basicauthenticationsystem
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up your `.env` file**:

    Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    PORT=7979
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=authsystem
    JWT_SECRET=your_secret_key
    ```

4. **Run the application**:

    ```bash
    npm start
    ```

## Environment Variables

Make sure to create a `.env` file in the root directory of your project and configure the following environment variables:

- `PORT`: The port number on which the server will run.
- `DB_HOST`: The hostname of your MySQL database.
- `DB_USER`: The username for your MySQL database.
- `DB_PASSWORD`: The password for your MySQL database.
- `DB_NAME`: The name of your MySQL database.
- `JWT_SECRET`: Secret key for JWT signing and verification.

## Usage

### Running the Server

To run the server, use the following command:

```bash
npm start
```
### Project Structure

```bash
project-directory/
├── api
|   ├── controllers/
|   |   ├── auth.controller.js
|   │   └── user.controller.js
|   ├── middlewares/
|   │   └── auth.middleware.js
|   ├── models/
|   │   └── user.model.js
|   ├── routes/
|   │   ├── auth.route.js
|   │   └── user.route.js
|   ├── utils/
|   │   └── error.js
|   ├── test/
|   │   └── auth.test.js
|   ├── db.js
|   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

### API Documentation

The API documentation is created using Swagger. To view the documentation, run the server just click on [api-docs](http://localhost:7979/api-docs) it's naviget to your browser.
---

[api-docs](./assets/Swagger-UI.png)
