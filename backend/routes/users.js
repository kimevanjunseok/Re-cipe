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
  const newUser = new User(req.body)
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

router.post('/login', function(req, res, next) {
  const userinfo = req.body
  let cipher = crypto.createCipher('aes192', 'key')
  cipher.update(userinfo.password, 'utf8', 'base64')
  let cipherPw  = cipher.final('base64')
  User.findOne({userid: userinfo.userid, password: cipherPw}, function(err, user){
    
    if(err) {// 구문 error
      return res.status(500).json({error: err})
    };
    
    if(!user) {// User가 없으면 error
      return res.status(404).json({error: 'user not found'})
    } else {
      console.log(req.session)
    }
  
    res.json(user);
  })
})

module.exports = router;
