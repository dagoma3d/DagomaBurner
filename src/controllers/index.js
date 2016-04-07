"use strict";

var root = __dirname + "/../";
var DeviceManager = require(root+"manager/devices.js");
//var CodeBuilder = require(root+"manager/codeBuilder.js");

( function( $ ) {
  $("#printConfig").hide();

  DeviceManager.on("ready", function(device){
    updateDeviceList();
  });
} )( window.jQuery );

function updateDeviceList(){

}
