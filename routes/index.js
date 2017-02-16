
/*
 * GET home page.
 */

var data = require("../quiz_data.json");

exports.view = function(req, res){
  console.log(data);
  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.render('index', data);
};


exports.login = function(req, res){
  console.log(data);
  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.render('login', data);
};
