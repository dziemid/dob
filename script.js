$(function(){
  var input = $('#dp1');
  input.datepicker({
          format: 'mm-dd-yyyy'
        }).on('changeDate', function(ev){
          input.trigger('input');
        });
  
});

var myAppModule = angular.module('app', [])

myAppModule.controller('TimeCtrl', function($scope) {
  $scope.model = {
    "date": "08-16-1986"
  }
  $scope.todoText = "Angular works";
  
  $scope.difference = function() {
    
    var pickedDate =  moment($scope.model.date);
    
    var now = new Date();
    var diff = moment.preciseDiff(now.toLocaleDateString(), pickedDate)
    return diff;
  }

  $scope.till = function(value) {
    
    var pickedDate =  moment($scope.model.date);
    var forty = pickedDate.add('years', value);
    var now = new Date();

    var diff = moment.preciseDiff(now.toLocaleDateString(), forty)
    return diff;
  }


});