const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./core/database/db');
const routes = require('./core/routes'); // <- this is correct

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use('/api', routes);

app.get('/', (req, res) => res.send('🌍 Global Payment Extractor API is running...'));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
