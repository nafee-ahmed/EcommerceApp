const express = require("express");
const {
  initPayment,
  createPayment,
  getPayments,
} = require("../controllers/paymentController");
const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

router.post("/initialize", verifyToken, initPayment);
router.post("/create", verifyToken, createPayment);
router.get("/", verifyToken, getPayments);

module.exports = router;
