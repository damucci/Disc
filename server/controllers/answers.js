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




	// addAnswer: function(req, res) {
	// 	console.log(req.body.questionID, 'hello')
	// 	question.update({_id: req.body.questionID}, {$inc: {totalAnswers: 1}}, {$set: {answers: {answer: req.body.answer, details: req.body.details}}}, function(err, results){
	// 		if(err){
	// 			console.log('You messed up')
	// 		} else {
	// 			console.log('successfully added answer')
	// 		}
	// 	})
	// 	res.end()
	// }
	
}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
