var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var addnewquiz = require('./routes/addnewquiz');
var settings = require('./routes/settings');
var schedule = require('./routes/schedule');
var actualshow = require('./routes/actualshow');
var managequestion = require('./routes/managequestion');
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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/index', index.view);
app.get('/', index.view);
app.get('/addnewquiz', addnewquiz.showQuizSet);
app.get('/settings', settings.view);
app.get('/schedule', schedule.view);
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

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
