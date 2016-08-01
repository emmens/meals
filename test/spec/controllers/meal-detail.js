'use strict';

describe('Controller: MealDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('mealsApp'));

  var MealDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MealDetailCtrl = $controller('MealDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MealDetailCtrl.awesomeThings.length).toBe(3);
  });
});
