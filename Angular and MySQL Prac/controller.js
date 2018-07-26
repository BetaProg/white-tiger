var app = angular.module('sqlapp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: './home.html',
		//controller: 'homectrl'
	}).when('/login', {
		templateUrl: './login.html',
		controller: 'loginctrl'
	}).otherwise({
		template: '404'
	})
})

app.controller('loginctrl', function($scope, $http){
	$scope.submit = function(){
		//$location.path('/login');
		var username = $scope.username;
		var password = $scope.password;
		console.log(username+' - '+password);
		$http({
			url: 'http://localhost/Angular_stuff/AngularMySQL/loginbackend.php',
			method: 'POST',
			headers: {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			data: 'username='+username+'&password='+password
		}).then(function(response){
			console.log(response.data);
		})
	}
});