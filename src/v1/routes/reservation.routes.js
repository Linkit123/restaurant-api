const express = require("express");
const controller = require("../../controllers/reservation.controller");
const router = express.Router();

router.post('/reservations', controller.reservations);

module.exports = router;