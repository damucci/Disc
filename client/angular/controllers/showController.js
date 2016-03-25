//  build the controllers

      myAppModule.controller('showController', function ($scope, $routeParams, $location, questionFactory){
          //  initialize an empty array so $scope.questions maintains a consistent data type
          $scope.questions = [];
          $scope.answers = [];
          console.log('controller', $routeParams)
          var id = $routeParams.id;
          // run the gettopics method and set $scope data in the callback
          questionFactory.getOneQuestion(id, function(data){
            console.log(data, 'kerrin is great')
              $scope.questions = data;
              console.log($scope.questions)
          })

          // questionFactory.getAnswers(function(data){
          //     $scope.answers = data;
          //     console.log(data)
          // })

          // $scope.like = function (data) {
          //   console.log($scope.questions[0].answers)
          // }

      });