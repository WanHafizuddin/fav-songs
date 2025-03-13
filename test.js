const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT || 5432,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  ssl: { rejectUnauthorized: false },
});

const createTable = async () => {
  try {
    await pool.query(
      `CREATE TABLE IF NOT EXISTS song_table (
        id SERIAL PRIMARY KEY,
        song VARCHAR(255) NOT NULL,
        artist VARCHAR(255) NOT NULL,
        genre VARCHAR(100) NOT NULL
      );`
    );
    console.log("✅ Table created successfully");
  } catch (err) {
    console.error("DB Error:", err);
  } finally {
    pool.end();
  }
};

createTable();
