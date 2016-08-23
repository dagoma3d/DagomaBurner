"use strict";

var _root = __dirname + "/../../";
var DeviceManager = require(_root+"manager/devices.js");
var lodash = require("lodash");

var awaitForAck = false;

var GCodeSenderClass = function GCodeSenderClass(){

}

GCodeSenderClass.prototype.stop = function () {
  this.forceStop = true;
};

GCodeSenderClass.prototype.addButtonGCode = function (id, gCodes, showLoader, callback) {
  var that = this;

  $("#diagnostic "+id).click(function(){
    that.send(gCodes, showLoader, callback);
  });
};

GCodeSenderClass.prototype.send = function (gCodes, showLoader, callback) {
  var that = this;

  if(showLoader)
    $("#globalLoader").show();
  that.sendRecursive(lodash.clone(gCodes), function(result){
    if(showLoader)
      $("#globalLoader").hide();
    if(callback)
      callback(result);
  }, "");
};

GCodeSenderClass.prototype.sendRecursive = function (gCodes, callback, result) {
  var that = this;

  if(gCodes.length == 0){
    return callback(result);
  }
  var gCode = gCodes.shift();
  that.sendGcode(gCode, function(response){
    that.sendRecursive(gCodes, callback, result+response);
  });
};

GCodeSenderClass.prototype.sendGcode = function (gCode, callback) {
  var that = this;
  if(that.forceStop){
    that.forceStop = false;
    return;
  }

  DeviceManager.getSelectedDevice().send(gCode+"\r\n");
  that.waitForOK(function(response){
    callback(response);
  });
};



GCodeSenderClass.prototype.waitForOK = function (callback) {
  var that = this;
  var _data = "";

  if(!awaitForAck){
    return setTimeout(function () {
      callback(_data);
    }, 100);
  }

  var dataHandler = function(data){
    _data += data;

    if(data.toLowerCase().indexOf("ok") >= 0){
      DeviceManager.getSelectedDevice().removeListener("receive", dataHandler);
      if(callback){
        return callback(_data);
      }
    }
  };

  DeviceManager.getSelectedDevice().removeListener("receive", dataHandler);
  DeviceManager.getSelectedDevice().on("receive", dataHandler);
};

GCodeSenderClass.instance = null;

GCodeSenderClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new GCodeSenderClass();
    }
    return this.instance;
}

module.exports = GCodeSenderClass.getInstance();
