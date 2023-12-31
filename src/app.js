const express = require("express"); 

const userRoutes = require('./v1/routes/user.routes');
const restaurantRoutes = require('./v1/routes/restaurant.routes');
const customerRoutes = require('./v1/routes/customer.routes');
const tableRoutes = require('./v1/routes/table.routes');
const menuRoutes = require('./v1/routes/menu.routes');
const locationRoutes = require('./v1/routes/location.routes');
const reservationRoutes = require('./v1/routes/reservation.routes');

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
app.use('/api/v1', menuRoutes);
app.use('/api/v1', locationRoutes);
app.use('/api/v1', reservationRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

module.exports = app;