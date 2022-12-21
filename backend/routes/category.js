const express = require("express");
const { createCategory } = require("../controllers/categoryController");
const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

// CREATE
router.post("/", verifyToken, createCategory);

module.exports = router;