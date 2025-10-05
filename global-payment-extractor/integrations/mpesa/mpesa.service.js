// This file will hold core Mpesa service logic.
// In production, you would integrate with Safaricom Daraja API.

class MpesaService {
  async simulateTransaction({ phone, amount }) {
    // Dummy response
    return {
      success: true,
      provider: "M-Pesa",
      phone,
      amount,
      transactionId: "MPESA123456",
      message: "Transaction simulated successfully",
    };
  }

  async checkBalance() {
    // Dummy response
    return {
      success: true,
      balance: "KES 10,000",
      lastUpdated: new Date(),
    };
  }
}

module.exports = new MpesaService();
