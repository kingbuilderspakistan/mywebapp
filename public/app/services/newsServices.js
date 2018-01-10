angular.module('newsServices',[])
.factory('News',function($http){
	userFactory={};

	userFactory.create=function(regDatanews){
		return $http.post('/api/news',regDatanews);
	}
	return userFactory;
});