const express = require("express");
const router = express.Router();

// Example endpoint
router.get("/", (req, res) => res.send("API is running"));

module.exports = router;
