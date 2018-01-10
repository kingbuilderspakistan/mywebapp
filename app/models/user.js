var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
name: { type: String, lowercase: true, required: true},
nameoffatherhusband: { type: String, lowercase:true, required: true},
residenceaddress: { type: String, required: true, lowercase: true},
telephoneofficeresidence: { type: String, required: true},
mobilenumber: { type: String, required: true ,unique: true},
officeaddress: { type: String, required: true},
cnic: { type: String, required: true, unique: true},
password: { type: String, required: true},
nominee: { type: String, required: true, lowercase: true},
relationship: { type: String, required: true, lowercase:true},
nomineeaddress: { type: String, required: true, lowercase: true},
nomineecnic: { type: String, required: true, unique: true},
apartmentshopnumber: { type: String, required: true},
groundfloor: { type: String, required: true, lowercase: true},
block: { type: String, required: true, lowercase: true},
dated: { type: String, required: true}



});

module.exports = mongoose.model('User',UserSchema);