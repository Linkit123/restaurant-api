const express = require("express");
const controller = require("../../controllers/location.controller");
const router = express.Router();

router.get("/locations", controller.findAll);
router.post("/locations", controller.createLocation);

module.exports = router;
