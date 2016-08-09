"use strict";

var _root = __dirname + "/../../";
var DeviceManager = require(_root+"manager/devices.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var lodash = require("lodash");

var GCodePrinterClass = function(){}

GCodePrinterClass.prototype.print = function (datas, printStart, printEnd, offsetX, offsetY, offsetZ, callback){
  var that = this;
  that.device = DeviceManager.getSelectedDevice();
  that.datas = lodash.clone(datas);
  that.offsetX = offsetX;
  that.offsetY = offsetY;
  that.offsetZ = offsetZ;
  that.absoluteMode = true;
  that.printStart = printStart;
  that.printEnd = printEnd;
  that.sendExtruderOffset = false;

  that.initPrint(function(){
    //Donner les offsets que si on est en G90 et pas en G91
    //Mettre un G92 E{value} avant la premiere ligne d'extrusion du gcode
    that.printDatas(function(){
      that.finishPrint(function(){
        if(callback)
          callback();
      });
    });
  });
};

GCodePrinterClass.prototype.printDatas = function (callback) {
  var that = this;
   if(that.insertDatas != null){
     GCodeSender.send(that.insertDatas, false, function(){
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

GCodePrinterClass.prototype.insert = function (aDatas) {
  this.insertDatas = aDatas;
};

GCodePrinterClass.prototype.initPrint = function (callback) {
  if(!this.printStart){
    return callback();
  }

  GCodeSender.send([
    "G28 X Y",
    "M106 S160",
    "M109 S180",
    "M104 S215",
    "G28",
    "G29; Detailed Z-Probe",
    "G90; Set to absolute positioning if not",
    "G1 X100 Y200 Z5 F3000",
    "G1 Z0",
    "M82 ;set extruder to absolute mode",
    "G92 E0 ;zero the extruded length",
    "G1 F200 E3 ;extrude 10mm of feed stock",
    "G92 E0 ;zero the extruded length again",
    "G1 F60",
    "G1 Y190",
    "G90",
    "M106 S127.500000",
    "G0 F3600.000000 Z0.260",
    //"M111 S25"
  ],
  false,
  function(){
    callback();
  });
};

GCodePrinterClass.prototype.finishPrint = function (callback) {
  if(!this.printEnd){
    return callback();
  }

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
    callback();
  });
};

GCodePrinterClass.instance = null;

GCodePrinterClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new GCodePrinterClass();
    }
    return this.instance;
}

module.exports = GCodePrinterClass.getInstance();
