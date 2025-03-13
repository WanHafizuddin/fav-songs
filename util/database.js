const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT || 5432, // Default PostgreSQL port
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false, // Required for Render
  },
});
