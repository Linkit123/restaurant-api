const express = require("express"); 
const userRoutes = require('./v1/routes/userRoutes');

const app = express(); 

// Routes
app.use('/api/v1/users', userRoutes);

module.exports = app;