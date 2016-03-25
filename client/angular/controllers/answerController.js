//  build the controllers

      myAppModule.controller('answerController', function ($scope, $routeParams, $location, questionFactory){
          //  initialize an empty array so $scope.questions maintains a consistent data type
          $scope.questions = [];
          console.log('controller', $routeParams)
          var id = $routeParams.id;
          // run the gettopics method and set $scope data in the callback
          questionFactory.getOneQuestion(id, function(data){
            console.log(data, 'kerrin is great')
              $scope.questions = data;
              console.log($scope.questions)
          })

          
            $scope.addAnswer = function (data){
              // add to the array
              // $scope.questions.push($scope.newQuestion);
              $scope.newAnswer.questionID = id 
              console.log($scope.newAnswer)
              if($scope.newAnswer.answer.length < 10) {
                alert('Your answer is not long enough!')
              }
              else {
                questionFactory.addAnswer($scope.newAnswer, function(){
                questionFactory.getQuestions(function (data){
            // console.log(data)
                $scope.questions = data;
                })
                $location.path('/');
              })
              // clear the form values
              $scope.newAnswer = {};
              }
              
            };
            
          //   $scope.kill = function(data) {
          //   questionFactory.destroy(data, function(){
          //       questionFactory.getQuestions(function(data){
          //           $scope.questions = data;
          //       });
          //       $scope.newquestion = {};
          //     })
          //   }
      });