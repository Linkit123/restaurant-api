const service = require("../services/table.service");

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

const createRestaurantTable = async (req, res) => {
  try {
    
    const restaurantId = req.params.restaurantId;
    const tableReqs = req.body;

    const result = await service.createRestaurantTable(restaurantId, tableReqs);

    if (result.success) {
      res.status(201).json({
        status: "success",
        data: {
          tables: result.createdTables,
        },
      });
    } else {
      res.status(409).json({
        status: "error",
        message: "Duplicate table indexes found.",
        data: {
          duplicateTables: result.duplicateTables,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { findAllByRestaurantId, createRestaurantTable };
