
      myAppModule.controller('questionController', function ($scope, $location, questionFactory){
          //  initialize an empty array so $scope.questions maintains a consistent data type
          $scope.questions = [];

          // // run the getquestions method and set $scope data in the callback
          // questionFactory.getquestions(function (data){
          //     $scope.questions = data;
          //     // console.log($scope.questions)
          // })
          // console.log('TESTING')
          
            $scope.addQuestion = function (data){
              // add to the array
              // $scope.questions.push($scope.newQuestion); 
              console.log($scope.newQuestion)
              if ($scope.newQuestion.question.length < 10){
                alert('Question is too short!')
              }
              else {
                questionFactory.addQuestion($scope.newQuestion, function(){
                questionFactory.getQuestions(function (data){
            // console.log(data)
                $scope.questions = data;
                })
                $location.path('/');
              })
              // clear the form values
              $scope.newQuestion = {};
              }
              
            };
            
          //   $scope.kill = function(data) {
          //   questionFactory.destroy(data, function(){
          //       questionFactory.getquestions(function(data){
          //           $scope.questions = data;
          //       });
          //       $scope.newquestion = {};
          //     })
          //   }
      });