//  build the controllers
    // Create a controller (attached to this module), and inject the questionFactory in it.
    // Create a module
      // var myAppModule = angular.module('myApp', ['ngRoute']);
      // Create a controller (attached to this module), and inject the questionFactory in it.
      myAppModule.controller('homeController', function ($scope, $location, questionFactory){
          //  initialize an empty array so $scope.questions maintains a consistent data type
          $scope.questions = [];

          // // run the getQuestions method and set $scope data in the callback
          questionFactory.getQuestions(function (data){
              $scope.questions = data;
              // console.log($scope.questions)
          })
          // console.log('TESTING')
          

      });