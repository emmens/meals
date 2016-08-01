'use strict';

/**
* @ngdoc function
* @name mealsApp.controller:MealDetailCtrl
* @description
* # MealDetailCtrl
* Controller of the mealsApp
*/
angular.module('mealsApp')
.controller('MealDetailCtrl', function ($scope, $routeParams, $http, $filter) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  
  $http.get('meals.json').then(function(response) {
    $scope.meal = $filter('filter')(response.data, {id: $routeParams.mealId})[0];
  });

  $scope.goBack = function() {
    window.history.back();
  }

});
