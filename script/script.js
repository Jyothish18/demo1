
        var app=angular.module("mainApp", ['ngRoute']);   
        app.config(function($routeProvider){                
            $routeProvider
            .when('/',{
                templateUrl: './pages/demo.html'
                
            })
            .when('/rooms',{
                templateUrl : './pages/rooms.html'
               
            })
            .when('/alarm', {
                templateUrl : './pages/alarm.html' 
               
            })
            .when('/hvac', {
                templateUrl : './pages/hvac.html' 
               
            })
            .when('/cinema', {
                templateUrl : './pages/cinema.html'
                
            })
            .when('/shades', {
                templateUrl : './pages/shades.html'
               
            })
            .when('/camera', {
                templateUrl : './pages/camera.html'
               
            })
            .when('/consumption', {
                templateUrl : './pages/consumption.html'
                
            })
            .when('/irrigation', {
                templateUrl : './pages/irrigation.html'
                
            })
            .when('/pool', {
                templateUrl : './pages/pool.html'
                
            })
            .when('/weather', {
                templateUrl : './pages/weather.html'
                
            })
            .when('/settings', {
                templateUrl : './pages/setting.html' ,
                controlller : 'mainController'
            })
            .otherwise ({
                redirectTo : '/demo'
            });
        });

        //app.controller('mainController', function($scope){

       // });
