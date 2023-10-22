const mongoose = require("mongoose");
const Status = require("../constants/Status");

// Định nghĩa Schema
const schema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  createdDate: { type: Date, default: new Date() },
  updatedDate: { type: Date, default: new Date() },
  status: {
    type: String,
    enum: Status,
    default: Status.ACTIVE,
  },
  code: { type: String, default: "L_000" },
  name: String,
});

module.exports = mongoose.model("Location", schema);
