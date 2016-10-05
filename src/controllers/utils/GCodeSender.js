"use strict";

var _root = __dirname + "/../../";
var DeviceManager = require(_root+"manager/devices.js");
var lodash = require("lodash");

var awaitForAck = true;

var defaultWaitCode = "ok";

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

GCodeSenderClass.prototype.sendAndWaitSpecial = function (gCodes, waitCode, showLoader, callback) {
  var that = this;

  if(showLoader)
    $("#globalLoader").show();
  that.sendRecursiveAndWaitSpecial(lodash.clone(gCodes), waitCode, function(result){
    if(showLoader)
      $("#globalLoader").hide();
    if(callback)
      callback(result);
  }, "");
};

GCodeSenderClass.prototype.send = function (gCodes, showLoader, callback) {
  var that = this;
  that.sendAndWaitSpecial(gCodes, defaultWaitCode, showLoader, callback)
};

GCodeSenderClass.prototype.sendRecursiveAndWaitSpecial = function (gCodes, waitCode, callback, result) {
  var that = this;

  if(gCodes.length == 0){
    return callback(result);
  }
  var gCode = gCodes.shift();
  console.log("sendGCode", gCode);
  that.sendGcodeAndWaitSpecial(gCode, waitCode, function(response){
    that.sendRecursiveAndWaitSpecial(gCodes, waitCode, callback, result+response);
  });
};

GCodeSenderClass.prototype.sendGcodeAndWaitSpecial = function (gCode, waitCode, callback) {
  var that = this;
  if(that.forceStop){
    that.forceStop = false;
    return;
  }

  DeviceManager.getSelectedDevice().send(gCode+"\r\n");
  that.waitForSpecial(waitCode, function(response){
    callback(response);
  });
};



GCodeSenderClass.prototype.waitForSpecial = function (waitCode, callback) {
  var that = this;
  var _data = "";

  if(!awaitForAck){
    return setTimeout(function () {
      callback(_data);
    }, 100);
  }

  var dataHandler = function(data){
    _data += data;

    if(data.toLowerCase().indexOf(waitCode.toLowerCase()) >= 0){
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
