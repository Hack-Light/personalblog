const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");

router.get("/new", async function (req, res) {
  res.render("newAdmin", {
    title: "Add Admin",
  });
});

router.post("/", async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let admin = new Admin({
      name: req.body.name,
      password: hashedPassword,
    });

    let result = await admin.save();
    console.log(result);
    res.redirect("/auth/login");
  } catch (e) {
    res.redirect("/auth/new");
  }
});

module.exports = router;
