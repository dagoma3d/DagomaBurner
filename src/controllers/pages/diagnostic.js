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

  $('.modal-trigger').leanModal();

  GCodeSender.addButtonGCode("#home", ["G28"], true);

  GCodeSender.addButtonGCode("#zp01", ["G91", "G0 Z0.1"], false);
  GCodeSender.addButtonGCode("#zp1", ["G91", "G0 Z1"], false);
  GCodeSender.addButtonGCode("#zp10", ["G91", "G0 Z10"], false);
  GCodeSender.addButtonGCode("#zm01", ["G91", "G0 Z-0.1"], false);
  GCodeSender.addButtonGCode("#zm1", ["G91", "G0 Z-1"], false);
  GCodeSender.addButtonGCode("#zm10", ["G91", "G0 Z-10"], false);
  GCodeSender.addButtonGCode("#stopMotors", ["M18"], false);

  GCodeSender.addButtonGCode("#off", ["M104 S0"], false);

  $("#diagnostic #set").click(function(){
    GCodeSender.send(["M104 S"+$("#diagnostic #temperature").val()], false);
  });

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

  this.setupGraph();
  this.getTemperature();
};

DiagnosticPageClass.prototype.getTemperature = function () {
  var that = this;
  GCodeSender.send(["M105"], false, function(response){
    var regex = /T:(\d+\.\d) \/(\d+\.\d)/.exec(response);
    if(regex && regex.length>=3){
      that.currentLine.x.push(++that.currentIndex);
      that.currentLine.y.push(parseFloat(regex[1]));
      that.targetLine.x.push(that.currentIndex);
      that.targetLine.y.push(parseFloat(regex[2]));

      if(that.currentIndex > 30){
        that.currentLine.x.shift();
        that.currentLine.y.shift();
        that.targetLine.x.shift();
        that.targetLine.y.shift();
      }

      that.updateGraph();
    }


    that.timeout = setTimeout(function(){
      that.getTemperature();
    }, 1000);
  });
}

DiagnosticPageClass.prototype.setupGraph = function () {
  this.currentIndex = 1;
  this.currentLine = {
    x: [1],
    y: [0],
    name: 'E0',
    type: 'scatter',
    line: {
      dash: 'solid',
      color: 'blue',
      width: 2
    }
  };

  this.targetLine = {
    x: [1],
    y: [0],
    mode: 'lines',
    name: 'target',
    line: {
      dash: 'dot',
      color: 'black',
      width: 2
    }
  };

  this.updateGraph();
};

DiagnosticPageClass.prototype.updateGraph = function () {
  var data = [this.currentLine, this.targetLine];
  Plotly.newPlot('graph', data, {margin: {t:0, b:0, l:40, r:0}, showlegend:false}, {displayModeBar:false});
};

DiagnosticPageClass.prototype.dataHandler = function(data){
  var consoleDiv = this.content.find("#console")
  consoleDiv.append(data+"<br/>");
  consoleDiv[0].scrollTop = consoleDiv[0].scrollHeight;
};

DiagnosticPageClass.prototype.dispose = function () {
  clearTimeout(this.timeout);
  if(DeviceManager.getSelectedDevice())
    DeviceManager.getSelectedDevice().removeListener("receive", this.dataListener);
  $("#navbar").css("background-color", "#e19531");
  $("#navbar h1").text("Dagom'App");
};

module.exports = DiagnosticPageClass;
