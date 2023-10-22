const service = require("../services/reservation.service");

const reservations = async (req, res) => {
  try {
    const data = await service.reservations(req);
    res.status(200).send({ status: "success", code: 200, data: data });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { reservations };
