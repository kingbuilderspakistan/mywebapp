angular.module('newsController',['newsServices'])
.controller('newsCtrl',function($http, $location, $timeout, News){

var app=this;

	this.regNews=function(regDatanews){
app.loading=true;
app.errorMsg=false;

News.create(app.regDatanews).then(function(data){

if(data.data.success){
	app.loading=false;
	//Create Success Message
	app.successMsg=data.data.message +'....Redirecting';
	//Redirect to homepage
	$timeout(function() {
		$location.path('/');
	},2000);
} else {
	//Create an error message
app.loading=false;
		app.errorMsg=data.data.message;
}
});
};
});	
