const mysql = require("mysql");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create config for connection to database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10, // Maximum number of connections to create at once
  waitForConnections: true,
  queueLimit: 0 ,
  acquireTimeout: 30000, // max waiting time to connect
});

module.exports = pool;
