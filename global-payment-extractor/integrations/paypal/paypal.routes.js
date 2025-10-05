const express = require('express');
const router = express.Router();

// Import PayPal service (correct path!)
const paypalService = require('./paypal.service');

// Test endpoint
router.get('/', (req, res) => {
  res.send('PayPal API connected successfully!');
});

// Example payment endpoint
router.post('/pay', async (req, res) => {
  try {
    const result = await paypalService.createPayment(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
