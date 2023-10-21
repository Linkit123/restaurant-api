const express = require("express");
const controller = require("../../controllers/table.controller");
const router = express.Router();

router.get("/tables/restaurant/:restaurantId", controller.findAllByRestaurantId);
router.post("/tables/restaurant/:restaurantId", controller.createRestaurantTable);

module.exports = router;
