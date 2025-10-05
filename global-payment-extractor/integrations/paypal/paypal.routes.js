const express = require('express');
const router = express.Router();
const { getPaypalBalance } = require('./paypal.service');
const { formatResponse } = require('../../core/utils/helpers');

router.get('/balance', async (req, res) => {
  try {
    const balance = await getPaypalBalance();
    res.json(formatResponse(true, balance, "PayPal balance retrieved"));
  } catch (err) {
    res.status(500).json(formatResponse(false, null, "Failed to fetch PayPal balance"));
  }
});

module.exports = router;
