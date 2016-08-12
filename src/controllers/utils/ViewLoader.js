"use strict";

var root = __dirname + "/../../";
var fs = require('fs');

module.exports = function(file, callback){
  fs.readFile(root+'views/'+file+".html", 'utf8', function (err,data){
    callback(data);
  });
};
