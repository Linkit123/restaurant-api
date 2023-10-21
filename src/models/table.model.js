const mongoose = require("mongoose");
const FloorNumber = require("../constants/FloorNumber");
const TableType = require("../constants/TableType");

// Định nghĩa Schema
const tableSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  createdDate: { type: Date, default: new Date() },
  updatedDate: { type: Date, default: new Date() },
  code: {type: String, default: 'T_000'},
  name: String,
  capacity: Number,
  rowIndex: Number,
  columnIndex: Number,
  floorNumber: { type: Number, enum: FloorNumber, default: FloorNumber.F1 },
  type: { type: Number, enum: TableType, default: TableType.TABLE },
});

module.exports = mongoose.model("Table", tableSchema);
