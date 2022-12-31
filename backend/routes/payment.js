const express = require("express");
const { getPublishableKey } = require("../controllers/paymentController");
const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

router.get('/publishable/key', verifyToken, getPublishableKey);


module.exports = router;