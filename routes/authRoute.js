const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const passport = require("passport");

let count = 0;

//
router.get("/new", checkAuthentication, async function (req, res) {
  res.render("newAdmin", {
    title: "Add Admin"
  });
});

//
router.post("/new", checkAuthentication, async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let admin = new Admin({
      name: req.body.name,
      password: hashedPassword
    });

    let result = await admin.save();
    console.log(result);
    res.redirect("/auth/login");
  } catch (e) {
    res.redirect("/auth/new");
  }
});

router.get("/login", checkNotAuthentication, function (req, res) {
  res.render("adminLogin", {
    title: "Admin Log In"
  });
});
router.post(
  "/login",
  checkNotAuthentication,
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: redirectFaliure(),
    failureFlash: true
  })
);

router.route("/logout").get((req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        debug(err);
      } else res.redirect("/");
    });
  }
});

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
function checkNotAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/admin");
  }
  next();
}

function redirectFaliure() {
  if (count == 3) {
    return "/";
  } else {
    count++;
    return "/auth/login";
  }
}

// this is used to authenticate the admin for login

module.exports = {
  authRouter: router,
  isAuthenticated: checkAuthentication
};
