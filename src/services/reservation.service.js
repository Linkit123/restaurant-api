const Restaurant = require("../models/restaurant.model");
const GeneratorUtils = require("../utils/GeneratorUtils");

class ReservationService {

  async reservation(req) {
   
    try {
      
    } catch (error) {
      console.log(error);
      throw new Error("Error while reservation");
    }
  }
}

module.exports = new ReservationService();
