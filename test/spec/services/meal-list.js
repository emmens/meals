'use strict';

describe('Service: mealList', function () {

  // load the service's module
  beforeEach(module('mealsApp'));

  // instantiate service
  var mealList;
  beforeEach(inject(function (_mealList_) {
    mealList = _mealList_;
  }));

  it('should do something', function () {
    expect(!!mealList).toBe(true);
  });

});
