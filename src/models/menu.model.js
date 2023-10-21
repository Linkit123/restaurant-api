const mongoose = require("mongoose");
const Status = require("../constants/Status");
const GeneratorUtils = require("../utils/GeneratorUtils");

// Định nghĩa Schema
const menuSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  status: {
    type: String,
    enum: Status,
    default: Status.ACTIVE,
  },
  code: {type: String, default: 'M_000'},
  name: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("Menu", menuSchema);
