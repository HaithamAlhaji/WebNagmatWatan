const express = require("express");
const router = express.Router();

router.all("*", (req, res, next) => {
  res.app.locals.layout = "home/index";
  next();
});
router.get("/", (req, res, next) => {
  res.render("home/index", {
    defaultStyle: req.app.get("defaultStlye")
  });
});
module.exports = router;
