
/*
 * GET home page.
 */
var data = require("../quiz_data.json");


exports.view = function(req, res){
	console.log(data);
    res.render('addnewquiz', data);
};

exports.addNewQuiz = function(req, res) {
	console.log("Add quiz function called.");
}

exports.showQuizSet = function(req, res){
	console.log("Showing quizzes");
	//var parsed = JSON.parse(data);
	console.log("Testing data : " + data.quizset[1].questions[0].q_text);
	res.render('addnewquiz', data);
}