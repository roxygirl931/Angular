'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'topTen']);

app.config(function($routeProvider){
	
	$routeProvider
	.when('/', {templateUrl:'partials/Login.html',controller: 'LoginController'})
	.when('/login', {templateUrl:'partials/Login.html',controller: 'LoginController'})
	.when('/dashboard', {templateUrl:'partials/dashboard.html',controller: 'DashboardController'})
	.when('/tabs', {templateUrl:'partials/tabs.html',controller: 'DashboardController'})
	.otherwise({redirectTo: '/'});
	
	
});

/* LAUNCHPAD: TOP TEN */
app.factory('pullTopTen', function($http){
	 return $http.get('/js/json/topTen.json');
});

app.factory('pullUrl', function(){
	 return new Object();
});

