var app=angular.module("mainApp", []);
 app.controller("alarmCtrl", function($scope){
     
     $scope.resetAlarm = function(){
         $scope.alarmInput = {};
     }
     
 });
