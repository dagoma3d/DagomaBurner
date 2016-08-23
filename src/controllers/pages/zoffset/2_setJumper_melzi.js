"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var DeviceManager = require(_root+"manager/devices.js");


var ZoffsetSetJumperMelziClass = function ZoffsetSetJumperMelziClass(){
  this.content = null;
}

ZoffsetSetJumperMelziClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/2_setJumper_melzi", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetSetJumperMelziClass.prototype.initView = function () {

  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("zoffset/3_printerConnection")
  });

  $("#navBack").show();
  $("#navBack").on("click", function(){
    NavManager.setPage("zoffset/2_setJumper")
  });
}

ZoffsetSetJumperMelziClass.prototype.show = function () {

};

ZoffsetSetJumperMelziClass.prototype.dispose = function () {
  $("#navBack").off("click");
};

module.exports = ZoffsetSetJumperMelziClass;
