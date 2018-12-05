"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var DeviceManager = require(_root+"manager/devices.js");
var config = require(_root+"config.json");

var SelectPrinterClass = function SelectPrinterClass(){
  this.content = null;

}

SelectPrinterClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  if(DeviceManager.selectedDevice && DeviceManager.selectedDevice.validate == true){
    return NavManager.setPage(window.pageAfterDeviceSelection);
  }

  ViewLoader("selectPrinter/1_selectPrinter", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });


};

SelectPrinterClass.prototype.initView = function () {

  var that = this;
  that.content.find("#discoD200").on("click", function(){
    window.printer = config.printer.type.D200;
    NavManager.setPage("selectPrinter/2_setJumper");
  });

  that.content.find("#discoV2").on("click", function(){
    window.printer = config.printer.type.D200V2;
    NavManager.setPage("selectPrinter/3_printerConnection");
  });

  that.content.find("#E350").on("click", function(){
    window.printer = config.printer.type.E350;
    NavManager.setPage("selectPrinter/3_printerConnection");
  });

  // Sancho: Commented that, why #sav is hidden there
  //         ... on the selectPrinter view controllers.
  //         ... no other views controllers do that :/
  //that.content.find("#sav").hide();

  that.content.find("#Neva").on("click", function(){
    window.printer = config.printer.type.Neva;
    NavManager.setPage("selectPrinter/3_printerConnection");
  });

  that.content.find("#Magis").on("click", function(){
    window.printer = config.printer.type.Neva;
    NavManager.setPage("selectPrinter/3_printerConnection");
  });

  that.content.find("#DiscoUltimate").on("click", function(){
    window.printer = config.printer.type.D200V2;
    NavManager.setPage("selectPrinter/3_printerConnection");
  });

  $("#navBack").show();
}

SelectPrinterClass.prototype.show = function () {
};

SelectPrinterClass.prototype.dispose = function () {
};

module.exports = SelectPrinterClass;
