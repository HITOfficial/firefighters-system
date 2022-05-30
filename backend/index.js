const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

const route = require("./routes/routes");

app.use(cors());

// body parser to have not undefined in routes post
app.use(express.json());
app.use(route);

//MongoDB
const mongoose = require("mongoose");
const db = require("./connection");

// const Rooms = mongoose.model("Room");
// const Users = mongoose.model("User");

const TeamMembers = mongoose.model("TeamMember");

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("server running");
});

// Teams.updateOne();

// fullName: {
// age: {
// location: {
// phone: {
// sex: {
// rank: {
// equipment: {
// drivingLicence: {
// healthInsurance: {
// },healthInsurance: {

// new user

// const member = new TeamMembers({
//   fullName: "name2",
//   age: "61",
//   location: "Location2",
//   phone: "+48 1212412 4",
//   sex: "female",
//   rank: "rank2",
//   equipment: "eq2",
//   drivingLicence: "None",
//   healthInsurance: "None",
// });
// //
// // console.log(user);
// //
// member.save((err) => console.log(err));

// Rooms.updateOne(
//     {
//     roomID: "12345"
//     },
//     {
//         $push:{
//             messages: {
//                 sender: "user1",
//                 receiver: "user2",
//                 senderAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80",
//                 receiverAvatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//                 message: "Lorem ipsum data 123",
//                 date: new Date()
//
//             }
//             ,
//         }
//     },
// ).then((e )  => {console.log(e)})
