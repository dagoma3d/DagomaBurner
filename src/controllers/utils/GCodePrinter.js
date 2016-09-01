"use strict";

var _root = __dirname + "/../../";
var DeviceManager = require(_root+"manager/devices.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var lodash = require("lodash");

var GCodePrinterClass = function(){
  this.sendExtruderOffset = false;
  this.forceStop = false;
  this.printStart = true;
  this.printEnd = true;
}

GCodePrinterClass.prototype.print = function (datas, printStart, printEnd, offsetX, offsetY, offsetZ, maxDistance, callback){
  var that = this;
  that.device = DeviceManager.getSelectedDevice();
  that.datas = lodash.clone(datas);
  that.offsetX = offsetX;
  that.offsetY = offsetY;
  that.offsetZ = offsetZ;
  that.printStart = printStart;
  that.printEnd = printEnd;
  if(maxDistance)
    that.maxDistance = maxDistance;
  else
    that.maxDistance = null;

  if(that.maxDistance){
    var newDatas = [];
    var lastX = -1, lastY = -1, lastE = -1;
    var currentX = -1, currentY = -1, currentE = -1;
    var deltaX = 0, deltaY = 0, deltaE = 0;
    var distXY = 0, distX = 0, distY = 0, distE = 0;
    var numberDeltaXY = 0;
    var matchX = null, matchY = null, matchE = null;
    var currentLine = null;

    for(var i in that.datas){
      currentLine = that.datas[i];
      matchX = currentLine.match(/X(\d+.?\d*)/i)
      if(matchX) currentX = parseFloat(matchX[1]);

      matchY = currentLine.match(/Y(\d+.?\d*)/i)
      if(matchY) currentY = parseFloat(matchY[1]);

      matchE = currentLine.match(/E(\d+.?\d*)/i)
      if(matchE) currentE = parseFloat(matchE[1]);

      if(lastX > -1 && matchE){ // si on a déjà eu des coordonées de X
        distX = currentX-lastX;
        distY = currentY-lastY;
        distE = currentE-lastE;
        distXY =  Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
        //console.log("distXY", distXY);
        //console.log("distX", distX/that.maxDistance);
        //console.log("distY", distY/that.maxDistance);
        //console.log("numberDeltaXY",numberDeltaXY);
        if(distXY > that.maxDistance){
          numberDeltaXY = Math.ceil(distXY/that.maxDistance);
          //console.log("numberDeltaXY", numberDeltaXY);
          for(var j=1; j<numberDeltaXY; j++){
            var x = (lastX+(j*(distX/numberDeltaXY)));
            var y = (lastY+(j*(distY/numberDeltaXY)));
            var e = (lastE+(j*(distE/numberDeltaXY)));
            newDatas.push("G0 X"+x+" Y"+y+" E"+e+";D");
          }
        }
      }

      lastX = currentX;
      lastY = currentY;
      lastE = currentE;
      newDatas.push(currentLine);
    }
    that.datas = newDatas;
    //console.log("newDatas", newDatas);
    //return;
  }


  that.initPrint(function(){
    that.printDatas(function(){
      if(!that.printEnd){
        if(callback)
            callback();
        return;
      }else{
        that.finishPrint(function(){
          if(callback)
          callback();
        });
      }
    });
  });
};

GCodePrinterClass.prototype.printDatas = function (callback) {
  var that = this;
  if(that.forceStop){
    that.forceStop = false;
    if(this.forceStopCallback)
        this.forceStopCallback();
    return;
  }

  if(that.insertDatas != null){
    GCodeSender.send(that.insertDatas, false, function(result){
      if(that.insertDatasCallback)
        that.insertDatasCallback(result);
      that.printDatas(callback);
    });
    that.insertDatas = null;
  }else{
    if(that.datas.length == 0){
      return callback();
    }
    var gCode = that.datas.shift();
    gCode = that.addOffset(gCode);


    var match = gCode.match(/(F\d+)/i)
    if(match)
      that.currentSpeed = match[0];

    if(!that.sendExtruderOffset){
      var match = gCode.match(/(E\d+.\d+)/i)
      if(match){
        gCode = ["G92 "+match[1], gCode];
        that.sendExtruderOffset = true;
      }else{
        gCode = [gCode];
      }
    }else{
      gCode = [gCode];
    }

    //gCode.push("G90","G90","G90","G90");

    GCodeSender.send(gCode, false, function(){
      that.printDatas(callback);
    });
  }
};

GCodePrinterClass.prototype.addOffset = function (gCode) {
  var that = this;

  function addXOffset(match, p1, offset, string){
    return "X"+(parseFloat(p1)+that.offsetX);
  }
  function addYOffset(match, p1, offset, string){
    return "Y"+(parseFloat(p1)+that.offsetY);
  }
  function addZOffset(match, p1, offset, string){
    return "Z"+(parseFloat(p1)+that.offsetZ);
  }
  gCode = gCode.replace(/X(\d+.\d+)/, addXOffset);
  gCode = gCode.replace(/Y(\d+.\d+)/, addYOffset);
  gCode = gCode.replace(/Z(\d+.\d+)/, addZOffset);
  return gCode;
};

GCodePrinterClass.prototype.stop = function (callback) {
  this.forceStop = true;
  this.forceStopCallback = callback;
};

GCodePrinterClass.prototype.insert = function (aDatas, callback) {
  this.insertDatas = aDatas;
  this.insertDatasCallback = callback;
};

GCodePrinterClass.prototype.initPrint = function (callback) {
  if(!this.printStart){
    return callback();
  }

  GCodeSender.send([
    "G90;",
    "G28 X Y",
    "M106 S160",
    "M109 S180",
    "M104 S215",
    //"M111 S25"
  ],
  false,
  function(){
    ModalManager.setLoaderTitle("Le palpeur vérifie que le plateau est bien droit");
    GCodeSender.send([
      "G28",
      "G29; Detailed Z-Probe",
      "G90; Set to absolute positioning if not",
      "G1 X100 Y200 Z5 F3000",
      "G1 Z0",
      "M82 ;set extruder to absolute mode",
      "G0 F3600.000000 Z0.260",
      "G92 E0 ;zero the extruded length",
      "G1 X190 E20 F1000",
      "G92 E0 ;zero the extruded length again",
      "G1 F60",
      "G90",
      "M106 S127.500000",
    ],false,
    function(){
      callback();
    });
  });
};

GCodePrinterClass.prototype.finishPrint = function (callback) {
  GCodeSender.send([
    "M104 S0     ;extruder heater off",
    "M106 S255     ;start fan full power",
    "M140 S0      ;heated bed heater off (if you have it)",
    "G91        ;relative positioning",
    "G1 E-1 F300  ;retract the filament a bit before lifting the nozzle, to release some of the pressure",
    "G1 Z+3 E-2 F60  ;move Z up a bit and retract filament even more",
    "G28 X0 Y0  ;move X/Y to min endstops, so the head is out of the way;",
    "M84      ;shut down motors",
  ],
  false,
  function(){
    if(callback)
      callback();
    return;
  });
};

module.exports = GCodePrinterClass;
