delete require.cache[require.resolve('../quiz_data.json')];
var data = require("../quiz_data.json");

exports.show = function(set, num, req, res){

	console.log("show called");
	var index = Number(num);
	console.log("This is question " + index + " in set " + set);
	fs = require('fs');
	var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());

	// manipulate json file
	m.quizset[set - 1].questions.splice(index - 1, 1);
	for(var i = index - 1; i < m.quizset[set - 1].questions.length; i++ ){
		// alter url property
		m.quizset[set - 1].questions[i].qurl = 'ques/' + (i + 1) + '/' + set;
	}
	var orig = Number(m.quizset[set - 1].num_question);
	orig -= 1;
	m.quizset[set - 1].num_question = orig;

	fs.writeFileSync('quiz_data.json', JSON.stringify(m));
	console.log("JSON wrote back");
	//delete the fucking cached file
	delete require.cache[require.resolve('../quiz_data.json')];
	data = require("../quiz_data.json");

	var jumpurl = '/actualshow' + set.toString();
	res.redirect(jumpurl);

}

exports.adding = function(set, req, res){
	
	console.log("add called for " + set);
	fs = require('fs');
	var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());
	var new_ques = req.query.new_ques;
	var new_answer = req.query.new_answer;
	// manipulate json file
	m.quizset[set - 1].questions.push(

		{
          'qurl' : 'ques/' + (m.quizset[set - 1].questions.length + 1) + '/' + set,
          "q_text" : new_ques,
          "a_text" : new_answer
        }
		);

	var orig = Number(m.quizset[set - 1].num_question);
	orig += 1;
	m.quizset[set - 1].num_question = orig;

	fs.writeFileSync('quiz_data.json', JSON.stringify(m));
	console.log("JSON wrote back");
	//delete the fucking cached file
	delete require.cache[require.resolve('../quiz_data.json')];
	data = require("../quiz_data.json");

	var jumpurl = '/actualshow' + set.toString();
	res.redirect(jumpurl);

}