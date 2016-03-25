
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our friendSchema
var QuestionSchema = new mongoose.Schema({
  question: {type:String, required: true, minlength:10},
  description: String,
  totalAnswers: Number,
  answers: [{
  	answer: {type:String, required: true},
  	details: {type:String, required: true},
  	questionID: {type:String, required: true},
  	likes: Number
  }]
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('question', QuestionSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller
