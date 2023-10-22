const service = require("../services/restaurant.service");

const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await service.getAllRestaurant();
    res.status(200).send({ status: "success", code: 200, data: restaurants });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const findByLocationCode = async (req, res) => {
  try {
    const data = await service.findByLocationCode(req.params.locationCode);
    res.status(200).send({ status: "success", code: 200, data: data });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createRestaurant = async (req, res) => {
  try {
    const restaurants = await service.createRestaurant(req);
    res.status(200).send({ status: "success", code: 200, data: restaurants });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { getAllRestaurant, createRestaurant, findByLocationCode};
