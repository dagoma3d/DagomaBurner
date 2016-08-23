"use strict";

var _root = __dirname + "/../../../";

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

  ViewLoader("firmware/2_setJumper", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetSetJumperClass.prototype.initView = function () {

  var that = this;
  that.content.find("#mks").on("click", function(){
    NavManager.setPage("firmware/3_printerConnection")
    window.boardType = "mega";
  });

  that.content.find("#melzi").on("click", function(){
    NavManager.setPage("firmware/2_setJumper_melzi")
    window.boardType = "melzi";
  });

  $("#navBack").show();
  $("#navBack").on("click", function(){
    NavManager.setPage("firmware/1_preparation")
  });
}

ZoffsetSetJumperClass.prototype.show = function () {

};

ZoffsetSetJumperClass.prototype.dispose = function () {
  $("#mks").off("click");
  $("#melzi").off("click");
  $("#navBack").off("click");
};

module.exports = ZoffsetSetJumperClass;
