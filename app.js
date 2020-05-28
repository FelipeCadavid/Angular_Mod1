(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.food = "";


	$scope.CheckIfTooMuch = function () {
		if($scope.food === ""){
			$scope.cantidad = "Please enter data first";
		}else{
		const words = $scope.food.split(',');
		if(words.length <= 3){
			$scope.cantidad = "Enjoy!";
		}else{
		 	$scope.cantidad = "Too much!";
		}



		}
	}



}


})();