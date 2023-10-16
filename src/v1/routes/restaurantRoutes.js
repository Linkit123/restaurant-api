const express = require("express");
const restaurantController = require("../../controllers/restaurantController");
const router = express.Router();

router.get('/findAll', restaurantController.getAllRestaurant);

module.exports = router;