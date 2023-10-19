const mongoose = require("mongoose");
const Status = require("../constants/Status");
const TableType = require("../constants/TableType");

// Định nghĩa Schema cho Restaurant
const restaurantSchema = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
  createdDate: { type: Date, default: new Date() },
  updatedDate: { type: Date, default: new Date() },
  createdBy: { type: String, default: 'system' },
  updatedBy: String,
  status: {
    type: String,
    enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
    default: Status.ACTIVE,
  },
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
      _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
      status: {
        type: String,
        enum: Status,
        default: Status.ACTIVE,
      },
      code: String,
      name: String,
      description: String,
      price: Number,
    },
  ],
  tables: [
    {
      _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
      code: {
        type: String,
        require: true,
        default: "T-000",
      },
      name: String,
      capacity: Number,
      rowIndex: Number,
      columnIndex: Number,
      type: { type: Number, enum: TableType, default: TableType.TABLE },
    },
  ],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
