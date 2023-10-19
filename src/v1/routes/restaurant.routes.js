const express = require("express");
const restaurantController = require("../../controllers/restaurant.controller");
const router = express.Router();

router.get('/restaurants/findAll', restaurantController.getAllRestaurant);

module.exports = router;