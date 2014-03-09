var myAppModule = angular.module('app', ['ui.date'])

myAppModule.controller('TimeCtrl', function($scope) {

  $scope.todoText = "Angular works";

  $scope.difference = "testing";

});