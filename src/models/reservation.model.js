const mongoose = require("mongoose");
const ReservationStatus = require("../constants/ReservationStatus");
const GeneratorUtils = require("../utils/GeneratorUtils");

// Định nghĩa Schema cho Restaurant
const reservationSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  createdDate: { type: Date, default: new Date() },
  updatedDate: { type: Date, default: new Date() },
  status: {
    type: String,
    enum: ReservationStatus,
    default: ReservationStatus.BOOKED,
  },
  code: { type: String, default: "REV_000" },
  numberOfTables: Number,
  specialRequest: String,
  // Thêm trường customer để lưu thông tin khách
  customer: { type: mongoose.Schema.Types.Mixed, ref: "Customer" },
  // Thêm trường menu để lưu thông tin thực đơn
  menu: [{ type: mongoose.Schema.Types.Mixed, ref: "Menu" }],
  // Thêm trường tables để lưu thông tin bàn
  tables: [{ type: mongoose.Schema.Types.Mixed, ref: "Table" }],
});

module.exports = mongoose.model("Reservation", reservationSchema);
