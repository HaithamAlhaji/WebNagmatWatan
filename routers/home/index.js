const express = require("express");
const router = express.Router();

router.all("*", (req, res, next) => {
  res.app.locals.layout = "home/index";
  next();
});
router.get("/", (req, res, next) => {
  res.render("home/index", {});
});
module.exports = router;
