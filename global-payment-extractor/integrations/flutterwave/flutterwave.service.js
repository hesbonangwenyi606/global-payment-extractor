// This is a placeholder Flutterwave service.
// Later, integrate with Flutterwave API using axios.

class FlutterwaveService {
  async initiatePayment({ email, amount, currency }) {
    return {
      success: true,
      provider: "Flutterwave",
      email,
      amount,
      currency,
      transactionId: "FLW123456",
      message: "Payment initiated successfully",
    };
  }

  async verifyPayment(transactionId) {
    return {
      success: true,
      provider: "Flutterwave",
      transactionId,
      status: "successful",
      message: "Payment verified successfully",
    };
  }
}

module.exports = new FlutterwaveService();
