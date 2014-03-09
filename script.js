var myAppModule = angular.module('app', ['ui.date'])

myAppModule.controller('TimeCtrl', function($scope) {
  $scope.model = {
    "date": "16 August, 1986"
  }
  $scope.todoText = "Angular works";
  
  $scope.difference = function() {
    
    var pickedDate =  moment($scope.model.date);
    
    var now = new Date();
    var diff = moment.preciseDiff(now.toLocaleDateString()  ,pickedDate)
    return diff;
  }

  $scope.till = function(value) {
    
    var pickedDate =  moment($scope.model.date);
    var forty = pickedDate.add('years', value);
    console.log(forty);
    var now = new Date();

    var diff = moment.preciseDiff(now.toLocaleDateString(), forty)
    return diff;
  }


});