"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var config = require(_root+"config.json");
var ModalManager = require(_root+"manager/modalManager.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");
var I18n = require(_root+"i18n/i18n.js");

var ZoffsetPlaceTargetClass = function ZoffsetPlaceTargetClass(){
  this.content = null;
}

ZoffsetPlaceTargetClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/4_placeTarget", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetPlaceTargetClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("zoffset/5_moveNozzle")
  });

  $("#navBack").show();
};

ZoffsetPlaceTargetClass.prototype.show = function () {
  var that = this;

  that.content.hide();

  ModalManager.showLoader(I18n.currentLanguage().z_offset_print_moving);
  GCodeSender.send([
    "M851 Z-10",//config.initialZOffset //Not -4 but -10 for the new V2],
    "G28",
    "G91",
    "G0 Z5"],
    false,
    function(){
      that.content.show();
      ModalManager.hideLoader();
    });

};


ZoffsetPlaceTargetClass.prototype.dispose = function () {
};

module.exports = ZoffsetPlaceTargetClass;
