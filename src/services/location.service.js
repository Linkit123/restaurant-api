const Location = require("../models/location.model");

class LocationService {
  async findAll() {
    try {
      return await Location.find().lean();
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching locations");
    }
  }

  async createLocation(req) {
    const duplicateLocations = await Location.find({
      $or: [{ code: req.body.code }, { name: req.body.name }],
    }).lean();

    if (duplicateLocations.length > 0) {
      return { success: false, duplicateLocations };
    }

    try {
      const createdLocations = await Location.create({
        code: req.body.code,
        name: req.body.name,
      });

      return { success: true, createdLocations };
    } catch (error) {
      console.log(error);
      throw new Error("Error while creating Location");
    }
  }
}

module.exports = new LocationService();
