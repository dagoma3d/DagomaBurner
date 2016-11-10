"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var lodash = require("lodash");
var DeviceManager = require(_root+"manager/devices.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");

const {remote} = require('electron');


var SavAdminPageClass = function SavAdminPageClass(){
  this.content = null;

  this.dataListener = this.dataHandler.bind(this);
  this.writeListener = this.writeHandler.bind(this);
  this.resizeListener = this.resizeHandler.bind(this);
  this.deleteListener = this.deleteHandler.bind(this);
}

SavAdminPageClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("sav/savAdmin", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

SavAdminPageClass.prototype.initView = function () {

};

SavAdminPageClass.prototype.show = function () {
  var that = this;
  var win = remote.getCurrentWindow();
  that.currentBounds = win.getBounds();
  window.currentBounds = that.currentBounds;
  win.setResizable(true);

  $( window ).on("resize", that.resizeListener);

  $('ul.tabs').tabs();

  if(DeviceManager.getSelectedDevice().type != "p2p"){
    that.content.find("video").hide();
  }else{

    that.content.find("video").on("click", function(e){
      DeviceManager.getSelectedDevice().sendClick(e.offsetX, e.offsetY);
    });

    that.content.find("#videoEnable").change(function(){
      if(that.content.find("#videoEnable").is(':checked')){
        that.content.find("video").show();
      }else{
        that.content.find("video").hide();
      }
    });

    console.log(DeviceManager.getSelectedDevice().stream);
    if(DeviceManager.getSelectedDevice().stream != null){
      document.querySelector('video').src = URL.createObjectURL(DeviceManager.getSelectedDevice().stream)
    }else{
      DeviceManager.getSelectedDevice().on("getStream", function(){
        document.querySelector('video').src = URL.createObjectURL(DeviceManager.getSelectedDevice().stream)
      })
    }
  }

  that.content.find("form#gcodeForm").submit(function(e){
    e.preventDefault();

    GCodeSender.send([that.content.find("#gcode").val()], false);
    that.content.find("#gcode").val("");
  })

  that.content.find("form#portComForm").submit(function(e){
    e.preventDefault();
    console.log("coucou");

    try{
      DeviceManager.getSelectedDevice().connectToPort(that.content.find("#portCom").val());
    }catch(e){
      console.log(e);
    }
  })

  $("#navbar").css("background-color", "#1e88e5");
  $("#navbar h1").text("Dagom'App SAV Mode");
  that.content.find("#console").empty();

  that.needToGoUp = true;

  $('.modal-trigger').leanModal();

  GCodeSender.addButtonGCode("#ResetConfig", ["M502", "M500"], false);

  GCodeSender.addButtonGCode("#homeXY", ["G28 X Y"], false);
  GCodeSender.addButtonGCode("#home", ["G28"], false);

  GCodeSender.addButtonGCode("#stopMotors", ["M18"], false);

  GCodeSender.addButtonGCode("#off", ["M104 S0"], false);

  that.content.find("#ResetPort").click(function(){
    console.log("reset");
    DeviceManager.getSelectedDevice().resetPort();
  })

  that.content.find("#pid .preloader-wrapper").hide();
  that.content.find("#pid").click(function(){
    clearTimeout(that.timeout);
    that.content.find("#pid .preloader-wrapper").show();

    GCodeSender.send([
      "G28",
      "G90",
      "G0 Z50 F4000"],
      false,
      function(){
        GCodeSender.sendAndWaitSpecial([
          "M303 C8 S210 E0"],
          "PID Autotune", false, function(){
            GCodeSender.waitForSpecial("PID Autotune", function(result){
              console.log("result PID", result);
              if(result.indexOf("PID Autotune failed") >= 0){
                ModalManager.alert(I18n.currentLanguage().pid_error_title, I18n.currentLanguage().pid_error_description);
                that.content.find("#pid .preloader-wrapper").hide();
                return;
              }

              try{
                result = result.split("Classic PID");
                result = result[result.length-1];
                console.log("classiPID : ", result);

                var regex, resultKp, resultKi, resultKd;
                regex = /Kp: (\d+\.\d+)/;
                resultKp = +(result.match(regex)[1]);

                regex = /Ki: (\d+\.\d+)/;
                resultKi = +(result.match(regex)[1]);

                regex = /Kd: (\d+\.\d+)/;
                resultKd = +(result.match(regex)[1]);

                console.log("PID Result : ", resultKp, resultKi, resultKd);
                GCodeSender.send([
                  "M301 P"+resultKp+" I"+resultKi+" D"+resultKd+"",
                  "M500"],
                  false,
                  function(){
                    ModalManager.alert("PID Result", "PID Autotune set to : KP="+resultKp+" KI="+resultKi+" KD="+resultKd);
                    that.content.find("#pid .preloader-wrapper").hide();
                  }
                );
              }catch(e){
                console.error(e);
                ModalManager.alert(I18n.currentLanguage().pid_error_title, I18n.currentLanguage().pid_error_description);
                that.content.find("#pid .preloader-wrapper").hide();
              }

              that.getTemperature();
            });
          })
      }
    );
  });

  that.content.find("#set").click(function(){
    GCodeSender.send(["M104 S"+that.content.find("#temperature").val()], false);
  });

  that.content.find(".speedControl a").click(function(){
    that.content.find(".speedControl a").removeClass("selected");
    $(this).addClass("selected");
  });

  that.content.find(".btnPosition").click(function(){
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

    gcode += that.content.find(".speedControl .selected").text();
    gcode += " F6000";

    GCodeSender.send(["G91", gcode], false);
  });

  DeviceManager.getSelectedDevice().on("receive", this.dataListener);
  DeviceManager.getSelectedDevice().on("write", this.writeListener);
  DeviceManager.getSelectedDevice().on("delete", this.deleteListener);

  that.content.find("#autoUpdate").change(function(){
    that.getTemperature();
  });

  try{
    DeviceManager.getSelectedDevice().getPortList();
  }catch(e){}

  this.setupGraph();
  this.getTemperature();
};

SavAdminPageClass.prototype.getTemperature = function () {
  var that = this;
  if(that.content.find("#autoUpdate").is(':checked')){
    GCodeSender.send(["M105"], false, function(response){
        that.timeout = setTimeout(function(){
          that.getTemperature();
        }, 1000);
    });
  }
}

SavAdminPageClass.prototype.addTemperatureInGraph = function (response) {
  var that = this;
  var regex = /T:(\d+\.\d) \/(\d+\.\d)/.exec(response);
  if(regex && regex.length>=3){
    that.currentLine.x.push(++that.currentIndex);
    that.currentLine.y.push(parseFloat(regex[1]));
    that.targetLine.x.push(that.currentIndex);
    that.targetLine.y.push(parseFloat(regex[2]));
    /*
    if(that.currentIndex > 30){
      that.currentLine.x.shift();
      that.currentLine.y.shift();
      that.targetLine.x.shift();
      that.targetLine.y.shift();
    }
*/
    that.updateGraph();
  }else{
    var regex = /T:(\d+\.\d)/.exec(response);
    if(regex && regex.length>=2){
      that.currentLine.x.push(++that.currentIndex);
      that.currentLine.y.push(parseFloat(regex[1]));
      that.targetLine.x.push(that.currentIndex);
      that.targetLine.y.push(parseFloat(regex[2]));

      that.updateGraph();
    }
  }

};

SavAdminPageClass.prototype.setupGraph = function () {
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

SavAdminPageClass.prototype.updateGraph = function () {
  var data = [this.currentLine, this.targetLine];
  Plotly.newPlot('graph', data, {margin: {t:0, b:0, l:40, r:0}, showlegend:false}, {displayModeBar:false});
};

SavAdminPageClass.prototype.dataHandler = function(data){
  this.addTemperatureInGraph(data);

  var consoleDiv = this.content.find("#console")
  consoleDiv.append(data+"<br/>");
  console.log(this.content.find("#autoScroll").is(':checked'));
  if(this.content.find("#autoScroll").is(':checked'))
    consoleDiv[0].scrollTop = consoleDiv[0].scrollHeight;
}

SavAdminPageClass.prototype.deleteHandler = function(){
  NavManager.setPage("sav/savAdminConnection");
  alert("Déconnexion");
}


SavAdminPageClass.prototype.writeHandler = function(data){
  if(this.content.find("#debugCom").is(':checked') == false)
    return;

  var consoleDiv = this.content.find("#console")
  consoleDiv.append("<span class=\"blue-text\">"+data+"</span><br/>");
  if(this.content.find("#autoScroll").is(':checked'))
    consoleDiv[0].scrollTop = consoleDiv[0].scrollHeight;
}

SavAdminPageClass.prototype.resizeHandler = function(data){
  this.updateGraph();
}

SavAdminPageClass.prototype.dispose = function () {
  clearTimeout(this.timeout);
  if(DeviceManager.getSelectedDevice()){
    DeviceManager.getSelectedDevice().removeListener("receive", this.dataListener);
    DeviceManager.getSelectedDevice().removeListener("write", this.writeListener);
  }
  $("#navbar").css("background-color", "#e19531");
  $("#navbar h1").text("Dagom'App");

  var win = remote.getCurrentWindow();
  win.setBounds(window.currentBounds);
  win.setResizable(false);
  $( window ).off("resize", this.resizeListener);

  if(DeviceManager.getSelectedDevice().type == "p2p"){
    DeviceManager.getSelectedDevice().close();
    DeviceManager.setSelectedDevice(null);
  }
};

module.exports = SavAdminPageClass;
