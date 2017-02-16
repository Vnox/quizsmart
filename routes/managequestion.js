delete require.cache[require.resolve('../quiz_data.json')];
var data = require("../quiz_data.json");



exports.show = function(set, num, req, res) {

    console.log("show called");
    var index = Number(num);
    console.log("This is question " + index + " in set " + set);
    fs = require('fs');
    var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());

    // manipulate json file
    m.quizset[set - 1].questions.splice(index - 1, 1);
    for (var i = index - 1; i < m.quizset[set - 1].questions.length; i++) {
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

exports.adding = function(set, req, res) {

    console.log("add called for " + set);
    fs = require('fs');
    var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());
    var new_ques = req.query.new_ques;
    var new_answer = req.query.new_answer;
    // manipulate json file
    m.quizset[set - 1].questions.push(

        {
            'qurl': 'ques/' + (m.quizset[set - 1].questions.length + 1) + '/' + set,
            "q_text": new_ques,
            "a_text": new_answer
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


exports.changedate = function(req, res) {
    console.log('change date called');

}

exports.sendmsg = function(set, req, res) {

    //preparing quiz to send 
    fs = require('fs');
    var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());
    var quiz_to_send = ''
    if(m.quizset[set - 1].questions.length === 0){
    	quiz_to_send = ' There\'s no question in this set dude. Switch to another one. Reply whatever to continue : ( '
    }else if(m.quizset[set - 1].questions.length !== 0){
    	var ran = Math.floor((Math.random() * m.quizset[set - 1].questions.length));
    	var quiz_to_send = m.quizset[set - 1].questions[ran].q_text;
    	m.current_answer = m.quizset[set - 1].questions[ran].a_text;
    	m.user_phone = req.query.new_phone;
    	m.current_question = quiz_to_send;
    }
    
    //console.log("question " + ran + "sent");

    fs.writeFileSync('quiz_data.json', JSON.stringify(m));

    console.log('Sending Msg');
    var https = require('https');

    console.log(req.query.new_phone)
    var phone_number = req.query.new_phone;

    quiz_to_send = "[ QuizSmart ] Ding Ding Ding Ding Ding, It\'s quiz time ! Here is a question for you : " + quiz_to_send;

    var data = JSON.stringify({
        api_key: '8f91433f',
        api_secret: 'a448a3c3e2c5ea0b',
        to: req.query.new_phone,
        from: '12034089845',
        text: quiz_to_send
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
    req.on('response', function(res) {
        res.on('data', function(chunk) {
            responseData += chunk;
        });

        res.on('end', function() {
            console.log(JSON.parse(responseData));
        });
    });

    res.redirect('back');


}


exports.handleParams = function(params, res) {


    delete require.cache[require.resolve('../quiz_data.json')];
    var data = require("../quiz_data.json");

    res.status(200);
    if (!params.to || !params.msisdn) {
        console.log('This is not a valid inbound SMS message!');
    } else {
        console.log('Success');
        var incomingData = {
            messageId: params.messageId,
            from: params.msisdn,
            text: params.text,
            type: params.type,
            timestamp: params['message-timestamp']
        };

        console.log("Just received new message saying : " + incomingData.text);
        fs = require('fs');
        var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());
        var correct_answer = m.current_answer;
        var question = m.current_question;
        var phone_num = m.user_phone;

        res.send(incomingData.text);
        // processing text here 

        if (correct_answer == 'no_question') {
            console.log("No Question")
            var https = require('https');

            var data = JSON.stringify({
                api_key: '8f91433f',
                api_secret: 'a448a3c3e2c5ea0b',
                to: phone_num,
                from: '12034089845',
                text: ' [ QuizSmart ] There is no question to be responded :( '
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

        } else if (incomingData.text == correct_answer) {

            console.log("Correct Answer Got")
            var https = require('https');

            var data = JSON.stringify({
                api_key: '8f91433f',
                api_secret: 'a448a3c3e2c5ea0b',
                to: phone_num,
                from: '12034089845',
                text: ' [ QuizSmart ] Great Job. Your answer is correct. I\'ve logged that : )'
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


            m.log.push({
                'q': question,
                'a': m.current_answer,
                'res': 'Your answer was correct.'

            });

            m.current_answer = 'no_question';
            fs.writeFileSync('quiz_data.json', JSON.stringify(m));
        } else if (incomingData.text != correct_answer) {

            console.log("Correct Answer Got")
            var https = require('https');

            var data = JSON.stringify({
                api_key: '8f91433f',
                api_secret: 'a448a3c3e2c5ea0b',
                to: phone_num,
                from: '12034089845',
                text: ' [ QuizSmart ] Dude, your answer is wrong. The correct answer is [ ' + correct_answer + ' ]. I\'ve logged that. Please study harder !'
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

            m.log.push({
                'q': question,
                'a': m.current_answer,
                'res': 'Your answer was [ ' + incomingData.text + ' ]. Which was incorrect.'

            });

            m.current_answer = 'no_question';

            fs.writeFileSync('quiz_data.json', JSON.stringify(m));
        }




    }
    res.status(200).end();
}


exports.act = function(set, req, res) {


    fs = require('fs');
    var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());

    if (m.quizset[set - 1].status == 'active') {
        m.quizset[set - 1].status = null;
    } else {
        m.quizset[set - 1].status = 'active';
    }

    fs.writeFileSync('quiz_data.json', JSON.stringify(m));
    console.log("JSON wrote back");

    //delete the fucking cached file
    delete require.cache[require.resolve('../quiz_data.json')];
    data = require("../quiz_data.json");


    res.redirect('back');




}