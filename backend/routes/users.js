var express = require("express");
var router = express.Router();

var User = require("../models/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  User.find(function(error, users) {
    if (error) {
      console.log(error);
    } else {
      console.log(users);
      res.send(users);
    }
  });
});

router.post("/create", function(req, res, next) {
  var newUser = new User({ name: "Hong Gil Dong", age: "22" });

  User.create(newUser)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
