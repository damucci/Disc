myAppModule.factory('questionFactory', function($http){
          // The factory is nothing more than a function that returns an object
          var questions = [];
          // var answers = []
          // console.log(questions)
          var factory = {};
          // Add a getquestions key to the factory object with a value of a function.
          factory.getQuestions = function (callback){
              // Pass the questions to a callback to be used by whoever calls the method
              $http.get('/question').success(function(res){
              	questions = res;
              	callback(questions); 
              })
              return questions;
          };

          // factory.incrementLike = function (info, callback) {
          //   console.log(info)
          //   var id = info
          //   $http.post('/like', id).success(function(res){
          //     callback(questions)
          //   })
          // }

          // factory.getAnswers = function (callback){
          //     // Pass the questions to a callback to be used by whoever calls the method
          //     $http.get('/answer').success(function(res){
          //       answers = res;
          //       callback(answers); 
          //     })
          //     return answers;
          // };

          factory.getOneQuestion = function(info, callback) {
            var id = info;
            console.log(id)
            $http.get('/question/' + id).success(function(res){
              singleQuestion = res;
              console.log(singleQuestion, 'hello');
              callback(singleQuestion)
            })
          }

          factory.addQuestion = function(info ,callback){
          	info['totalAnswers'] = 0;
            console.log(info)
          	$http.post('/question', info).success(function(res){
          		console.log(info)
          		callback(questions)
          	})
          };

          factory.addAnswer = function(info ,callback){
            // console.log(info)
            info['likes'] = 0;
            console.log(info)
            $http.post('/answer', info).success(function(res){
              console.log(info)
              callback(questions)
            })
          };

          factory.destroy = function(info, callback){
          	console.log(info)
          	var id = info._id;
          	$http.delete('/question/delete/'+ id).success(function(){
          		console.log('hello'+ info);
          		callback(questions)
          	})
          }


          // Most important step: return the object so it can be used by the rest of our angular code
          // console.log(factory);
          return factory;

      });