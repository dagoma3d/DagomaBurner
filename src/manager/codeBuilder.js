"use strict";

var root = __dirname + "/../";
var EventEmitter = require('events').EventEmitter,
    util = require('util'),
    jade = require('jade'),
    Avrgirl = require('avrgirl-arduino'),
    lodash = require('lodash');

module.exports = function(device, callback){
  console.log("burn to ", device.portName);

  var board = "mega";
  device.pause();

  console.log("upload to :", board);

  var avrgirl = new Avrgirl({
    board: board,//uno for SikwiOne or pro-mini for SikwiMini
    port: device.portName,
    debug: true
  });

  avrgirl.flash(root+"Melzi-v2.hex", function (error) {
    if (error) {
      console.log("error", error);
      callback(false);
    } else {
      console.log('done.');
      callback(true/*, result.message*/);
      device.resume();
    }
  });
};
