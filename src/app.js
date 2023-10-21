const express = require("express"); 
const userRoutes = require('./v1/routes/user.routes');
const restaurantRoutes = require('./v1/routes/restaurant.routes');
const customerRoutes = require('./v1/routes/customer.routes');
const tableRoutes = require('./v1/routes/table.routes');
const morgan = require('morgan');
const AppError = require('./utils/appError')

const app = express(); 

// Morgan middleware
app.use(morgan('tiny'));

// To read request json body
app.use(express.json())

// Routes
app.use('/api/v1', customerRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', restaurantRoutes);
app.use('/api/v1', tableRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

module.exports = app;