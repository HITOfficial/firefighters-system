const mongoose = require("mongoose");


FuelingSchema = new mongoose.Schema(
  {
      vehicleRegistration: {
      type: String,
      required: true,
    },
      date: {
      type: String,
      required: true,
    },
      liters: {
      type: String,
      required: true,
    },
      cost: {
      type: String,
      required: true,
    },
      sellerDetails: {
      type: String,
      required: true,
    },
      buyerDetails: {
      type: String,
      required: true,
    }},
  { versionKey: false }
);

module.exports = mongoose.model("FuelingModel", FuelingSchema);
