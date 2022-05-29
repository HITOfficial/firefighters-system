const mongoose = require("mongoose");
const routes = require("./routes/routes");
const express = require("express");
// mongoDB connection
const mongoDB =
  "mongodb+srv://firefighters-system:firefighters-system@firefighters-system.4pzrs.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB).then(() => {
  const app = express();
  app.use("/api", routes);
});
