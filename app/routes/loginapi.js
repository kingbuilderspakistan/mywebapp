
router.post('/login',function(req,res) {
  console.log("Request cnic: "+req.body.cnic);
console.log("Request Pass: "+req.body.password);

var query = { cnic: req.body.cnic,
    name: req.body.password };
  User.find(query,function(err,user) {

    if(err) return res.status(500).send("There was a problem adding Exercise");

    res.status(200).send(user);
  });
});
return router;

}
