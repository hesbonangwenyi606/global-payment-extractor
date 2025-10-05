const express = require('express');
const router = express.Router();
const { formatResponse } = require('../../core/utils/helpers');

// Example placeholder
router.get('/ping', (req, res) => {
  res.json(formatResponse(true, null, "Flutterwave endpoint working"));
});

module.exports = router;
