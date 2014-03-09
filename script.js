$(function(){
  var input = $('#dp1');
  input.datepicker({
          format: 'mm-dd-yyyy'
        }).on('changeDate', function(ev){
          input.trigger('input');
        });
  
});

var myAppModule = angular.module('app', [])

myAppModule.controller('TimeCtrl', function($scope, $location) {

  var dateFormat = "MM-DD-YYYY";

  var pickedDate =  function() {
    return moment($scope.model.date, dateFormat);
  }

  $scope.model = {
    "date": ( $location.search().dob  ) || "08-16-1986"
  }

  $scope.name = $location.search().name
  

  $scope.difference = function() {
    var now = new Date();
    var diff = moment.preciseDiff(now.toLocaleDateString(), pickedDate())
    return diff;
  }

  var diffrenceInGeneral = function() {
    var now = moment(new Date().toLocaleDateString());
    return moment.duration(now.diff(pickedDate()));
  }

  $scope.differenceInDays = function() {
    return Math.round(diffrenceInGeneral().asDays());
  }


  $scope.differenceInWeeks = function() {
   return Math.round(diffrenceInGeneral().asWeeks());
  }

  $scope.till = function(value) {
    var otherDate = pickedDate().add('years', value);
    var now = new Date();

    var diff = moment.preciseDiff(now.toLocaleDateString(), otherDate)
    return diff;
  }

  $scope.moreOrLess = function(value) {
    var otherDate = pickedDate().add('years', value);
    return otherDate.fromNow();
  }

  $scope.moreOrLessInWeeks = function(value) {
    var otherDate = pickedDate().add('years', value);
    var now = moment(new Date().toLocaleDateString());
    return Math.round(moment.duration(otherDate.diff(now)).asWeeks());
  }




});