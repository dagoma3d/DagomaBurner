"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var CodeBuilder = require(_root+"manager/codeBuilder.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");


var PIDRunClass = function PIDRunClass(){
  this.content = null;
}

PIDRunClass.prototype.load = function (callback) {

  var that = this;
  if(that.content)
    return callback();

  this.deviceReceiveListener = this.deviceReceiveHandler.bind(this);

  ViewLoader("pid/4_PID", function(content){
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

  that.device.on("receive", that.deviceReceiveListener);

  that.content.hide();
  ModalManager.showLoader("L'imprimante teste la chauffe de la buse");
  GCodeSender.send([
    "M106 S255",
    ],
    false,
    function(){
      GCodeSender.send([
        "M303 C8 S200 E0"],
        false,
        function(result){
          var regex, resultKp, resultKi, resultKd;
          regex = /#define  DEFAULT_Kp (\d+\.\d+)/;
          resultKp = +(result.match(regex)[1]);

          regex = /#define  DEFAULT_Ki (\d+\.\d+)/;
          resultKi = +(result.match(regex)[1]);

          regex = /#define  DEFAULT_Kd (\d+\.\d+)/;
          resultKd = +(result.match(regex)[1]);

          console.log("PID Result : ", resultKp, resultKi, resultKd);
          GCodeSender.send([
            "M301 P"+resultKp+" I"+resultKi+" D"+resultKd+"",
            "M500"],
            false,
            function(){
              console.log("Saved");
              ModalManager.hideLoader("L'imprimante teste la chauffe de la buse");

              that.content.find(".kp").text(resultKp)
              that.content.find(".ki").text(resultKi)
              that.content.find(".kd").text(resultKd);
              that.content.show();
            }
          );
        }
      );
    }
  );
};

PIDRunClass.prototype.deviceReceiveHandler = function (message) {
  var regex = /T:(\d+.?\d?)\s\/(\d+.?\d?)\s@:(\d+.?\d?)/
  var result = message.match(regex);
  if(result){
    console.log("match", result);
    var current = +result[1];
    var target = +result[2];
    ModalManager.setProgress((current/200)*100);
  }
};

PIDRunClass.prototype.dispose = function () {
  this.device.removeListener("receive", this.deviceReceiveListener);
};

module.exports = PIDRunClass;
