'use strict';

angular.module('ruhrjsApp')
  .directive('talk', function () {
    return {
      templateUrl: 'views/directives/talk.html',
      restrict: 'E',
       scope: {
          talk: "="
       },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
