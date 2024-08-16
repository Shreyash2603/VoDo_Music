const express = require('express');
const connectDB = require('./config/db'); // Your DB connection
const authRoutes = require('./routes/auth'); // Your auth routes
const cors = require('cors'); // Import cors

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000' // Allow only this origin to access the API
}));

// Define Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
