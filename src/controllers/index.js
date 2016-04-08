"use strict";

var root = __dirname + "/../";
var DeviceManager = require(root+"manager/devices.js");
var CodeBuilder = require(root+"manager/codeBuilder.js");

( function( $ ) {
  $("#printConfig").hide();
  $("#globalLoader").hide();

  DeviceManager.on("add", function(device){
    updateDeviceList(device);
  });

  DeviceManager.on("remove", function(device){
    updateDeviceList(device);
  });

  var $dropZone = $("html");
  var $dragZone = $(".drag");
  var $btn = $("#burn");
  var hasFile = false;
  var file;
  var fileName;
  var counter = 0;

  $dropZone.on("dragenter", function (e) {
    counter++;
  });

  $dropZone.on("dragover", function (e) {
    $dragZone.removeClass("hide");
    $dragZone.addClass("hover");
    $(".file").addClass("hide");
    return false;
  });

  $dropZone.on("dragleave", function (e) {
    counter--;
    if (counter === 0) {
      $dragZone.removeClass("hover");
      if(hasFile){
        $(".file").removeClass("hide");
        $dragZone.addClass("hide");
      }
    }
    return false;
  });

  $dropZone.on("drop", function(e){
    e.preventDefault();

    counter = 0;
    $dragZone.removeClass("hover");

    file = e.originalEvent.dataTransfer.files[0];
    fileName = file.name;
    var fileNameSplit = fileName.split(".");
    if(fileNameSplit[fileNameSplit.length-1] == "hex"){
      hasFile = true;
      $(".file .fileName").text(fileName);
      $(".file").removeClass("hide");
      $dragZone.addClass("hide");
    }

  });

  $btn.on("click", function(){
    $("#globalLoader").show();
    new CodeBuilder(DeviceManager.readyDevices[$('select').val()], file.path, function(success){
      $("#globalLoader").hide();
      if(success)
        alert("Success");
      else
        alert("Error");
    });
  })

} )( window.jQuery );

function updateDeviceList(device){
  console.log($('select'));
  $('select').append('<option val="'+device.portName+'">'+device.portName+'</option>');
  console.log(device.portName);
}
