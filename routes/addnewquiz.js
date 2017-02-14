
/*
 * GET home page.
 */
var data = require("../quiz_data.json");


// exports.view = function(req, res){
// 	console.log(data);
//     res.render('addnewquiz', data);
// };

exports.showQuizSet = function(req, res){
	console.log("Showing quizzes");
	var index = req.query.index;
	console.log(req)
	console.log(index)
	res.render('addnewquiz', data.quizset[index]);

}