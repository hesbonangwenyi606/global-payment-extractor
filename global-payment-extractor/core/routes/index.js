const express = require('express');
const router = express.Router();

const stripeRoutes = require('../../integrations/stripe/stripe.routes');
const paypalRoutes = require('../../integrations/paypal/paypal.routes');
const flutterwaveRoutes = require('../../integrations/flutterwave/flutterwave.routes');
const mpesaRoutes = require('../../integrations/mpesa/mpesa.routes');
const adyenRoutes = require('../../integrations/adyen/adyen.routes');

// Mount the routers
router.use('/stripe', stripeRoutes);
router.use('/paypal', paypalRoutes);
router.use('/flutterwave', flutterwaveRoutes);
router.use('/mpesa', mpesaRoutes);
router.use('/adyen', adyenRoutes);

module.exports = router;
