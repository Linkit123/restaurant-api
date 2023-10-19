const service = require("../services/customer.service");

const getAllCustomer = async (req, res) => {
  try {
    const data = await service.getAllCustomer();
    res.status(200).send({ status: "success", code: 200, data: data });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    const data = await service.createCustomer(req);
    res.status(200).send({ status: "success", code: 200, data: data });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { getAllCustomer, createCustomer };
