const mongoose = require("mongoose");

const Restaurant = require("../models/restaurant.model");
const Menu = require("../models/menu.model");
const Table = require("../models/table.model");
const Customer = require("../models/customer.model");
const Reservation = require("../models/reservation.model");
const GeneratorUtils = require("../utils/GeneratorUtils");

class ReservationService {
  async reservations(req) {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { customer: customerReq } = req.body;
    // create customer if not exist
    const customer = await this.updateCustomer(customerReq, session);
    const { restaurant, menu, tables } = await this.validation(req);
    try {
      // save booking infomation
      const reservation = await Reservation.create(
        [{
          code: "R_" + GeneratorUtils.randomString(),
          customer,
          restaurant,
          tables,
          menu,
          numberOfTables: req.body.numberOfTables,
          numberOfPeoples: req.body.numberOfPeoples,
          checkInTime: req.body.checkInTime,
          bookingDate: req.body.bookingDate,
          specialRequest: req.body.specialRequest
        }],
        {
          session: session,
        }
      );
      await session.commitTransaction();
      return reservation;
    } catch (error) {
      console.log(error);
      await session.abortTransaction();
      throw new Error("Error while reservation");
    } finally {
      await session.endSession();
    }
  }

  async updateCustomer(customerReq, session) {
    const filterCustomer = {
      phoneNumber: customerReq.phoneNumber,
    };

    try {
      let customer = await Customer.findOneAndUpdate(
        filterCustomer,
        { fullName: customerReq.fullName },
        { session }
      ).lean();
      if (!customer) {
        customer = await Customer.create([customerReq], { session });
      }
      return customer[0];
    } catch (error) {
      console.log(error);
      throw new Error("Error while save customer");
    }
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

    if (!menu || menu.length == 0) {
      throw new Error("Menu not found");
    }

    const tables = await Table.find({
      _id: {
        $in: tableIds,
      },
    }).lean();

    if (!tables || menu.length == tables) {
      throw new Error("Table not found");
    }

    return { restaurant, menu, tables };
  }
}

module.exports = new ReservationService();
