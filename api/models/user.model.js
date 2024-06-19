import connection from "../db.js";

const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await connection.execute(query);
};

createUserTable();

const User = {
  create: async (username, email, password) => {
    const query =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const [result] = await connection.execute(query, [
      username,
      email,
      password,
    ]);
    return result.insertId;
  },

  findByEmail: async (email) => {
    const query = "SELECT * FROM users WHERE email = ?";
    const [rows] = await connection.execute(query, [email]);
    return rows[0];
  },

  findById: async (id) => {
    const query = "SELECT * FROM users WHERE id = ?";
    const [rows] = await connection.execute(query, [id]);
    return rows[0];
  },
};

export default User;
