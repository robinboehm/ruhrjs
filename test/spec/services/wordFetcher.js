'use strict';

describe('Service: wordFetcher', function () {

  // load the service's module
  beforeEach(module('ruhrjsApp'));

  // instantiate service
  var wordFetcher;
  beforeEach(inject(function (_wordFetcher_) {
    wordFetcher = _wordFetcher_;
  }));

  it('should do something', function () {
    expect(!!wordFetcher).toBe(true);
  });

});
