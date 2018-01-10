var User = require('../models/user');


module.exports = function(router){

//http://localhost:8080/api/users

router.post('/users', function(req,res){

	var user = new User();
	user.name = req.body.name;
	user.nameoffatherhusband = req.body.nameoffatherhusband;
user.residenceaddress = req.body.residenceaddress;
user.telephoneofficeresidence = req.body.telephoneofficeresidence;
user.mobilenumber = req.body.mobilenumber;
user.officeaddress = req.body.officeaddress;
user.cnic = req.body.cnic;
user.password = req.body.password;
user.nominee = req.body.nominee;
user.relationship = req.body.relationship;
user.nomineeaddress = req.body.nomineeaddress;
user.nomineecnic = req.body.nomineecnic;
user.apartmentshopnumber = req.body.apartmentshopnumber;
user.groundfloor = req.body.groundfloor;
user.block = req.body.block;
user.dated = req.body.dated;

if(req.body.name == null || req.body.name == '' || req.body.nameoffatherhusband == null || req.body.nameoffatherhusband == '' || req.body.residenceaddress == null || req.body.residenceaddress == '' || req.body.telephoneofficeresidence == null || req.body.telephoneofficeresidence == '' || req.body.mobilenumber == null || req.body.mobilenumber == '' || req.body.officeaddress == null || req.body.officeaddress == '' || req.body.cnic == null || req.body.cnic == '' || req.body.nominee == null || req.body.nominee == '' || req.body.relationship == null || req.body.relationship == '' || req.body.nomineeaddress == null || req.body.nomineeaddress == '' || req.body.nomineecnic == null || req.body.nomineecnic == '' || req.body.apartmentshopnumber == null || req.body.apartmentshopnumber == '' || req.body.groundfloor == null || req.body.groundfloor == '' || req.body.block == null || req.body.block == '' || req.body.dated == null || req.body.dated == '' || req.body.password == null || req.body.password =='') {
	res.json({success: false, message: 'Ensure All The Fields'});

} else {
user.save(function(err){
	if(err){ 
		res.json({ success: false, message: 'User already exists!'});
} else{
	res.json({ success: true, message: 'User Created!'});
}

});
	
	}
});



router.post('/login',function(req,res) {
  console.log("Request cnic: "+req.body.cnic);
console.log("Request: "+req.body.password);

var query = { cnic: req.body.cnic,
    name: req.body.password };
  User.find(query,function(err,user) {

    if(err) return res.status(500).send("There was a problem adding Exercise");

    res.status(200).send(user);
  });
});
}
