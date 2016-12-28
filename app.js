(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',function($scope){

var comma = ',';
$scope.lunchmenu = '';

$scope.validateLunch =  function(){
	
	$scope.message = "";
	var result ="";

	if($scope.lunchmenu !=""){
		result = $scope.lunchmenu.split(comma);
	}


	if(result.length == 0){
		$scope.message = "Please enter data first";
	}
	else if(result.length <=3){
		$scope.message = "Enjoy!";
	}else if(result.length >=4){
		$scope.message = "Too much!";
	}
};

});


})();