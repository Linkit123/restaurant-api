const restaurantService = require("../services/restaurantService");

const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await restaurantService.getAllRestaurant();
    res.status(200).send({ status: "success", code: 200, data: restaurants });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { getAllRestaurant };
