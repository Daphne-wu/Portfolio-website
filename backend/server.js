require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const MONGODB = process.env.MONGODB;
// Connect to MongoDB
mongoose.connect(MONGODB)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

// Routes
app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
