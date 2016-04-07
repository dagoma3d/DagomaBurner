"use strict";

var root = __dirname + "/../";
var DeviceManager = require(root+"manager/devices.js");
var CodeBuilder = require(root+"manager/codeBuilder.js");

( function( $ ) {
  $("#printConfig").hide();

  var device;
  DeviceManager.on("isDagoma", function(pDevice){
    device = pDevice;
    $("#errorMessage").hide();
    $("#printConfig").show();
    $("#printConfig .port").text(device.uid);

    device.on("delete", function(){
      $("#printConfig").hide();
      $("#errorMessage").show();
    });

    device.on("receive", function(message){
      console.log(message);
      if(message.indexOf("Marlin") == 0){
        $("#printConfig #firmware").text(message);
      }
    });

    $("#burn").on("click", function(){
      new CodeBuilder(device, function(){
        console.log("success");
      });
    });

  });
} )( window.jQuery );
