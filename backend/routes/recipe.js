var express = require("express");
var router = express.Router();

var Recipe = require("../models/recipe");

router.get("/", function(req, res) {
  Recipe.find(function(error, recipes) {
    if (error) {
      console.log(error);
    } else {
      console.log(recipes);
      res.send(recipes);
    }
  });
});

router.get("/detail", function(req, res) {});

router.post("/create", function(req, res) {
  var recipe = new Recipe();
  recipe.name = req.body.name;
  recipe.userid = req.body.userid;
  recipe.ingredients = [[0], [0]];
  recipe.info = [[1], [1]];
  recipe.picture = "hi";

  recipe.save(function(err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }

    res.json({ result: 1 });
  });
});

module.exports = router;
