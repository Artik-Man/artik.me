'use strict';

angular.module('cvApp', [
    'cvLang',
	'ngRoute',
	'cvApp.landing',
	'scroll',
	'skillBuilder',
	'ngDialog',
	'sun.scrollable',
	'slick'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.otherwise({redirectTo: ''});
}]);
