
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
	delete require.cache[require.resolve('../quiz_data.json')];
	data = require("../quiz_data.json");
	res.render('/', data.quizset[index]);
}