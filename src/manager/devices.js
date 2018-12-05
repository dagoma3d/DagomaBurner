"use strict";

var root = __dirname + "/../";

var EventEmitter = require('events').EventEmitter;
var util = require('util');
//var SerialPortLib = require("serial-worker"); //From Tibus Github
var SerialPortLib = require("serialport");
var SerialPort = SerialPortLib.SerialPort;

var DeviceUSB = require(root+"manager/vo/deviceUSB.js");
var DeviceTest = require(root+"manager/vo/deviceTest.js");
//var DeviceWifi = require(root+"models/vo/deviceWifi.js");
var NavManager = require(_root+"manager/NavManager.js");

var DeviceManagerClass = function DeviceManagerClass(){
  EventEmitter.call(this);

  var that = this;
  this.devices = {};
  this.readyDevices = {};

  this.resetPort();
  this.interval = setInterval(function(){that.resetPort()}, 1000);
                                        //portName, pnpId, manufacturer, typeId, version, shieldID, shieldVersion, shieldVariant

  //that.createDevice("test2", new DeviceTest("test2", 20, "Sikwi", 2,1,1,1));
  //that.createDevice("test3", new DeviceTest("test3", 34, "Sikwi", 3,1,1,1));
  //that.createDevice("test4", new DeviceTest("test4", 1023, "Sikwi", 4,1,1,1));
  //that.createDevice("test5", new DeviceTest("test5", 1234123, "Sikwi", 5,1,1,1));
  //that.createDevice("test6", new DeviceTest("test6", 1221, "Sikwi", 6,1,1,1));
  //that.createDevice("test7", new DeviceTest("test7", 110392, "Sikwi", 7,1,1,1));
  //that.createDevice("test8", new DeviceTest("test8", 18102, "Sikwi", 8,1,1,1));
  //that.createDevice("test9", new DeviceTest("test9", 12302, "Sikwi", 9,1,1,1));
  //that.createDevice("test10", new DeviceTest("test10", 981247, "Sikwi", 10,1,1,1));
  //that.createDevice("test11", new DeviceTest("test11", 1023402, "Sikwi", 11,1,1,1));
}

util.inherits(DeviceManagerClass, EventEmitter);

DeviceManagerClass.prototype.resetPort = function(){
  var that = this;

  SerialPortLib.list(function (err, results){

    results.forEach(function(port){
        var portName = port.comName;
        //console.log(port);
        if(that.devices[portName] == null && port.manufacturer == "FTDI"){
            console.log("port.serialNumber", port.serialNumber);
            //that.createDevice(portName, new DeviceUSB(portName, port.pnpId, port.manufacturer));
            that.createDevice(portName, new DeviceUSB(portName, port.serialNumber, port.manufacturer));
        }
    });

    for(var port in that.devices){
      var found = false;
      results.forEach(function(result){
        if(result.comName == port)
          found = true;
      });

      if(found == false){
        that.devices[port].delete();
      }
    }
  });
}

DeviceManagerClass.prototype.createDevice = function(name, device){
    var that = this;
    that.devices[name] = device;

    device.on("ready", function(device){
      that.readyDevicesHandler(device);
    });

    device.on("open", function(device){
      console.log("DeviceManagerClass open");
      console.log("Delegate a bit open emission");
      setTimeout( that.emit.bind( that, "open", device), 800 );
    });

    device.on("change", function(device){
      that.emit("change", device);
    });

    device.on("receive", function(data){
      that.emit("receive", data);
    });

    device.on("write", function(data){
      that.emit("write", data);
    });

    device.on("printerFound", function(device){
      that.emit("printerFound", device);
    });

    device.on("delete", function(device){
      console.log("deletePortHandler", device);
      that.deletePortHandler(device);
    });

    that.emit("add", device);
    //device.open();
}

DeviceManagerClass.prototype.deletePortHandler = function(device){
  var that = this;

  that.emit("remove", device);

  delete that.devices[device.portName];
  delete that.readyDevices[device.portName];
}

DeviceManagerClass.prototype.readyDevicesHandler = function(device){
  var that = this;
  that.readyDevices[device.portName] = device;
}

DeviceManagerClass.prototype.setSelectedDevice = function(device){
  var that = this
  that.selectedDevice = device;
  that.emit("deviceSelect", that.selectedDevice);
}

DeviceManagerClass.prototype.getSelectedDevice = function(device){
  var that = this
  return that.selectedDevice;
}


DeviceManagerClass.instance = null;

DeviceManagerClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new DeviceManagerClass();
    }
    return this.instance;
}

module.exports = DeviceManagerClass.getInstance();
