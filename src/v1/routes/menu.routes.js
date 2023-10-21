const express = require("express");
const controller = require("../../controllers/menu.controller");
const router = express.Router();

router.get("/menu/restaurant/:restaurantId", controller.findAllByRestaurantId);
router.post("/menu/restaurant/:restaurantId", controller.createRestaurantMenu);

module.exports = router;