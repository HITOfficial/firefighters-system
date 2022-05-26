const express = require("express");
const User = require("../models/Team");
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
