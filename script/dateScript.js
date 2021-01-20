var app= angular.module("mainApp", []);
        app.controller("dateCtrl", function($scope){
            var month= ["January", "Febrauary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var day=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            $scope.currentMonth= month[new Date().getMonth()];
            $scope.currentDate= new Date();
            $scope.currentDay= day[new Date().getDay()];
        });
        
        app.controller("leftNavCtrl",function($scope){
            $scope.leftNavToggle = false;
            $scope.showHideLeft = function (){
                $scope.leftNavToggle = $scope.leftNavToggle ? false:true ;
            }

            $scope.rightNavToggle = false;
            $scope.showHideRight = function (){
                $scope.rightNavToggle = $scope.rightNavToggle ? false:true ;
            }
        });

        app.controller("modeControlller", function($scope){
            $scope.modeAbsence = function ($scope){
                $scope.message1 = "Absence" ;
            }
            $scope.modePresence = function ($scope){
                $scope.message1 = "Presence";
            }
            $scope.modeSleep = function ($scope){
                $scope.message1 = "Sleep";
            } 
        });

        app.controller("alarmCtrl", function($scope){
            $scope.resetAlarm = function(){
                $scope.alarmInput = {};
            }
        });

       app.controller("hvacCtrl", function($scope){
            $scope.increment = function(){
                $scope.livingRoom_temp = livingRoom_temp + 1;
            }
            $scope.decrement = function(){
                $scope.livingRoom_temp = livingRoom_temp - 1;
            }
        }); 
        
        app.controller("timeController", function($scope, $interval){
            $scope.currentTime = new Date();
            $interval(function () {
                $scope.currentTime = new Date();
            }, 1000);
        });