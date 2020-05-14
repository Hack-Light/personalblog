const express = require("express");
const router = express.Router();
const Contacts = require("./../models/contacts");

//just a comment

router.get("/", function (req, res) {
  res.render("contact", {
    title: "Sign Up for NewsLetter - Onoh Somtochukwu"
  });
});

// router.post("/", async function (req, res) {
//     let contact = new Contacts({
//         name: req.body.name,
//         email: req.body.email
//     });

//     try {
//         await contact.save();
//         res.redirect("/");
//     } catch (err) {
//         res.redirect("/signup");
//     }
// });

module.exports = router;
