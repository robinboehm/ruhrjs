'use strict';

describe('Service: talkprovider', function () {

  // load the service's module
  beforeEach(module('ruhrjsApp'));

  // instantiate service
  var talkprovider;
  beforeEach(inject(function (_talkprovider_) {
    talkprovider = _talkprovider_;
  }));

  it('should do something', function () {
    expect(!!talkprovider).toBe(true);
  });

});
