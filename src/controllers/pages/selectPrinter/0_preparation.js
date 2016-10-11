"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var SelectPrinterPreparationClass = function SelectPrinterPreparationClass(){
  this.content = null;
}

SelectPrinterPreparationClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  if(DeviceManager.selectedDevice && DeviceManager.selectedDevice.validate == true){
    return NavManager.setPage(window.pageAfterDeviceSelection);
  }

  ViewLoader("selectPrinter/0_preparation", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

SelectPrinterPreparationClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("selectPrinter/1_selectPrinter");
  });
};

SelectPrinterPreparationClass.prototype.show = function () {
  var that = this;
  that.count = 0;
  that.content.find("#next").hide();
  that.content.find(":checkbox").change(function(){
    that.checkCheckbox();
  });
};

SelectPrinterPreparationClass.prototype.checkCheckbox = function () {
  var that = this;
  that.count = 0;
  that.content.find(":checkbox").each(function(){
    if($(this).is(':checked')){
      that.count++;
    }else{
      that.count--;
    }
    if(that.count == that.content.find(":checkbox").size()){
      that.content.find("#next").show();
    }else{
      that.content.find("#next").hide();
    }
  });
};

SelectPrinterPreparationClass.prototype.dispose = function () {

};

module.exports = SelectPrinterPreparationClass;
