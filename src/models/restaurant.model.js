const mongoose = require("mongoose");
const Status = require("../constants/Status");
const GeneratorUtils = require("../utils/GeneratorUtils");

// Định nghĩa Schema cho Restaurant
const restaurantSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  createdDate: { type: Date, default: new Date() },
  updatedDate: { type: Date, default: new Date() },
  createdBy: { type: String, default: "system" },
  updatedBy: String,
  status: {
    type: String,
    enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
    default: Status.ACTIVE,
  },
  code: {type: String, default: 'R_000'},
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
  // Thêm trường menu để lưu thông tin thực đơn
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
  // Thêm trường tables để lưu thông tin bàn
  tables: [{ type: mongoose.Schema.Types.ObjectId, ref: "Table" }],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
