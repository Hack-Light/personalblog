const express = require("express");
const router = express.Router();
// const Author = require("./../models/author");

router.get("/new", async function (req, res) {
  res.render("newAdmin", {
    title: "Add Admin",
  });
});

router.delete("/:id", async function (req, res) {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/admin/");
});

module.exports = router;
