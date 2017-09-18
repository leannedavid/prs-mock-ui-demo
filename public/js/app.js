Dropzone.autoDiscover = false;

const webdevapp = angular.module('webdevapp', ['ngRoute', 'thatisuday.dropzone'])
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
          .when('/departments/arts-and-letters/art', {
                templateUrl:"/views/departments/art.html"
          })
          .when('/calendar', {
                templateUrl:"/views/calendar.html"
          })
          .when('/upload', {
                templateUrl:"/views/upload.html"
          })
  }])

  .config(function(dropzoneOpsProvider){
    dropzoneOpsProvider.setOptions({
      url : '#/upload',
      /* must ask liaisons if there should be a restriction on file types */
      // acceptedFiles : 'application/pdf, application/msword, application/vnd.ms-excel,' +
      //   ' application/vnd.openxmlformats-officedocument.wordprocessingml.document,' +
      //   ' application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      addRemoveLinks : true,
      dictDefaultMessage : 'Click to add or drop a file',
      dictRemoveFile : 'Remove file',
      dictResponseError : 'Could not upload this file'
    })
  })
