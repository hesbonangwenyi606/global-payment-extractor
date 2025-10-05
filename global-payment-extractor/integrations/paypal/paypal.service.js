const axios = require('axios');
const { PAYPAL_CLIENT_ID, PAYPAL_SECRET } = require('../../core/config/config');

async function getAccessToken() {
  const response = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    auth: {
      username: PAYPAL_CLIENT_ID,
      password: PAYPAL_SECRET,
    },
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    params: { grant_type: "client_credentials" }
  });
  return response.data.access_token;
}

async function getPaypalBalance() {
  try {
    const token = await getAccessToken();
    const response = await axios.get("https://api-m.sandbox.paypal.com/v1/reporting/balances", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (err) {
    console.error("PayPal API error:", err.response?.data || err.message);
    throw err;
  }
}

module.exports = { getPaypalBalance };
