angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
	
	.when('/register', {
	templateUrl: 'app/views/pages/users/register.html',
	controller: 'regCtrl',
	controllerAs: 'register'

})

	.when('/addmodels', {
		templateUrl: 'app/views/pages/users/addmodels.html',
		

})
	.when('/', {
		templateUrl: 'app/views/pages/users/addnews.html',
		controller: 'newsCtrl',
	controllerAs: 'addnews'



	})

	.otherwise({ redirectTo: '/'});

$locationProvider.html5Mode({
enabled: true,
requireBase: false

});

});
