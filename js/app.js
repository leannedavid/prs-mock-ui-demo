const webdevapp = angular.module('webdevapp', ['ngRoute'])
  .config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('');
  }])

  .config(['$routeProvider', function($routeProvider){
      $routeProvider
          .when('/', {
                templateUrl: "/views/home.html"
          })
          .when('/departments', {
                templateUrl:"/views/departments.html"
          })
          .when('/arts-and-letters', {
                templateUrl:"/views/departments/arts-letters.html"
          })
  }])
