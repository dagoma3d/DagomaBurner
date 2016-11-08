"use strict";

var DeviceManager = require(_root+"manager/devices.js");

var EventEmitter = require('events').EventEmitter,
    util = require('util');
var root = __dirname + "/../";

var P2PRelayClass = function(){
  EventEmitter.call(this);
  this.dataListener = this.dataHandler.bind(this);
  this.portDataListener = this.portDataHandler.bind(this);
};

util.inherits(P2PRelayClass, EventEmitter);

P2PRelayClass.prototype.init = function(conn) {
  $("#savBar").show();
  if(this.connection){
    this.connection.removeListener("data", this.dataListener);
  }

  this.connection = conn;
  this.connection.on("data", this.dataListener);
  DeviceManager.on("receive", this.portDataListener);
  DeviceManager.on("add", this.deviceManagerAddListener);
  DeviceManager.on("remove", this.deviceManagerRemoveListener);
  DeviceManager.on("open", this.deviceManagerOpenListener);}

P2PRelayClass.prototype.portDataHandler = function(data) {
  this.connection.send({t:"d", m:data});
}

P2PRelayClass.prototype.dataHandler = function(data) {
  console.log(data);
  switch(data.t){
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
  }
}

P2PRelayClass.prototype.deviceManagerRemoveListener = function(device){
  this.connection.send({t:"pr", m:device.portName});
}

P2PRelayClass.prototype.deviceManagerOpenListener = function(device){
  this.connection.send({t:"po", m:device.portName});
}


P2PRelayClass.prototype.deviceManagerAddListener = function(device){
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
