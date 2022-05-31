const express = require("express");
const TeamMember = require("../models/TeamMember");
const router = express.Router();

router.get("/team-members", async (req, res) => {
  const teamMembers = await TeamMember.find();
  res.send(teamMembers);
});

router.post("/team-members/post", (req, res) => {
  console.log("GOT NEW POST with body:", req.body);
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
  });
  member.save((err) => console.log(err));
});

router.post("/team-members/update", async (req, res) => {
  console.log("GOT NEW Update POST with body:", req.body);
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
  console.log("GOT NEW Delete POST with body:", req.body);
  await TeamMember.deleteMany({ _id: { $in: req.body } });
});

module.exports = router;
