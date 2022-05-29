const express = require("express");
const Team = require("../models/Team");
const router = express.Router();

router.get("/team-members", async (req, res) => {
  const Teams = await Team.find();
  res.send(Teams);
});

module.exports = router;
