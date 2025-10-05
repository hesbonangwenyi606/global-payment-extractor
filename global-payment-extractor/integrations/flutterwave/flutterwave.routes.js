const express = require('express');
const router = express.Router();
const flutterwaveService = require('./flutterwave.service');

// GET test endpoint
router.get('/', (req, res) => {
  res.json({ message: '✅ Flutterwave API connected successfully!' });
});

// POST initiate payment
router.post('/pay', async (req, res) => {
  const { email, amount, currency } = req.body;
  try {
    const result = await flutterwaveService.initiatePayment({ email, amount, currency });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET verify payment
router.get('/verify/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await flutterwaveService.verifyPayment(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
