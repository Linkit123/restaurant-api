const express = require("express"); 
const userRoutes = require('./v1/routes/user.routes');
const restaurantRoutes = require('./v1/routes/restaurant.routes');
const morgan = require('morgan');
const AppError = require('./utils/appError')

const app = express(); 

// Morgan middleware
app.use(morgan('tiny'));

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/restaurants', restaurantRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

module.exports = app;