"use strict";

var fs = require('fs');

module.exports = function loadFile(file, callback){
  var that = this;
  fs.readFile(__dirname + "/../../"+'views/'+file+".html", 'utf8', function (err,data){
    if(err){
      return loadFile(file, callback);
    }
    callback(data);
  });
};
