const express = require("express");
const router = express.Router();

const posts = [
  {
    title: "Science has not yet mastered prophecy",
    description:
      " We predict too much for the next year and yet far too little for the next ten.",
    author: "Onoh Somtochukwu",
    date: "August 24, 2019",
  },
  {
    title: "Science has not yet mastered prophecy",
    description:
      " We predict too much for the next year and yet far too little for the next ten.",
    author: "Onoh Somtochukwu",
    date: "August 24, 2019",
  },
  {
    title: "Science has not yet mastered prophecy",
    description:
      " We predict too much for the next year and yet far too little for the next ten.",
    author: "Onoh Somtochukwu",
    date: "August 24, 2019",
  },
  {
    title: "Science has not yet mastered prophecy",
    description:
      " We predict too much for the next year and yet far too little for the next ten.",
    author: "Onoh Somtochukwu",
    date: "August 24, 2019",
  },
  {
    title: "Science has not yet mastered prophecy",
    description:
      " We predict too much for the next year and yet far too little for the next ten.",
    author: "Onoh Somtochukwu",
    date: "August 24, 2019",
  },
  {
    title: "Failure is not an option",
    description:
      " Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    author: "Onoh Somtochukwu",
    date: "July 8, 2019",
  },
  {
    title: "Failure is not an option",
    description:
      " Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    author: "Onoh Somtochukwu",
    date: "July 8, 2019",
  },
  {
    title: "Failure is not an option",
    description:
      " Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    author: "Onoh Somtochukwu",
    date: "July 8, 2019",
  },
  {
    title: "Failure is not an option",
    description:
      " Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    author: "Onoh Somtochukwu",
    date: "July 8, 2019",
  },
  {
    title: "Failure is not an option",
    description:
      " Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    author: "Onoh Somtochukwu",
    date: "July 8, 2019",
  },
  {
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    description: "",
    author: "Onoh Somtochukwu",
    date: "September 18, 2019",
  },
  {
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    description: "",
    author: "Onoh Somtochukwu",
    date: "September 18, 2019",
  },
  {
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    description: "",
    author: "Onoh Somtochukwu",
    date: "September 18, 2019",
  },
  {
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    description: "",
    author: "Onoh Somtochukwu",
    date: "September 18, 2019",
  },
  {
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    description: "",
    author: "Onoh Somtochukwu",
    date: "September 18, 2019",
  },
  {
    title: "Man must explore, and this is exploration at its greatest",
    description: " Problems look mighty small from 150 miles up",
    author: "Onoh Somtochukwu",
    date: "September 24, 2019",
  },
  {
    title: "Man must explore, and this is exploration at its greatest",
    description: " Problems look mighty small from 150 miles up",
    author: "Onoh Somtochukwu",
    date: "September 24, 2019",
  },
];

router.get("/", function (req, res) {
  res.render("AdminPage", {
    title: "Admin Page",
    posts,
  });
});

router.get("/new", function (req, res) {
  res.render("newPost", {
    title: "New Posts",
  });
});

router.post("/new", function (req, res) {
  res.redirect("/posts/:id");
});

router.delete("/:id", function (req, res) {
  res.redirect("/admin/");
});
module.exports = router;
