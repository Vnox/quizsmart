
/*
 * GET home page.
 */

var data = require("../quiz_data.json");

exports.view = function(req, res){
  console.log(data);
  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.render('record', data);
};

exports.clear = function(req, res){
  console.log(data);

  fs = require('fs');
   var m = JSON.parse(fs.readFileSync('quiz_data.json').toString());

   m.log = [];

   fs.writeFileSync('quiz_data.json', JSON.stringify(m));
    console.log("JSON wrote back");

  delete require.cache[require.resolve('../quiz_data.json')];
  data = require("../quiz_data.json");
  res.redirect('back');
};
