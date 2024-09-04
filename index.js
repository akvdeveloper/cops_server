const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();  // Ensure this is at the top

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/enquiryRoutes')); // Enquiry routes
app.use('/api', require('./routes/contactRoutes')); // Contact routes

// Authentication routes
app.use('/api/auth', authRoutes);

// Admin routes
app.use('/api', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
