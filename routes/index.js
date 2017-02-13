
/*
 * GET home page.
 */
var data = require("../quiz_data.json");

exports.view = function(req, res){
  console.log(data);
  res.render('index', data);
};

exports.showQuizSet = function(req, res){
	console.log("Showing quizzes");
	res.render('index', data);
}
