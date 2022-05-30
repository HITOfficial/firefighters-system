const express = require("express");
const TeamMember = require("../models/TeamMember");
const router = express.Router();

router.get("/team-members", async (req, res) => {
  const teamMembers = await TeamMember.find();
  res.send(teamMembers);
});

router.post("/team-members/post", (req,res) => {
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


router.post("/team-members/update", (req,res) => {
    console.log("GOT NEW Update POST with body:", req.body);

//     TeamMember.updateOne(
//     {
//     _id: "6294969968006aac601f0c3d"
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

    // const member = new TeamMember({
    //     fullName: req.body.fullName,
    //     age: req.body.age,
    //     location: req.body.location,
    //     phone: req.body.phone,
    //     sex: req.body.sex,
    //     rank: req.body.rank,
    //     equipment: req.body.equipment,
    //     drivingLicence: req.body.drivingLicence,
    //     healthInsurance: req.body.healthInsurance,
    // });
    // member.save((err) => console.log(err));
});


router.get("/team-members/post", (req,res) => {
    res.send("POST new user");
})

module.exports = router;
