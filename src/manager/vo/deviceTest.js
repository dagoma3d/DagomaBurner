"use strict";

var EventEmitter = require('events').EventEmitter;
var util = require('util');
//var SerialPortLib = require("serialport-worker");
//var SerialPort = SerialPortLib.SerialPort;
var AbstractDeviceClass = require("./abstractDevice.js");

var root = __dirname + "/../";

var DeviceClassTest = function(portName, pnpId, manufacturer, typeId, version, shieldID, shieldVersion, shieldVariant){
  EventEmitter.call(this);

  this.parent = new AbstractDeviceClass(portName.split("/dev/").join(""), this);
  this.type = "generic";
	this.portName = portName;
	this.uid = pnpId;
	this.serial = null;
  this.typeId = typeId;
  this.version = version;
  this.hasShield = shieldID!=0;
	this.shieldID = shieldID;
	this.shieldVersion = shieldVersion;
	this.shieldVariant = shieldVariant;
};

util.inherits(DeviceClassTest, EventEmitter);

DeviceClassTest.prototype.templateObject = function (deviceData){
  var that = this;
  return that.parent.templateObject(deviceData);
}

DeviceClassTest.prototype.destroy = function (){
  var that = this;
  that.parent.destroy();
  that.close();
}

DeviceClassTest.prototype.open = function ()
{
  var that = this;
  that.parent.open();

  that.ready = true;
  that.emit("ready", that);
}

DeviceClassTest.prototype.delete = function()
{
  var that = this;
  console.log("DeviceClassTest.delete", this.portName);
  that.parent.delete();
}

DeviceClassTest.prototype.resetPort = function () {
  var that = this;
  that.emit("reseted", that);
}

DeviceClassTest.prototype.close = function(force)
{

}

DeviceClassTest.prototype.pause = function()
{
}

DeviceClassTest.prototype.resume = function()
{

}

module.exports = DeviceClassTest;
