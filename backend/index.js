const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

const route = require("./routes/routes");

app.use(cors());
app.use(route);

//MongoDB
const mongoose = require("mongoose");
const db = require("./connection");

// const Rooms = mongoose.model("Room");
// const Users = mongoose.model("User");

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("server running");
});
