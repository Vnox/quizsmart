
/*
 * GET home page.
 */

var data = require("../quiz_data.json");

// exports.view_random = function(req, res){
// var ran = Math.random()*1000;
// ran = Math.floor(ran)
// console.log(ran)
// if(ran % 2 == 0){
//   exports.view(req, res)
// }else{
//   exports.view_b(req, res)
// }
// }



exports.view = function(req, res){
  console.log(data);
  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.render('index', data);
};

exports.view_b = function(req, res){
  console.log(data);
  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.render('index_b', data);
};


exports.login = function(req, res){
  console.log(data);
  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.render('login', data);
};


exports.faq = function(req, res){
  console.log(data);
  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.render('faq', data);
};


