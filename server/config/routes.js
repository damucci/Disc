var mongoose = require('mongoose');
var question = require('./../controllers/questions.js');
// var answer = require('./../controllers/answers.js');




  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all questions)

  //question routes
    app.get('/question', function(req, res) {
      question.index(req, res);
	});

	app.post('/question', function(req, res) {
		console.log('POST DATA', req.body);
		question.create(req, res);
	});

	app.delete('/question/delete/:id', function (req, res){
		question.destroy(req, res);
	});

	//answers routes
	app.get('/question/:id', function(req, res) {
    	question.findOne(req, res);
	});

	// app.get('/answer', function(req, res) {
 //      answer.index(req, res);
	// });

	app.post('/answer', function(req, res) {
		console.log('POST DATA', req.body);
		question.addAnswer(req, res);
	});

	// app.post('/like', function(req, res) {
	// 	console.log('POST DATA', req.body);
	// 	// question.addLike(req, res);
	// })
	
};

