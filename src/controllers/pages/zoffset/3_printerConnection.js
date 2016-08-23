"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var ZoffsetPrinterConnectionClass = function ZoffsetPrinterConnectionClass(){
  this.content = null;

  this.deviceManagerAddListener = this.deviceManagerAddHandler.bind(this);
  this.deviceManagerOpenListener = this.deviceManagerOpenHandler.bind(this);
  this.deviceManagerRemoveListener = this.deviceManagerRemoveHandler.bind(this);

}

ZoffsetPrinterConnectionClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/3_printerConnection", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetPrinterConnectionClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    if(that.found3DPrinter)
      NavManager.setPage("zoffset/4_placeTarget");
  });

  //that.content.find('select#com').hide();


  that.content.find("select#com").on("change", function(event){
    if(that.selectedDevice != null){
      that.selectedDevice.close();
    }
    that.selectedDevice = DeviceManager.devices[that.content.find('select#com').val()];
    DeviceManager.setSelectedDevice(that.selectedDevice);

    //$(".tabsContent").removeClass("disabled");
    that.selectedDevice.open();
  });

  DeviceManager.on("add", that.deviceManagerAddListener);
  DeviceManager.on("remove", that.deviceManagerRemoveListener);
  DeviceManager.on("open", that.deviceManagerOpenListener);

  $("#navBack").show();
  $("#navBack").on("click", function(){
    NavManager.setPage("zoffset/2_setJumper");
  });
};

ZoffsetPrinterConnectionClass.prototype.deviceManagerRemoveHandler = function(device){
  this.removeDeviceList(device);
  this.textBox.hide();
  this.content.find("#next").hide();
}

ZoffsetPrinterConnectionClass.prototype.deviceManagerOpenHandler = function(device){
  this.openDevice();
}


ZoffsetPrinterConnectionClass.prototype.deviceManagerAddHandler = function(device){
  var that = this;
  that.updateDeviceList(device);
  that.content.find('select#com').val(device.portName);

  if(that.selectedDevice != null){
    that.selectedDevice.close();
  }
  that.selectedDevice = DeviceManager.devices[that.content.find('select#com').val()];
  DeviceManager.setSelectedDevice(that.selectedDevice);

  //$(".tabsContent").removeClass("disabled");
  that.selectedDevice.open();
}

ZoffsetPrinterConnectionClass.prototype.show = function () {
  var that = this;
  that.selectedDevice = null;
  that.textBox = that.content.find("#comSelector p");

  for (var device in DeviceManager.devices) {
    that.updateDeviceList(DeviceManager.devices[device]);
  }

  that.content.find("#next").hide();
};

ZoffsetPrinterConnectionClass.prototype.openDevice = function () {
  var that = this;
  var timeOut3DPrinterSearch;
  that.content.find("#next").hide();

  that.textBox.show();
  if(that.selectedDevice)
    that.textBox.text("Ouverture du port "+that.selectedDevice.name+"...");

  function no3DPrinterFound(){
    clearTimeout(timeOut3DPrinterSearch);
    that.textBox.text("Aucune imprimante detectée sur ce port !");
    that.selectedDevice.removeListener("ready", deviceReady);
    that.selectedDevice.removeListener("printerFound", printerFound);
    that.content.find("#next").hide();
  }

  function printerFound(){
    no3DPrinterFound();
    that.textBox.text("Imprimante detectée");
    that.selectedDevice.removeListener("printerFound", printerFound);
    that.content.find("#next").show();
    //$('select#type').val("melzi");
    that.found3DPrinter = true;
  }

  function deviceReady(){
    that.textBox.text("Recherche d'une imprimante... (peut prendre jusqu'a 30secondes)");

    that.selectedDevice.removeListener("ready", deviceReady);
    timeOut3DPrinterSearch = setTimeout(function(){
      no3DPrinterFound();
    }, 30000);
    that.selectedDevice.on("printerFound", printerFound);
  }

  if(that.selectedDevice){
    if(that.selectedDevice.ready)
      deviceReady();
    else
      that.selectedDevice.on("ready", deviceReady);
  }
};

ZoffsetPrinterConnectionClass.prototype.updateDeviceList = function(device){
  var that = this;
  device.$select = $('<option val="'+device.portName+'">'+device.portName+'</option>');
  that.content.find('select#com').append(device.$select);
  that.content.find('select').material_select();
}

ZoffsetPrinterConnectionClass.prototype.removeDeviceList = function(device){
  device.$select.remove();
}


ZoffsetPrinterConnectionClass.prototype.dispose = function () {
  DeviceManager.removeListener("add", this.deviceManagerAddListener);
  DeviceManager.removeListener("open", this.deviceManagerOpenListener);
  DeviceManager.removeListener("remove", this.deviceManagerRemoveListener);

  $("#navBack").off("click");
};

module.exports = ZoffsetPrinterConnectionClass;
