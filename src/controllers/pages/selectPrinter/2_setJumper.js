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

  ViewLoader("selectPrinter/2_setJumper", function(content){
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
    NavManager.setPage("selectPrinter/3_printerConnection")
  });

  $("#navBack").show();
}

ZoffsetSetJumperMelziClass.prototype.show = function () {

};

ZoffsetSetJumperMelziClass.prototype.dispose = function () {
};

module.exports = ZoffsetSetJumperMelziClass;
