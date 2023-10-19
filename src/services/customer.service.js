const Customer = require("../models/customer.model");

class CustomerService {
  async getAllCustomer() {
    try {
      return await Customer.find().lean();
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching restaurants");
    }
  }

  async createCustomer(req) {
    try {
      const customer = new Customer({
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
      });
      return await customer.save();
    } catch (error) {
      console.log(error);
      throw new Error("Error while creating customer");
    }
  }
}

module.exports = new CustomerService();
