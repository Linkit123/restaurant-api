const mongoose = require("mongoose");

const Restaurant = require("../models/restaurant.model");
const Menu = require("../models/menu.model");
const Table = require("../models/table.model");
const Customer = require("../models/customer.model");
const Reservation = require("../models/reservation.model");
const GeneratorUtils = require("../utils/GeneratorUtils");

class ReservationService {
  async reservations(req) {
    const { restaurant, meu, tables } = await this.validation(req);
    const { customer: customerReq } = req.body;
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      // update customer
      const filterCustomer = {
        phoneNumber: customerReq.phoneNumber,
        fullName: customerReq.fullName,
      };
      const customer = await Customer.findOneAndUpdate(
        filterCustomer,
        { fullName: customerReq.fullName },
        { new: true, session: session }
      );
      await Reservation.create(req.body);
      await session.commitTransaction();
    } catch (error) {
      console.log(error);
      await session.abortTransaction();
      throw new Error("Error while reservation");
    } finally {
      await session.endSession();
    }

    return { success: true, data: "nothing" };
  }

  async validation(req) {
    const { restaurantId, menuIds, tableIds } = req.body;
    const restaurant = await Restaurant.findOne({ _id: restaurantId }).lean();
    if (!restaurant) {
      throw new Error("Restaurant not found");
    }

    const menu = await Menu.find({
      _id: {
        $in: menuIds,
      },
    }).lean();

    if (!menu) {
      throw new Error("Menu not found");
    }

    const tables = await Table.find({
      _id: {
        $in: tableIds,
      },
    }).lean();

    if (!tables) {
      throw new Error("Table not found");
    }

    return { restaurant, menu, tables };
  }
}

module.exports = new ReservationService();
