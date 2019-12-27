var express = require("express");
var router = express.Router();

var Recipe = require("../models/image");

router.get("/", function(req, res) {
  Recipe.find(function(error, images) {
    if (error) {
      console.log(error);
    } else {
      console.log(images);
      res.send(images);
    }
  });
});

router.post("/create", function(req, res) {
  if (!req.user) return res.status(404).json({ error: "login required" });
  var image = new Image(req.body);
  image.save(function(err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }
    res.json({ result: 1 });
  });
});

module.exports = router;
