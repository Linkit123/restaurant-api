const Menu = require("../models/menu.model");
const Restaurant = require("../models/restaurant.model");
const GeneratorUtils = require("../utils/GeneratorUtils");

class MenuService {
  async findAllByRestaurantId(req) {
    try {
      const restaurantId = req.params.restaurantId;
      const menu = await Menu.find({ restaurantId }).lean();
      return menu;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching Menu");
    }
  }

  async createRestaurantMenu(req) {
    try {
      const restaurantId = req.params.restaurantId;
      const menuReqs = req.body;
      const restaurant = await Restaurant.findOne({ _id: restaurantId }).lean();
      if (!restaurant) {
        throw new Error("Restaurant not found");
      }
      const createMenu = await Menu.create(
        menuReqs.map((menu) => ({
          ...menu,
          code: `M_${GeneratorUtils.randomString()}`,
          restaurantId,
        }))
      ).lean();
      return createMenu;
    } catch (error) {
      console.log(error);
      throw new Error("Create Menu Fail");
    }
  }
}

module.exports = new MenuService();
