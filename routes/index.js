var express = require("express");
var router = express.Router();
var Product = require("../models/Product");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  return res.render("curd", {
    title: "Awesome Products",
    products,
  });
});

module.exports = router;
