"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");

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
  ModalManager.showLoader("Sauvegarde du Z-offset");
  that.printer  = new GCodePrinter();
  that.content.hide();
  GCodeSender.send([
    "M114",
    "M503",
    "G90",
    "G90"],
    false,
    function(response){
      console.log("response", response);
      var currentZ, currentZOffset;
      var regex = /X:(\d+.\d+) Y:(\d+.\d+) Z:(-?\d+.\d+)/.exec(response);
      console.log("regex", regex);
      if(regex && regex.length>=3)
        currentZ = -parseFloat(regex[3]);
      var regex = /M851 Z(-?\d+.\d+)/.exec(response);
      if(regex && regex.length>1)
        currentZOffset = parseFloat(regex[1]);
      console.log(regex);
      var newZOffset = currentZOffset - 0.26 - currentZ;

      console.log("response M114 M503", "currentZ", currentZ, "currentZOffset", currentZOffset, "newZOffset", newZOffset);

      GCodeSender.send([
        "M851 Z"+newZOffset,
        "M500"
      ],
      false,
      function(){
        that.printer.finishPrint(function(){
          ModalManager.hideLoader();
          that.content.show();
          that.content.find("#zOffsetValue").text(newZOffset.toFixed(2));
        });
      })
    });
};

ZoffsetSaveClass.prototype.dispose = function () {
};

module.exports = ZoffsetSaveClass;
