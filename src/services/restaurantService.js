const Restaurant = require("../models/restaurantModel");

class RestaurantService {
  async getAllRestaurant() {
    try {
        const restaurants = await Restaurant.find();
        return restaurants;
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching restaurants');
    }
  }
}

module.exports = new RestaurantService();