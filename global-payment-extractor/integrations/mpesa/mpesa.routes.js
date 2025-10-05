// integrations/mpesa/mpesa.routes.js
const express = require("express");
const router = express.Router();
const MpesaService = require("./mpesa.service");

// Example: initiate payment
router.post("/pay", async (req, res) => {
  try {
    const { phone, amount } = req.body;
    const response = await MpesaService.initiatePayment(phone, amount);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Example: check transaction status
router.get("/status/:transactionId", async (req, res) => {
  try {
    const { transactionId } = req.params;
    const response = await MpesaService.checkTransaction(transactionId);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
