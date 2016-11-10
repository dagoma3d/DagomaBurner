"use strict";

var fs = require('fs');
var i18n = require('../../i18n/i18n.js');

module.exports = function loadFile(file, callback){
  //console.log("loadFile",file);
  var that = this;
  var data = fs.readFileSync(__dirname + "/../../"+'views/'+file+".html", 'utf8')
  //console.log("file readed");
  var template = Handlebars.compile(data);
  //console.log("file compiled");
  var context = i18n.currentLanguage();
  var html = template(context);
  //console.log("file i18n done");
  callback(html);
};
