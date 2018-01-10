var User = require('../models/user');


module.exports = function(router){

//http://localhost:8080/api/users

'use strict';

var mongoose = require('mongoose'),
express = require('express'),
app = express(),
router = express.Router(),
// bodyParser = require('connect').bodyParser(),
user = mongoose.model('User');

router.post('/login',function(req,res) {
  console.log("Request: "+req.body);

var query = { cnic: req.body.cnic,
    name: req.body.password };
  user.find(query,function(err,user) {

    if(err) return res.status(500).send("There was a problem adding Exercise");

    res.status(200).send(user);
  });
});
}