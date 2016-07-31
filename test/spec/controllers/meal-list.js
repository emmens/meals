'use strict';

describe('Controller: MealListCtrl', function () {

  // load the controller's module
  beforeEach(module('mealsApp'));

  var MealListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MealListCtrl = $controller('MealListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MealListCtrl.awesomeThings.length).toBe(3);
  });
});
