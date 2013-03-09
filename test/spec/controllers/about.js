'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('ruhrjsApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

});
