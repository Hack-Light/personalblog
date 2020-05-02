const express = require("express");
const router = express.Router();
const Post = require("./../models/blog");

router.get("/:id", async function (req, res) {
  let post = await Post.findById(req.params.id);
  if (post == null) res.redirect("/");
  res.render("post", {
    title: "Individual Post",
    post,
  });
});

module.exports = router;
