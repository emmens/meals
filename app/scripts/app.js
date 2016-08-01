'use strict';

/**
* @ngdoc overview
* @name mealsApp
* @description
* # mealsApp
*
* Main module of the application.
*/
angular.module('mealsApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .when('/meals/:mealId', {
    templateUrl: 'views/meal-detail.html',
    controller: 'MealDetailCtrl',
    controllerAs: 'meal-detail'
  })
  .otherwise({
    redirectTo: '/'
  });
});
