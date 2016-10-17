"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var lodash = require("lodash");
var DeviceManager = require(_root+"manager/devices.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");

var DiagnosticPageClass = function DiagnosticPageClass(){
  this.content = null;

  this.dataListener = this.dataHandler.bind(this);
}

DiagnosticPageClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("diagnostic", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

DiagnosticPageClass.prototype.initView = function () {

};

DiagnosticPageClass.prototype.show = function () {
  var that = this;

  $('ul.tabs').tabs();

  that.content.find("form").submit(function(e){
    e.preventDefault();

    GCodeSender.send([that.content.find("#gcode").val()], false);
    that.content.find("#gcode").val("");
  })

  $("#navbar").css("background-color", "#f44336");
  $("#navbar h1").text("Dagom'App Expert Mode");
  that.content.find("#console").empty();

  that.needToGoUp = true;

  DeviceManager.on("printerFound", function(device){
    GCodeSender.send(["M105"], false, function(response){
      console.log("M105", response);
    });
  })

  $('.modal-trigger').leanModal();

  GCodeSender.addButtonGCode("#home", ["G28"], true);

  GCodeSender.addButtonGCode("#zp01", ["G91", "G0 Z0.1"], false);
  GCodeSender.addButtonGCode("#zp1", ["G91", "G0 Z1"], false);
  GCodeSender.addButtonGCode("#zp10", ["G91", "G0 Z10"], false);
  GCodeSender.addButtonGCode("#zm01", ["G91", "G0 Z-0.1"], false);
  GCodeSender.addButtonGCode("#zm1", ["G91", "G0 Z-1"], false);
  GCodeSender.addButtonGCode("#zm10", ["G91", "G0 Z-10"], false);
  GCodeSender.addButtonGCode("#stopMotors", ["M18"], false);


  $("#diagnostic .speedControl a").click(function(){
    $("#diagnostic .speedControl a").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#diagnostic .btnPosition").click(function(){
    var gcode = "G0 ";
    switch ($(this)[0].id) {
      case "xp":
        gcode += "X";
        break;
      case "xm":
        gcode += "X-";
        break;
      case "yp":
        gcode += "Y";
        break;
      case "ym":
        gcode += "Y-";
        break;
      case "zp":
        gcode += "Z";
        break;
      case "zm":
        gcode += "Z-";
        break;
    }

    gcode += $("#diagnostic .speedControl .selected").text();
    gcode += " F6000";

    GCodeSender.send(["G91", gcode], false);
  });

  DeviceManager.getSelectedDevice().on("receive", this.dataListener);
};

DiagnosticPageClass.prototype.dataHandler = function(data){
  var consoleDiv = this.content.find("#console")
  consoleDiv.append(data+"<br/>");
  consoleDiv[0].scrollTop = consoleDiv[0].scrollHeight;
};

DiagnosticPageClass.prototype.dispose = function () {
  if(DeviceManager.getSelectedDevice())
    DeviceManager.getSelectedDevice().removeListener("receive", this.dataListener);
  $("#navbar").css("background-color", "#e19531");
  $("#navbar h1").text("Dagom'App");
};

module.exports = DiagnosticPageClass;
