var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var NewsSchema = new Schema({
title: { type: String, lowercase: false, required: true},
description: { type: String, lowercase: false},
image: { type: String, required: true}
});







module.exports = mongoose.model('News',NewsSchema);