"use strict";

var root = __dirname + "/../";
var EventEmitter = require('events').EventEmitter,
    util = require('util'),
    Avrgirl = require('avrgirl-arduino'),
    boards = require('avrgirl-arduino/boards'),
    lodash = require('lodash');

module.exports = function(device, file, type, callback){
  if(device == null)
    return callback(false);
  console.log("burn to ", device.portName);

  var board = "mega";
  device.isBuilding = true;
  device.pause();

  boards.byName.melzi = {
    baud: 57600,
    signature: new Buffer([0x1e, 0x97, 0x05]), // ATmega2560
    //0x1e9705
    pageSize: 256,
    delay1: 10,
    delay2: 1,
    timeout:0xc8,
    stabDelay:0x64,
    cmdexeDelay:0x19,
    synchLoops:0x20,
    byteDelay:0x00,
    pollValue:0x53,
    pollIndex:0x03,
    productId: ['0x0403', '0x6001'],
    protocol: 'stk500v1'
  };

  setTimeout(function(){
    var avrgirl = new Avrgirl({
      board: type, //"melzi",//"mega",
      port: device.portName,
      debug: true
    });

    avrgirl.flash(file, function (error) {
      if (error) {
        console.log("error", error);
        callback(false);
      } else {
        console.log('done.');
        callback(true/*, result.message*/);
      }
      device.isBuilding = false;
      setTimeout(function(){device.resume()}, 1000);
    });

  },
  1000);
};
