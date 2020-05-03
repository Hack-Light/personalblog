const express = require("express");
const router = express.Router();
const Posts = require("./../models/blog");

router.get("/", async function (req, res) {
  try {
    let posts = await Posts.find().sort({ date: -1 });
    res.render("index", { title: "Home Page", posts });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
