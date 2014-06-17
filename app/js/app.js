'use strict';


// Declare app level module which depends on filters, and services
var AssemblyLineApp = angular.module('conversate', [
  'ngRoute',
  'conversate.services',
  'conversate.directives',
  'conversate.controllers',
  'ngSanitize'
]);


AssemblyLineApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/chat', {templateUrl: 'partials/chat.html', controller: 'ChatController'});
  $routeProvider.otherwise({redirectTo: '/chat'});
}]);
