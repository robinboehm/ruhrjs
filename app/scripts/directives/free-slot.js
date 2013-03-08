'use strict';

angular.module('ruhrjsApp')
  .directive('freeSlot', function () {
    return {
        templateUrl: 'views/directives/free-slot.html',
        restrict: 'E',
        scope: {
            text: "="
        }
    };
  });
