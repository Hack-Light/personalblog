const express = require("express");
const router = express.Router();


router.get("/", function (req, res) {
    res.render("about", {
        title: "About - Onoh Somtochukwu"
    })
})










module.exports = router;