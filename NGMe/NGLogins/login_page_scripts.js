/** Created for the client side validations of forms, and other angular functionalities for login page
 *
 */

var loginit = angular.module('loginit', []);
loginit.controller('title_content_cntrl', function($scope){
	$scope.application_title = "Make it Angular";
	$scope.title_image_address = "https://www.indianappdevelopers.com/blog/wp-content/uploads/2016/04/AngularJS.png";
});

loginit.directive("formTitle", function(){
	var linkFunction = function(scope, element, attributes){
		var title_text = element.children()[1];
		var title_content = element.parent();
		angular.element(title_text).css({'color':'red', 'margin':'0% auto 5% 0%','width':'auto', 'padding-top':'5px', 'float':'left', 'font-size':'20px'});
		angular.element(title_content).css({'width':'100%', 'text-align':'center', 'float':'left'});
		angular.element(document.getElementById('title_image')).css({'width':'50px', 'float':'left', 'margin':'auto auto auto 35%'});
	}
	return {
    restrict: "E",
    link: linkFunction
  };
});
