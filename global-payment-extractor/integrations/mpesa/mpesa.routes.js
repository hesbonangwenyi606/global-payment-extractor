const express = require('express');
const router = express.Router();
const mpesaService = require('./mpesa.service');

// GET test endpoint
router.get('/', (req, res) => {
  res.json({ message: '✅ M-Pesa API connected successfully!' });
});

// POST simulate transaction
router.post('/simulate', async (req, res) => {
  const { phone, amount } = req.body;
  try {
    const result = await mpesaService.simulateTransaction({ phone, amount });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET check balance
router.get('/balance', async (req, res) => {
  try {
    const result = await mpesaService.checkBalance();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
