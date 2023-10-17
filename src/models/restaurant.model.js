const mongoose = require("mongoose");

// Định nghĩa Schema cho Restaurant
const restaurantSchema = new mongoose.Schema({
  code: String,
  name: String,
  address: String,
  phoneNumber: String,
  description: String,
  totalTables: Number,
  reservedTables: Number,
  availableTables: Number,
  star: Number,
});

module.exports = mongoose.model('Restaurant', restaurantSchema)
