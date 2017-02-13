
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

