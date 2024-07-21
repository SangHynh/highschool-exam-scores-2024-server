const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const scoreRoutes = require("./routes/apiRoute");

//Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT;

// Cors configs
app.use(cors({
  origin: process.env.URL_CLIENT
}))

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes api
app.use("/api", scoreRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
