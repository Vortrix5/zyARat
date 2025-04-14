require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./Configurations/connectDB")

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const institutionRoutes = require("./Routes/institutionRoutes");
const ticketRoutes = require("./Routes/ticketRoutes");

app.use("/api/institution", institutionRoutes);
app.use("/api/ticket", ticketRoutes);

