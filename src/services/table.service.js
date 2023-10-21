const Table = require("../models/table.model");
const Restaurant = require("../models/restaurant.model");
const GeneratorUtils = require("../utils/GeneratorUtils");

class TableService {
  async findAllByRestaurantId(req) {
    try {
      const restaurantId = req.params.restaurantId;
      const tables = await Table.find({ restaurantId }).lean();
      return tables;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching Tables");
    }
  }

  async checkDuplicateTableIndexes(restaurantId, tables) {
    try {
      const duplicateTables = await Table.find({
        restaurantId,
        $or: tables.map((table) => ({
          $and: [
            { columnIndex: table.columnIndex },
            { rowIndex: table.rowIndex },
          ],
        })),
      });

      return duplicateTables;
    } catch (error) {
      throw error;
    }
  }

  async createRestaurantTable(restaurantId, tableReqs) {
    const restaurant = await Restaurant.findOne({ _id: restaurantId }).lean();
    if (!restaurant) {
      throw new Error("Restaurant not found");
    }

    const duplicateTables = await this.checkDuplicateTableIndexes(restaurantId, tableReqs);

    if (duplicateTables.length > 0) {
      return { success: false, duplicateTables };
    }

    if (!restaurant) {
      throw new Error("Restaurant not found");
    }

    try {
      const createdTables = await Table.create(
        tableReqs.map((table) => ({
          ...table,
          code: `T_${GeneratorUtils.randomString()}`,
          restaurantId,
        }))
      );
      return { success: true, createdTables };
    } catch (error) {
      console.log(error);
      throw new Error("Create Tables Fail");
    }
  }
}

module.exports = new TableService();
