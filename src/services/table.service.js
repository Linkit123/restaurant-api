const Table = require("../models/table.model");
const Restaurant = require("../models/restaurant.model");

class TableService {

  async findAllByRestaurantId(req) {
    try {
      const restaurantId = req.params.restaurantId;
      const Tables = await Table.find({restaurantId});
      return Tables;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching Tables");
    }
  }

  async createRestaurantTable(req) {
    try {
      const restaurantId = req.params.restaurantId;
      const tableReqs = req.body;
      if (!Restaurant.exists({ _id: restaurantId })) {
        throw new Error("Restaurant not found");
      }
      const createTables = await Table.create(tableReqs.map((table) => ({...table, restaurantId})));
      return createTables;
    } catch (error) {
      console.log(error);
      throw new Error("Create Tables Fail");
    }
  }
}

module.exports = new TableService();
