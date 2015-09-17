'use strict';
//global function but not ideal-we want modules to orgnanize and manage code
// function AppCtrl($scope) {
// 	$scope.name = 'Mark';
// 	$scope.updateName = function() {
// 		$scope.name = 'John from function';
// 	}
// }

var controllers = angular.module('dabbble.controllers', []);
//ctrlr is defined as part of a module, controller func on controllers module,1st arg is name of ctrl, 2nd arg is ctrlr anonymous func
controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Module";
	
})