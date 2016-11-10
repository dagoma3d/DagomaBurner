"use strict";

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var AbstractDeviceClass = require("./abstractDevice.js");

var root = __dirname + "/../";
var data = "";

var DeviceClassP2P = function(peer, conn){
  EventEmitter.call(this);

  this.parent = new AbstractDeviceClass("p2p", this);

  var that = this;
  this.type = "p2p";
  that.peer = peer;
  that.connection = conn;
  that.connection.on("data", function(data){
    //console.log("dataP2P", data);
    switch(data.t){
      case "w":
        that.emit("write", data.m);
        break;
      case "d":
        that.emit("receive", data.m);
        break;
      case "pl":
        that.emit("receive", "<span class=\"red-text\">==> Liste des ports : "+data.m.join(", ")+"</span>");
        break;
      case "pa":
        that.emit("receive", "<span class=\"red-text\">==> Add port : "+data.m+"</span>");
        break;
      case "po":
        that.emit("receive", "<span class=\"red-text\">==> Open port : "+data.m+"</span>");
        break;
      case "pr":
        that.emit("receive", "<span class=\"red-text\">==> Remove port : "+data.m+"</span>");
        break;
    }
  });

  that.connection.on("close", function(){
    that.delete();
  })

  that.peer.on('close', function(){
    that.delete();
  });

  that.peer.on('call', function(call) {
    console.log("call");
    call.answer(null); // Answer the call with an A/V stream.
    call.on('stream', function(remoteStream) {
      that.stream = remoteStream;
      that.emit("getStream");
      // Show stream in some <video> element.
    });
  });
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

DeviceClassP2P.prototype.connectToPort = function (port){
  console.log("connectToPort", port);
  this.connection.send({"t":"c", "m":port});
}

DeviceClassP2P.prototype.sendMouseDown = function (x, y){
  this.connection.send({"t":"mD", "x":x, "y":y});
}

DeviceClassP2P.prototype.sendMouseUp = function (x, y){
  this.connection.send({"t":"mU", "x":x, "y":y});
}

DeviceClassP2P.prototype.delete = function(){
  this.parent.delete();
}

DeviceClassP2P.prototype.close = function(force){
  this.connection.close();
}

DeviceClassP2P.prototype.pause = function(){

}

DeviceClassP2P.prototype.resume = function(){

}

module.exports = DeviceClassP2P;
