require('dotenv').config();

module.exports = {
  STRIPE_SECRET: process.env.STRIPE_SECRET || '',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || '',
  PAYPAL_SECRET: process.env.PAYPAL_SECRET || '',
  FLUTTERWAVE_SECRET: process.env.FLUTTERWAVE_SECRET || '',
  MPESA_CONSUMER_KEY: process.env.MPESA_CONSUMER_KEY || '',
  MPESA_CONSUMER_SECRET: process.env.MPESA_CONSUMER_SECRET || '',
  ADYEN_API_KEY: process.env.ADYEN_API_KEY || ''
};
