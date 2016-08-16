"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");

var ZoffsetTestPrintingClass = function ZoffsetTestPrintingClass(){
  this.content = null;
}

ZoffsetTestPrintingClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/7_TestPrinting", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetTestPrintingClass.prototype.initView = function () {
  var that = this;

  that.content.find("#next").on("click", function(){
    ModalManager.showLoader("L'impression s'arrête");
    that.printer.stop(function(){
      ModalManager.hideLoader();
      NavManager.setPage("zoffset/8_Save");
    });
  });

  that.moveEnabled = true;

  that.content.mouseup(function(){
    clearTimeout(that.pressTimer);
    clearInterval(that.pressInterval);
    return false;
  });

  that.addButton("#zOffsetDown", function(){
    if(that.printer)
      that.printer.insert(["G91", "G0 Z0.1", "G90"]);
  });
  that.addButton("#zOffsetUp", function(){
    if(that.printer)
      that.printer.insert(["G91", "G0 Z-0.1", "G90"]);
  });
  that.addButton("#zOffsetOk", function(){
    that.content.find("#next").show();
    that.content.addClass("ready");
  });
};


ZoffsetTestPrintingClass.prototype.addButton = function (button, callback) {
  var that = this;

  that.content.find(button).mousedown(function(){
    that.pressTimer = window.setTimeout(function() {
      that.pressInterval = window.setInterval(function() {
        callback();
      },200);
    },500);
    if(that.moveEnabled){
      callback();
      that.moveEnabled = false;
      window.setTimeout(function() {
        that.moveEnabled = true;
      },500);
    }
    return false;
  });
};

ZoffsetTestPrintingClass.prototype.show = function () {
  var that = this;
  that.numberRound = 0;
  that.content.find("#next").hide();

  GCodeParser(_root+"/pastille.g", function(datas){
    that.roundDatas = datas;
    ModalManager.showLoader("L'imprimante chauffe");
    that.printer  = new GCodePrinter();
    that.printer.initPrint(function(){
      ModalManager.hideLoader();
      that.printRecursive();
    });
  });
}

ZoffsetTestPrintingClass.prototype.printRecursive = function () {
  var that = this;
  that.numberRound++;
  that.printer.print(that.roundDatas, false, false, (that.numberRound%6)*50, ((that.numberRound-that.numberRound%6)/6)*50, 0, 0.5, function(){
    that.printRecursive();
  });
};

ZoffsetTestPrintingClass.prototype.dispose = function () {

};

module.exports = ZoffsetTestPrintingClass;
