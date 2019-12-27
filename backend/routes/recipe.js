var express = require("express");
var router = express.Router();

var Recipe = require("../models/recipe");
var json = require("../recipe.json");

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

router.get("/category", function(req, res) {
  Recipe.find(function(err, recipes) {
    if (err) {
      console.log(err);
    } else {
      let categories = [];
      recipes.forEach(async function(recipe) {
        if (categories.includes(recipe.category) === false) {
          if (recipe.category !== undefined) {
            categories.push(recipe.category);
          }
        }
      });
      res.send(categories);
    }
  });
});

router.get("/select", function(req, res) {
  let select = req.query.select;
  const country = ["한식", "중국", "일본", "이탈리아", "서양", "퓨전"];
  const level = ["초보환영", "보통", "어려움"];

  function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
  }
  if (select.includes("-")) {
    select = replaceAll(select, "-", "/");
  }

  if (country.includes(select)) {
    Recipe.find({ nation: select }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  } else if (level.includes(select)) {
    Recipe.find({ level: select }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  } else {
    Recipe.find({ category: select }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }
});

router.post("/create", function(req, res) {
  if (!req.user) return res.status(404).json({ error: "login required" });
  const recipe = new Recipe(req.body);
  recipe.save(function(err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }
    res.json({ result: 1 });
  });
});

router.post("/update/:recipe_id", (req, res) => {
  if (req.user._id != req.body.userid)
    return res.status(404).json({ error: "user not matched" });
  Recipe.update({ _id: req.params.recipe_id }, req.body, function(err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    if (!output.n) return res.status(404).json({ error: "recipe not found" });
    res.json({ message: "recipe updated" });
  });
});

router.delete("/delete/:recipe_id", (req, res) => {
  if (req.user._id != req.body.userid)
    return res.status(404).json({ error: "user not matched" });
  Recipe.remove({ _id: req.params.recipe_id }, function(err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    if (!output.result.n)
      return res.status(404).json({ error: "recipe not found" });
    res.json({ message: "recipe deleted" });
  });
});

router.get("/detail/:recipe_id", function(req, res) {
  Recipe.findOne({ _id: req.params.recipe_id }, function(err, recipe) {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      if (!recipe) {
        return res.status(404).json({ error: "recipe not found" });
      } else {
        res.send(recipe);
      }
    }
  });
});

module.exports = router;
