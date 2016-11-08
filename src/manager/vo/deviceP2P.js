"use strict";

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var AbstractDeviceClass = require("./abstractDevice.js");

var root = __dirname + "/../";
var data = "";

var DeviceClassP2P = function(conn){
  EventEmitter.call(this);
  var that = this;
  that.connection = conn;
  that.connection.on("data", function(data){
    console.log("dataP2P", data);
    switch(data.t){
      case "d":
        that.emit("receive", data.m);
        break;
      case "pl":
        that.emit("receive", "<span class=\"red-text\">==> Liste des ports : "+data.m.join(", ")+"</span>");
        break;
      case "pa":
        that.emit("receive", "<span class=\"red-text\">==> Add port : "+data.m.join(", ")+"</span>");
        break;
      case "po":
        that.emit("receive", "<span class=\"red-text\">==> Open port : "+data.m.join(", ")+"</span>");
        break;
      case "pr":
        that.emit("receive", "<span class=\"red-text\">==> Remove port : "+data.m.join(", ")+"</span>");
        break;
    }
  })
};

util.inherits(DeviceClassP2P, EventEmitter);

DeviceClassP2P.prototype.templateObject = function (deviceData){
  return this.parent.templateObject(deviceData);
}

DeviceClassP2P.prototype.destroy = function (){

}

DeviceClassP2P.prototype.open = function (){

}

DeviceClassP2P.prototype.serialPortOpenHandler = function (error){

}

DeviceClassP2P.prototype.serialPortDataHandler = function (pData) {

};

DeviceClassP2P.prototype.setBaud = function (baudrate) {

};

DeviceClassP2P.prototype.endsWith = function(topic, suffix) {

};

DeviceClassP2P.prototype.resetPort = function () {
  this.connection.send({"t":"r"});
}

DeviceClassP2P.prototype.checkConnected = function () {

}

DeviceClassP2P.prototype.parseSerialData = function(data){

}

DeviceClassP2P.prototype.send = function (data){
  this.connection.send({"t":"d", "m":data});
}

DeviceClassP2P.prototype.getPortList = function (){
  this.connection.send({"t":"g", "m":"pl"});
}

DeviceClassP2P.prototype.delete = function(){

}

DeviceClassP2P.prototype.close = function(force){

}

DeviceClassP2P.prototype.pause = function(){

}

DeviceClassP2P.prototype.resume = function(){

}

module.exports = DeviceClassP2P;
