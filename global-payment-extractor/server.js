// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./core/database/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to DB safely
(async () => {
  try {
    await connectDB();
    console.log("📦 Database connected successfully.");
  } catch (err) {
    console.error(" Database connection failed:", err.message);
    // Don't crash the server if DB fails
  }
})();

// Routes
const routes = require('./core/routes');
app.use('/api', routes);

// Default root endpoint
app.get('/', (req, res) => {
  res.send('🌍 Global Payment Extractor API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
