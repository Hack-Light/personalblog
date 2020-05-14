const express = require("express");
const router = express.Router();
const Post = require("./../models/blog");

router.get("/:slug", async function (req, res) {
  let post = await Post.findOne({ slug: req.params.slug });
  if (post == null) res.redirect("/");
  res.render("post", {
    title: "Individual Post",
    post
  });
});

// router.delete("/:id", async function (req, res) {
//   await Post.findByIdAndDelete(req.params.id);
//   res.redirect("/admin/");
// });

module.exports = router;
