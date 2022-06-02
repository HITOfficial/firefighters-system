const mongoose = require("mongoose");

ActionSchema = new mongoose.Schema(
  {
      vehicles: {
      type: String,
      required: true,
    },
      date: {
      type: String,
      required: true,
    },
      distance: {
      type: String,
      required: true,
    },
      location: {
      type: String,
      required: true,
    },
      equipment: {
      type: String,
      required: true,
    },
      type: {
      type: String,
      required: true,
    },
      moves: {
      type: String,
      required: true,
    },
      participants: {
          type: String,
          required: true,
      },
  },
  { versionKey: false }
);

module.exports = mongoose.model("ActionModel", ActionSchema);
