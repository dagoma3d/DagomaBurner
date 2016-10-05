"use strict";

var fs = require('fs');
var i18n = require('../../i18n/i18n.js');

module.exports = function loadFile(file, callback){
  var that = this;
  fs.readFile(__dirname + "/../../"+'views/'+file+".html", 'utf8', function (err,data){
    if(err){
      return loadFile(file, callback);
    }
    var template = Handlebars.compile(data);
    var context = i18n.currentLanguage();
    var html = template(context);
    callback(html);
  });
};
