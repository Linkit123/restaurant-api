const service = require("../services/location.service");

const findAll = async (req, res) => {
  try {
    const data = await service.findAll(req);
    res.status(200).send({ status: "success", code: 200, data: data });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createLocation = async (req, res) => {
  try {
    const result = await service.createLocation(req);

    if (result.success) {
      res.status(201).json({
        status: "success",
        data: {
          locations: result.createdLocations,
        },
      });
    } else {
      res.status(409).json({
        status: "error",
        message: "Duplicate table records found.",
        data: {
          duplicateLocations: result.duplicateLocations,
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

module.exports = { findAll, createLocation };
