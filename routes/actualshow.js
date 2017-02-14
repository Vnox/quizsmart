

var data = require("../quiz_data.json");
var express = require('express')
var app = express()

exports.show1 = function(req, res){
  console.log("Actual show 1 called");
  res.render('addnewquiz', data.quizset[0]);
};

exports.show2 = function(req, res){
  console.log("Actual show 2 called");
  res.render('addnewquiz', data.quizset[1]);
};

exports.show3 = function(req, res){
  console.log("Actual show 3 called");
  res.render('addnewquiz', data.quizset[2]);
};

exports.show4 = function(req, res){
  console.log("Actual show 4 called");
  res.render('addnewquiz', data.quizset[3]);
};

exports.show5 = function(req, res){
  console.log("Actual show 5 called");
  res.render('addnewquiz', data.quizset[4]);
};

