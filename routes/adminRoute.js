const express = require("express");
const router = express.Router();
const debug = require("debug")("app:adminRouter");
const { isAuthenticated } = require("./authRoute");

const Post = require("./../models/blog");
const Contact = require("./../models/contacts");


router.use(isAuthenticated)


router.get("/", async function (req, res) {

  try {
    let posts = await Post.find().sort({ date: -1 });
    res.render("AdminPage", {
      title: "Admin Page",
      posts,
    });
  } catch (e) {

  }

});

router.get("/new", function (req, res) {
  res.render("newPost", {
    title: "New Posts",
    post: new Post(),
  });
});

router.post(
  "/",
  async function (req, res, next) {
    req.post = new Post();
    next();
  },
  savePostandRedirect("newPost")
);

router.put(
  "/:id",
  async function (req, res, next) {
    let id = req.params.id.trim();
    req.post = await Post.findById(id);
    next();
  },
  savePostandRedirect("editPost")
);

router.delete("/:id", function (req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/admin");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/edit/:id", async function (req, res) {
  let post = await Post.findById(req.params.id);
  try {
    res.render("editPost", {
      title: "Edit Post - Onoh Somtochukwu",
      post: post,
    });
  } catch (err) {
    console.log(err);
  }
});



router.get("/contacts", async function (req, res) {
  try {
    let contacts = await Contact.find().sort({ date: -1 });
    res.render("contactsAdmin", {
      title: "My Contacts - Admin - Onoh Somtochukwu",
      contacts,
    });
  } catch (e) {

  }

});

function savePostandRedirect(file) {
  return async (req, res) => {
    let post = req.post;

    post.title = req.body.title;
    post.description = req.body.description;
    post.author = req.body.author;
    post.markdown = req.body.article;

    try {
      post = await post.save();

      res.redirect(`/posts/${post.slug}`);
    } catch (err) {
      debug(err);
      res.render(`${file}`, { post: post });
    }
  };
}

module.exports = router;
