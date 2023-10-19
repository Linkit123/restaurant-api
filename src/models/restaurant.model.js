const mongoose = require("mongoose");

// Định nghĩa Schema cho Restaurant
const restaurantSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdDate: Date,
  updatedDate: Date,
  createdBy: String,
  updatedBy: String,
  status: { type: String, enum: ["active", "inactive", "deleted"] },
  code: String,
  name: String,
  address: String,
  phoneNumber: String,
  description: String,
  images: [{ type: String }],
  openingTime: String,
  closingTime: String,
  totalTables: Number,
  reservedTables: Number,
  availableTables: Number,
  star: Number,
  menu: [
    {
      createdDate: Date,
      updatedDate: Date,
      createdBy: String,
      updatedBy: String,
      status: String,
      code: String,
      name: String,
      description: String,
      price: Number,
    }
  ],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);