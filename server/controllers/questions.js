var mongoose = require('mongoose');
var question = mongoose.model('question');


// Edit the show method as follows
module.exports = (function() {
	return {
 		index: function(req, res) {
    		question.find({}, function(err, results) {
    			if(err) {
    			console.log(err);
    		} else {
        		res.json(results);
    		}
		})
	},

	findOne: function(req, res) {
    		question.find({_id: req.params.id}, function(err, results) {
    			if(err) {
    			console.log('there is an error pulling question information');
    		} else {
    			console.log('success pulling individual question')
        		res.json(results);
    		}
		})
	},


	create: function(req, res) {
			var newQuestion = new question({question: req.body.question, description: req.body.description, totalAnswers: req.body.totalAnswers})
			newQuestion.save(function(err) {
				if(err) {
					console.log('Its hard thinking of questions');
				} else {
					console.log('You added a new question!');
					res.end();
				}
			})
		},

	addAnswer: function(req, res) {
		console.log(req.body, 'hello')
		question.update({_id: req.body.questionID}, {$inc: {totalAnswers: 1}, $push: {answers: {$each: [{answer: req.body.answer, details: req.body.details, likes: req.body.likes}]}}}, function(err, results){
			if(err){
				console.log('You messed up', err)
			} else {
				console.log('successfully added answer')
			}
		});
		res.end()
	},



	destroy: function(req, res) {
		question.remove({_id: req.params.id}, function (err, question){
			console.log('You have removed this question')
			// res.redirect('/');
			res.end();
		})
	}
	
}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
