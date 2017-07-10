var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var bodyParser = require('body-parser');

var index = require('./routes/index');
var addnewquiz = require('./routes/addnewquiz');
var settings = require('./routes/settings');
var schedule = require('./routes/schedule');
var actualshow = require('./routes/actualshow');
var managequestion = require('./routes/managequestion');
var record = require('./routes/record');
// Example route
// var user = require('./routes/user');

var app = express();




// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// only link to index normal view
app.get('/index', index.view);
app.get('/index_a', index.view);
app.get('/index_b', index.view_b);
// app.get('/index_r', index.view_random)
app.get('/', index.view);
app.get('/faq', index.faq);
app.get('/addnewquiz', addnewquiz.showQuizSet);
app.get('/settings', settings.view);
app.get('/schedule1', schedule.view1);
app.get('/schedule2', schedule.view2);
app.get('/schedule3', schedule.view3);
app.get('/schedule4', schedule.view4);
app.get('/schedule5', schedule.view5);

app.get('/actualshow1', actualshow.show1);
app.get('/actualshow2', actualshow.show2);
app.get('/actualshow3', actualshow.show3);
app.get('/actualshow4', actualshow.show4);
app.get('/actualshow5', actualshow.show5);


app.get('/ques/:id/:set', function(req, res){
    console.log( "question is " + req.params.id );
    console.log( "set is " + req.params.set );
    managequestion.show( req.params.set, req.params.id, req, res );
});

app.get('/adding1', function(req, res){
    managequestion.adding( 1, req, res );
});
app.get('/adding2', function(req, res){
    managequestion.adding( 2, req, res );
});
app.get('/adding3', function(req, res){
    managequestion.adding( 3, req, res );
});
app.get('/adding4', function(req, res){
    managequestion.adding( 4, req, res );
});
app.get('/adding5', function(req, res){
    managequestion.adding( 5, req, res );
});



app.get('/send1', function(req, res){
    managequestion.sendmsg( 1, req, res );
});
app.get('/send2', function(req, res){
    managequestion.sendmsg( 2, req, res );
});
app.get('/send3', function(req, res){
    managequestion.sendmsg( 3, req, res );
});
app.get('/send4', function(req, res){
    managequestion.sendmsg( 4, req, res );
});
app.get('/send5', function(req, res){
    managequestion.sendmsg( 5, req, res );
});

app.get('/act1', function(req, res){
    managequestion.act( 1, req, res );
});
app.get('/act2', function(req, res){
    managequestion.act( 2, req, res );
});
app.get('/act3', function(req, res){
    managequestion.act( 3, req, res );
});
app.get('/act4', function(req, res){
    managequestion.act( 4, req, res );
});
app.get('/act5', function(req, res){
    managequestion.act( 5, req, res );
});


app.get('/record', record.view);
app.get('/clear', record.clear);

// Example route
// app.get('/users', user.list);

// Handle both GET and POST requests

app.get('/inbound', function(req, res){
  managequestion.handleParams(req.query, res);
});

app.post('/inbound', function(req, res){
  managequestion.handleParams(req.body, res);
});



app.get('/getdata',function(req, res){
  delete require.cache[require.resolve('./quiz_data.json')];
  var data = require("./quiz_data.json");
  res.writeHead(200, {'Content-Type': 'application/javascript'});
  res.end(JSON.stringify(data));  
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
