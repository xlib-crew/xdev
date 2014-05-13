'use strict';

describe('Service: templogin', function () {

  // load the service's module
  beforeEach(module('xdevApp'));

  // instantiate service
  var templogin;
  beforeEach(inject(function (_templogin_) {
    templogin = _templogin_;
  }));

  it('should do something', function () {
    expect(!!templogin).toBe(true);
  });

});
