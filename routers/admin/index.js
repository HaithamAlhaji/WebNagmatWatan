const express = require("express");
const router = express.Router();

router.all("*", (req, res, next) => {
  res.app.locals.layout = "admin/index";
  next();
});

module.exports = router;
