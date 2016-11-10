"use strict";

var DeviceManager = require(_root+"manager/devices.js");

var EventEmitter = require('events').EventEmitter,
    util = require('util');
var root = __dirname + "/../";

var P2PRelayClass = function(){
  EventEmitter.call(this);
  this.dataListener = this.dataHandler.bind(this);
  this.disconnectedListener = this.disconnectedHandler.bind(this);

  this.portDataListener = this.portDataHandler.bind(this);
  this.portWriteListener = this.portWriteHandler.bind(this);

  this.deviceManagerAddListener = this.deviceManagerAddHandler.bind(this);
  this.deviceManagerRemoveListener = this.deviceManagerRemoveHandler.bind(this);
  this.deviceManagerOpenListener = this.deviceManagerOpenHandler.bind(this);
};

util.inherits(P2PRelayClass, EventEmitter);

P2PRelayClass.prototype.init = function(conn) {
  $("#savBar").show();
  $("#navbar").addClass("savBar");

  if(this.connection){
    this.connection.removeListener("data", this.dataListener);
    this.connection.removeListener("close", this.disconnectedListener);

    DeviceManager.removeListener("receive", this.portDataListener);
    DeviceManager.removeListener("write", this.portWriteListener);
    DeviceManager.removeListener("add", this.deviceManagerAddListener);
    DeviceManager.removeListener("remove", this.deviceManagerRemoveListener);
    DeviceManager.removeListener("open", this.deviceManagerOpenListener);
  }

  this.connection = conn;
  this.connection.on("data", this.dataListener);
  this.connection.on("close", this.disconnectedListener);

  DeviceManager.on("receive", this.portDataListener);
  DeviceManager.on("write", this.portWriteListener);
  DeviceManager.on("add", this.deviceManagerAddListener);
  DeviceManager.on("remove", this.deviceManagerRemoveListener);
  DeviceManager.on("open", this.deviceManagerOpenListener);
}

P2PRelayClass.prototype.portDataHandler = function(data) {
  this.connection.send({t:"d", m:data});
}

P2PRelayClass.prototype.portWriteHandler = function(data) {
  this.connection.send({t:"w", m:data});
}

P2PRelayClass.prototype.disconnectedHandler = function(event) {
  $("#savBar").hide();
  $("#navbar").removeClass("savBar");
  console.log("disconnected", event);
}

P2PRelayClass.prototype.dataHandler = function(data) {

  switch(data.t){
    case "m":
      var win = remote.getCurrentWindow();

      if(process.platform=="darwin"){
        data.x-=5;
        data.y-=23;
      }else if(process.platform=="linux"){
        data.y-=5;
      }else if(process.platform=="win32"){
        data.x-=10;
        data.y-=30;
      }

      win.webContents.sendInputEvent({type:"mouseDown", x:data.x, y:data.y, button:"left", clickCount:1});
      win.webContents.sendInputEvent({type:"mouseUp", x:data.x, y:data.y, button:"left", clickCount:1});
      $("#pointer").css("left", data.x);
      $("#pointer").css("top", data.y);
      $("#pointer").stop().fadeIn(200).delay(500).fadeOut(500);
      break;
    case "d":
      if(DeviceManager.selectedDevice)
        DeviceManager.selectedDevice.send(data.m);
      break;
    case "g":
      if(data.m == "pl"){
        var devices = []
        for(var i in DeviceManager.devices){
          devices.push(DeviceManager.devices[i].portName);
        }
        this.connection.send({t:"pl", m:devices})
      }
      break;
    case "r":
      if(DeviceManager.selectedDevice)
        DeviceManager.selectedDevice.resetPort();
      break;
    case "c":
      if(DeviceManager.devices[data.m]){
        DeviceManager.setSelectedDevice(DeviceManager.devices[data.m]);
        DeviceManager.selectedDevice.open();
      }
      break;
  }
}

P2PRelayClass.prototype.deviceManagerRemoveHandler = function(device){
  this.connection.send({t:"pr", m:device.portName});
}

P2PRelayClass.prototype.deviceManagerOpenHandler = function(device){
  this.connection.send({t:"po", m:device.portName});
}


P2PRelayClass.prototype.deviceManagerAddHandler = function(device){
  this.connection.send({t:"pa", m:device.portName});
}

P2PRelayClass.instance = null;

P2PRelayClass.getInstance = function(){
  if(this.instance === null){
      this.instance = new P2PRelayClass();
  }
  return this.instance;
}

module.exports = P2PRelayClass.getInstance();
