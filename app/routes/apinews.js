var News = require('../models/news');


module.exports = function(router){

//http://localhost:8080/api/news

router.post('/news', function(req,res){

	var news = new News();
	news.title = req.body.title;
	news.description = req.body.description;
news.image = req.body.image;


if(req.body.title == null || req.body.title == '' || req.body.description == null || req.body.description == '' || req.body.image == null || req.body.image == '') {
	res.json({success: false, message: 'Please fill the post first'});

} else {
news.save(function(err){
	if(err){ 
		res.json({ success: false, message: 'This post already exists'});
} else{
	res.json({ success: true, message: 'News Post'});
}

});
	
	}

});


return router;

}