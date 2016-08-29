"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var CodeBuilder = require(_root+"manager/codeBuilder.js");
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

  ViewLoader("pid/4_PID", function(content){
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
  GCodeSender.send([
    "M303 C8 S200 E0"],
    false,
    function(result){
      var regex, resultKp, resultKi, resultKd;
      regex = /Kp: (\d+.\d+.)/;
      resultKp = result.match(regex)[1];

      regex = /Ki: (\d+.\d+.)/;
      resultKi = result.match(regex)[1];

      regex = /Kd: (\d+.\d+.)/;
      resultKd = result.match(regex)[1];

      console.log("PID Result : ", resultKp, resultKi, resultKd);
      GCodeSender.send([
        "M301 P"+resultKp+" I"+resultKi+" D"+resultKd+"",
        "M500"],
        false,
        function(){
          console.log("Saved")
        }
      );
    }
  );
};

ZoffsetSaveClass.prototype.dispose = function () {
};

module.exports = ZoffsetSaveClass;
