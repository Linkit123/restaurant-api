const express = require("express");
const controller = require("../../controllers/customer.controller");
const router = express.Router();

router.get('/customers/findAll', controller.getAllCustomer);
router.post('/customers', controller.createCustomer);

module.exports = router;