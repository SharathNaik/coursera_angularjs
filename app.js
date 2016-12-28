(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',function($scope){

var comma = ',';

function validateLunch(){
	var result = $scope.lunchmenu.split(comma);
	alert(result.length);
}

});


})();