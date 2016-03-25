var myAppModule = angular.module('myApp', ['ngRoute']);

//  use the config method to set up routing:
    myAppModule.config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/',{
          templateUrl: 'partials/home.html'
        })
        .when('/newQuestion',{
          templateUrl: 'partials/newQuestion.html'
        })
        .when('/answer/:id', {
          templateUrl: 'partials/answer.html'
        })
        .when('/show/:id', {
          templateUrl: 'partials/show.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });