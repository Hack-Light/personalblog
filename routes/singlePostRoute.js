const express = require("express");
const router = express.Router();

router.get("/:id", function (req, res) {
  res.send("individual article");
});

module.exports = router;
