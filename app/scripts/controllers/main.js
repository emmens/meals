'use strict';

/**
 * @ngdoc function
 * @name mealsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mealsApp
 */
angular.module('mealsApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('meals.json').then(function(response) {
        $scope.meals = response.data;
      });


    $scope.title = 'Tour of Meals';

    $scope.onSelect = function(meal) {
      $scope.selectedMeal = meal;
    };

    $scope.gotoDetail = function(meal) {
      $location.path( '/meals/' + meal.id);
    };

  });
