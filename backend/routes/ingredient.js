var express = require("express");
var router = express.Router();

var Recipe = require("../models/ingredient");

router.get("/detail/:recipe_id", function(req, res) {
  Recipe.findOne({ _id: req.params.recipe_id }, function(err, recipe) {
    if (err) return res.status(500).json({ error: err });
    if (!recipe) return res.status(404).json({ error: "recipe not found" });
    res.jsoon(recipe);
  });
});

module.exports = router;
