// Dummy DB connection (replace with MongoDB/Postgres)
const connectDB = async () => {
  try {
    console.log("📦 Database connected (dummy placeholder).");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

module.exports = connectDB;
