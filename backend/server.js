const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const { initializeDatabase } = require("./config/db");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

initializeDatabase();

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
