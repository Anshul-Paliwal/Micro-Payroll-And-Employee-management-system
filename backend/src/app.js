const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

const app = express();

// DB connection
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api', require('./routes'));

// Global error handler (later)

module.exports = app;