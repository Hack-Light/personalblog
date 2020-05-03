const express = require("express");
const router = express.Router();
const debug = require("debug")("app:adminRouter");

const Post = require("./../models/blog");

router.get("/", async function (req, res) {
  let posts = await Post.find().sort({ date: 1 });
  res.render("AdminPage", {
    title: "Admin Page",
    posts,
  });
});

router.get("/new", function (req, res) {
  res.render("newPost", {
    title: "New Posts",
    post: new Post(),
  });
});

router.post("/", async function (req, res) {
  let post = new Post({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    markdown: req.body.article,
  });

  try {
    post = await post.save();
    res.redirect(`/posts/${post.id}`);
  } catch (err) {
    debug(err);
    res.render("newPost", { post: post });
  }
});

router.delete("/:id", async function (req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/admin");
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
