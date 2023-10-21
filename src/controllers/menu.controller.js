const service = require("../services/menu.service");

const findAllByRestaurantId = async (req, res) => {
  try {
    const data = await service.findAllByRestaurantId(req);
    res.status(200).send({ status: "success", code: 200, data: data });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createRestaurantMenu = async (req, res) => {
  try {
    const data = await service.createRestaurantMenu(req);
    res.status(200).send({ status: "success", code: 200, data: data });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { findAllByRestaurantId, createRestaurantMenu };
