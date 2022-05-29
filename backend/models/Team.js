const mongoose = require("mongoose");

TeamMemberSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    drivingLicence: {
      type: String,
      required: true,
    },
    healthInsurance: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("TeamMember", TeamMemberSchema);
