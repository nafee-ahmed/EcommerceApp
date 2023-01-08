const express = require("express");
const {
  initPayment,
  createPayment,
  getPayments,
  getOrders,
} = require("../controllers/paymentController");
const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

router.post("/initialize", verifyToken, initPayment);
router.post("/create", verifyToken, createPayment);
router.get("/", verifyToken, getPayments);
router.get("/orders", verifyToken, getOrders);

module.exports = router;
