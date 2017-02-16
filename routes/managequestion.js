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


exports.changedate = function(req, res){
	console.log('change date called');

}

exports.sendmsg = function(req, res){

	console.log('Sending Msg');
	var https = require('https');

	console.log(req.query.new_phone)
	var phone_number = req.query.new_phone;

	var data = JSON.stringify({
 		api_key: '8f91433f',
 		api_secret: 'a448a3c3e2c5ea0b',
 		to: req.query.new_phone ,
 		from: '12034089845',
 		text: 'Hello from quizsmart, It\'s time to take your quiz now : )'
	});

	var options = {
 	host: 'rest.nexmo.com',
 	path: '/sms/json',
 	port: 443,
 	method: 'POST',
 	headers: {
   'Content-Type': 'application/json',
   'Content-Length': Buffer.byteLength(data)
 	}
	};

	var req = https.request(options);

	req.write(data);
	req.end();

	var responseData = '';
	req.on('response', function(res){
 	res.on('data', function(chunk){
   	responseData += chunk;
 	});

 	res.on('end', function(){
   	console.log(JSON.parse(responseData));
 	});
});
}


exports.handleParams = function (params, res) {
  res.status(200);
  if (!params.to || !params.msisdn) {
    console.log('This is not a valid inbound SMS message!');
  } else {
    console.log('Success');
    let incomingData = {
      messageId: params.messageId,
      from: params.msisdn,
      text: params.text,
      type: params.type,
      timestamp: params['message-timestamp']
    };
    console.log("Just received new message saying : " + incomingData.text);
    //fs = require('fs');
  	// var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());
  	// m.quizset.push({"log" : "new-msg received"});
  	// fs.writeFileSync('quiz_data.json', JSON.stringify(m));
    res.send(incomingData.text);
    // processing text here 
    if(incomingData.text == "Shuo"){
    	console.log("Shuo just send me text")
    	var https = require('https');

	var data = JSON.stringify({
 		api_key: '8f91433f',
 		api_secret: 'a448a3c3e2c5ea0b',
 		to: '18586991088',
 		from: '12034089845',
 		text: 'Hello Shuo, This is a greeting from QuizSmart. I know you, you are Leon\'s friend.'
	});

	var options = {
 	host: 'rest.nexmo.com',
 	path: '/sms/json',
 	port: 443,
 	method: 'POST',
 	headers: {
   'Content-Type': 'application/json',
   'Content-Length': Buffer.byteLength(data)
 	}
	};

	var req = https.request(options);

	req.write(data);
	req.end();
    }






  }
  res.status(200).end();
}





