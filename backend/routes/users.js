var express = require("express");
var router = express.Router();

var User = require("../models/user");
const crypto = require('crypto');

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

router.post('/create', function(req, res, next) {
  var newUser = new User(req.body)
  let cipher = crypto.createCipher('aes192', 'key')
  cipher.update(newUser.password, 'utf8', 'base64')
  let cipheredOutput = cipher.final('base64')
  newUser.password = cipheredOutput
  
  User.create(newUser)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });

})

module.exports = router;
