const express = require('express');
const router = express.Router();
const { getStripeBalance } = require('./stripe.service');
const { formatResponse } = require('../../core/utils/helpers');

router.get('/balance', async (req, res) => {
  try {
    const balance = await getStripeBalance();
    res.json(formatResponse(true, balance, "Stripe balance retrieved"));
  } catch (err) {
    res.status(500).json(formatResponse(false, null, "Failed to fetch Stripe balance"));
  }
});

module.exports = router;
