const Restaurant = require("../models/restaurant.model");
const GeneratorUtils = require("../utils/GeneratorUtils");

class RestaurantService {
  async getAllRestaurant() {
    try {
      const restaurants = await Restaurant.find().lean();
      return restaurants;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching restaurants");
    }
  }

  async findByLocationCode(locationCode) {
    try {
      const restaurants = await Restaurant.find({locationCode: locationCode}).lean();
      return restaurants;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching restaurants");
    }
  }

  async createRestaurant(req) {
    const restaurantDuplicate = await Restaurant.findOne({ name: req.body.name });
    if (restaurantDuplicate) {
      throw new Error("Restaurant name existed, please enter other name");
    }
    try {
      const restaurant = new Restaurant({
        code: `R_${GeneratorUtils.randomString()}`,
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
        locationCode: req.body.locationCode
      });
      return await restaurant.save();
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching restaurants");
    }
  }
}

module.exports = new RestaurantService();
