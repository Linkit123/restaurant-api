const Restaurant = require("../models/restaurant.model");

class RestaurantService {
  async getAllRestaurant() {
    try {
      const restaurants = await Restaurant.find();
      return restaurants;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching restaurants");
    }
  }

  async createRestaurant(req) {
    try {
      const restaurant = new Restaurant({
        code: req.body.code,
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        openingTime: req.body.openingTime,
        closingTime: req.body.closingTime,
        totalTables: req.body.totalTables,
        reservedTables: req.body.reservedTables,
        availableTables: req.body.availableTables,
        star: req.body.star,
        images: req.body.images,
        menu: req.body.menu,
        tables: req.body.tables,
      });
      return await restaurant.save();
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching restaurants");
    }
  }
}

module.exports = new RestaurantService();
