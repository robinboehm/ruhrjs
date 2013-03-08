'use strict';

angular.module('ruhrjsApp')
  .factory('wordFetcher', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
