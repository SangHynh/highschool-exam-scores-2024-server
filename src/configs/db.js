const mysql = require("mysql");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const host = process.env.DB_HOST
const  user =  process.env.DB_USER
const  password = process.env.DB_PASSWORD
const database = process.env.DB_NAME
const port = process.env.DB_PORT

// Create config for connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Connect to database
connection.connect((err) => {
  if (err) {
    console.error("Connect to database failed", err);
    return;
  }
  console.log("Connect to database successfully");
});

module.exports = connection;
