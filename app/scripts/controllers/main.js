'use strict';

/**
 * @ngdoc function
 * @name mealsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mealsApp
 */
angular.module('mealsApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('meals.json').then(function(response) {
        self.phones = response.data;
      });


    $scope.title = 'Hello';
    $scope.meals = [
      {
        id: 1,
        name: 'Pork'
      },
      {
        id: 2,
        name: 'Beef'
      },
      {
        id: 3,
        name: 'Lamb'
      }
    ];
  });
