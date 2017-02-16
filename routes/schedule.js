
/*
 * GET home page.
 */
var data = require("../quiz_data.json");

exports.view1 = function(req, res){
  res.render('schedule', data.quizset[0]);
};

exports.view2 = function(req, res){
  res.render('schedule', data.quizset[1]);
};

exports.view3 = function(req, res){
  res.render('schedule' , data.quizset[2]);
};

exports.view4 = function(req, res){
  res.render('schedule', data.quizset[3]);
};

exports.view5 = function(req, res){
  res.render('schedule', data.quizset[4]);
};

