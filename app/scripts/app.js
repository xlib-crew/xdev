'use strict';

angular.module('xdevApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/fag', {
        templateUrl: 'views/fag.html',
        controller: 'FagCtrl'
      })
      .when('/arena', {
        templateUrl: 'views/arena.html',
        controller: 'ArenaCtrl'
      })
      .when('/bok', {
        templateUrl: 'views/bok.html',
        controller: 'BokCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
