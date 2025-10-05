const axios = require('axios');
const { STRIPE_SECRET } = require('../../core/config/config');

async function getStripeBalance() {
  try {
    const response = await axios.get('https://api.stripe.com/v1/balance', {
      headers: { Authorization: `Bearer ${STRIPE_SECRET}` }
    });
    return response.data;
  } catch (err) {
    console.error("Stripe API error:", err.response?.data || err.message);
    throw err;
  }
}

module.exports = { getStripeBalance };
