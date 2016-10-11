"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");
var I18n = require(_root+"i18n/i18n.js");

var ZoffsetSaveClass = function ZoffsetSaveClass(){
  this.content = null;
}

ZoffsetSaveClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/8_Save", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetSaveClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("home");
  });
};

ZoffsetSaveClass.prototype.show = function () {
  var that = this;

  ModalManager.showLoader(I18n.currentLanguage().z_offset_printing_saving);
  that.content.hide();

  that.content.find("#zOffsetValue").text(window.zoffset.toFixed(2));

  GCodeSender.send([
    "M851 Z"+window.zoffset.toFixed(2),
    "M500"
  ],
  false,
  function(){
    ModalManager.hideLoader();
    that.content.show();
  })
};

ZoffsetSaveClass.prototype.dispose = function () {
};

module.exports = ZoffsetSaveClass;
