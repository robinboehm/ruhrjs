'use strict';

describe('Directive: freeSlot', function () {
  beforeEach(module('ruhrjsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<free-slot></free-slot>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the freeSlot directive');
  }));
});
