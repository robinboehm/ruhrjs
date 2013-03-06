'use strict';

angular.module('ruhrjsApp')
  .controller('MainCtrl', function ($scope, talkprovider) {
    $scope.talks = talkprovider.getTalks();
  });
