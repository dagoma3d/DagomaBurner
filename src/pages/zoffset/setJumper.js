"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var DeviceManager = require(_root+"manager/devices.js");


var ZoffsetSetJumperClass = function ZoffsetSetJumperClass(){
  this.content = null;
}

ZoffsetSetJumperClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/setJumper", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetSetJumperClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("zoffset/printerConnection")
  });
}

ZoffsetSetJumperClass.prototype.dispose = function () {

};

module.exports = ZoffsetSetJumperClass;
