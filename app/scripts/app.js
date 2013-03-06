'use strict';

angular.module('ruhrjsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/howto', {
        templateUrl: 'views/howto.html',
        controller: 'HowtoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
