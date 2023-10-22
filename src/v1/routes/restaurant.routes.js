const express = require("express");
const restaurantController = require("../../controllers/restaurant.controller");
const router = express.Router();

router.get("/restaurants/findAll", restaurantController.getAllRestaurant);
router.post("/restaurants", restaurantController.createRestaurant);
router.get("/restaurants/:locationCode", restaurantController.findByLocationCode);

module.exports = router;
