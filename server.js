var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var News = require('./app/models/news');



var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var appRoutes = require('./app/routes/apinews')(router);


var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.json()); //for parsing application json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public')); 
app.use('/api',appRoutes);

//http://Localhost:8080/api/users
mongoose.connect('mongodb://tabish:tabishsyed123@ds135747.mlab.com:35747/webapps', { useMongoClient: true });

//mongoose.connect('mongodb://<tabish>:<tabishsyed123>@ds135747.mlab.com:35747/webapps');
//mongoose.connect('',function(err){
//if(err){
//mongodb://localhost:27017/webapps

//console.log('Not connected to the database: ' + err);

//}else{
	//console.log('Successfully connected to MongoDB');
//}
//});

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));

});

app.listen(port,function()
{
	console.log('Running the server on port' + port);
});
