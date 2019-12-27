var express = require("express");
var router = express.Router();

var User = require("../models/user");
const crypto = require('crypto');

// 모든 user 정보를 불러온다
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

// 회원가입
router.post('/create', function(req, res, next) {
    User.findOne({userid: req.body.userid}, function(err, output){
        if (!output) {
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
        } else {
            return res.send(false)
        }
    })
})

// 로그인
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
            return res.status(404).json({error: '사용자를 찾을 수 없습니다.'})
        }
        res.json(user);
    })
})

// localstorage user가 있을때 로그인
router.post('/storage/login', function(req, res, next) {
    const userinfo = req.body.userid
    User.findOne({'userid': userinfo}).select('password').exec(function(err,user){
        if (err){
            return res.status(500).json({error: err})
        }
        var password = user.password
        User.findOne({'userid': userinfo, 'password': password}, function(err, authUser){
            if (err){
                return res.status(500).json({error: err})
            }
            if (!authUser){
                return res.status(404).json({error: '사용자를 찾을 수 없습니다.'})
            }
            res.send('LocalStorage User Login Success!')
        })
    });
})

// 재료 수정
router.post('/storage/food', function(req, res, next) {
    User.findOneAndUpdate( 
        {userid: req.body.userid}, { $set: {foods: req.body.userfood } }, {new: true}
        , function(err, user){
        if (err){
            res.send(err)
        } else {
            res.send("UserFood Update Success!")
        }
    });
})

// 비밀번호 확인
router.post('/confirm/password', function(req, res, next) {
    if (req.body.boolean) {
        User.findOne({userid: req.body.userid}, function(err, user) {
            res.send(user.password)
        })
    } else {
        let cipher = crypto.createCipher('aes192', 'key')
        cipher.update(req.body.password, 'utf8', 'base64')
        let cipherPw  = cipher.final('base64')
        res.send(cipherPw)
    }

    
})

// 비밀번호 변경
router.post('/update/password', function(req, res, next) {
    let cipher = crypto.createCipher('aes192', 'key')
    cipher.update(req.body.password, 'utf8', 'base64')
    let cipherPw  = cipher.final('base64')
    User.update({userid: req.body.userid}, {password: cipherPw}, function(err, user) {
        if (err) {
            res.send(err)
        } else {
            res.send('변경되었습니다.')
        }

    })
    
})

// 회원삭제
router.delete('/delete/:userid', function(req, res, next) {
    User.remove(req.params, function(err, output){
        if (err) {
            return res.status(500).json({error: err})
        }
    })
})

module.exports = router;
