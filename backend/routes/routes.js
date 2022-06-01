const express = require("express");
const TeamMember = require("../models/TeamMember");
const Fueling = require("../models/Fueling");

const router = express.Router();

// Team members
router.get("/team-members", async (req, res) => {
  const teamMembers = await TeamMember.find();
  res.send(teamMembers);
});

router.post("/team-members/add", (req, res) => {
  console.log("GOT NEW TEAM MEMBERS Add POST with body:", req.body);
  const member = new TeamMember({
    fullName: req.body.fullName,
    age: req.body.age,
    location: req.body.location,
    phone: req.body.phone,
    sex: req.body.sex,
    rank: req.body.rank,
    equipment: req.body.equipment,
    drivingLicence: req.body.drivingLicence,
    healthInsurance: req.body.healthInsurance,
    additionalInfo: req.body.additionalInfo,
  });
  member.save((err) => console.log(err));
});

router.post("/team-members/update", async (req, res) => {
  console.log("GOT NEW TEAM MEMBERS Update POST with body:", req.body);
  const { _id, field, value } = req.body;
  await TeamMember.updateOne(
    { _id: _id },
    {
      $set: {
        [field]: value,
      },
    }
  );
});

router.post("/team-members/delete", async (req, res) => {
  console.log("GOT NEW TEAM MEMBERS Delete POST with body:", req.body);
  await TeamMember.deleteMany({ _id: { $in: req.body } });
});

// Fuelings
router.get("/fuelings", async (req, res) => {
  const teamMembers = await Fueling.find();
  res.send(teamMembers);
});

router.post("/fuelings/add", (req, res) => {
  console.log("GOT NEW FUELINGS Add POST with body:", req.body);
  const fueling = new Fueling({
    vehicleRegistration: req.body.vehicleRegistration,
    fuelType: req.body.fuelType,
    date: req.body.date,
    liters: req.body.liters,
    cost: req.body.cost,
    sellerDetails: req.body.sellerDetails,
    buyerDetails: req.body.buyerDetails,
  });
  fueling.save((err) => console.log(err));
});

router.post("/fuelings/update", async (req, res) => {
  console.log("GOT NEW FUELINGS Update POST with body:", req.body);
  const { _id, field, value } = req.body;
  await Fueling.updateOne(
    { _id: _id },
    {
      $set: {
        [field]: value,
      },
    }
  );
});

router.post("/fuelings/delete", async (req, res) => {
  console.log("GOT NEW FUELINGS Delete POST with body:", req.body);
  await Fueling.deleteMany({ _id: { $in: req.body } });
});

module.exports = router;
