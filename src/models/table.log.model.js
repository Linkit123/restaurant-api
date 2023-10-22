const mongoose = require("mongoose");

// Định nghĩa Schema
const tableSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
  bookingDate: { type: String }
});

module.exports = mongoose.model("TableLog", tableSchema);
