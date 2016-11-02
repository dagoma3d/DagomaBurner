"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var DeviceManager = require(_root+"manager/devices.js");
var config = require(_root+"config.json");

var SelectPrinterClass = function SelectPrinterClass(){
  this.content = null;
  this.keyDownListener = this.keydownHandler.bind(this);

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

  that.content.find("#delta").hide();

  that.content.find("#delta").on("click", function(){
    window.printer = config.printer.type.delta;
    NavManager.setPage("selectPrinter/3_printerConnection");
  });

  $("#navBack").show();
}

SelectPrinterClass.prototype.show = function () {
  this.keys = [];
  $(document).on("keydown", this.keyDownListener);
};


SelectPrinterClass.prototype.keydownHandler = function (e) {
  var that = this;
  that.keys.push( e.which );
  that.keys = that.keys.slice( -10 );
  if (that.keys.join('') == '6869768465') {
    that.content.find('#delta').show();
  }
}

SelectPrinterClass.prototype.dispose = function () {
  $(document).off("keydown", this.keyDownListener);
};

module.exports = SelectPrinterClass;
