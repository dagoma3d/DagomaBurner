"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var CodeBuilder = require(_root+"manager/codeBuilder.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");
var I18n = require(_root+"i18n/i18n.js");

var PIDRunClass = function PIDRunClass(){
  this.content = null;
}

PIDRunClass.prototype.load = function (callback) {

  var that = this;
  if(that.content)
    return callback();

  ViewLoader("reset/4_reset", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

PIDRunClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("home");
  });
};

PIDRunClass.prototype.show = function () {
  var that = this;

  that.device = DeviceManager.selectedDevice;

  that.content.hide();
  ModalManager.showLoader();
  GCodeSender.send([
    "M502",
    "M500"],
    false,
    function(result){
      console.log("result M502/M500", result);
      that.content.show();
      ModalManager.hideLoader();
    }
  );
};

PIDRunClass.prototype.dispose = function () {

};

module.exports = PIDRunClass;
