const express = require('express');
const router = express.Router();

// Import integration routes
const stripeRoutes = require('../../integrations/stripe/stripe.routes');
const paypalRoutes = require('../../integrations/paypal/paypal.routes');
// Later add flutterwave, mpesa, adyen

router.use('/stripe', stripeRoutes);
router.use('/paypal', paypalRoutes);

module.exports = router;
