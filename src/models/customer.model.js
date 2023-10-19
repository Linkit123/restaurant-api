const mongoose = require("mongoose");

// Định nghĩa Schema cho Restaurant
const customerSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    createdDate: { type: Date, require: true, default: new Date() },
    updatedDate: { type: Date, require: false, default: new Date()},
    status: { type: String, enum: ["active", "inactive", "deleted"], default: "active"},
    fullName: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    email: { type: String, require: false },
  },
  { autoIndex: false }
);

module.exports = mongoose.model("Customer", customerSchema);
