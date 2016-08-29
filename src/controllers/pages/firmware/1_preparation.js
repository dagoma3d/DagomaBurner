"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var ZoffsetPreparationClass = function ZoffsetPreparationClass(){
  this.content = null;
}

ZoffsetPreparationClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("firmware/1_preparation", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetPreparationClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    window.pageAfterDeviceSelection = "firmware/4_firmware";
    NavManager.setPage("selectPrinter/1_selectPrinter");
  });
};

ZoffsetPreparationClass.prototype.show = function () {
  var that = this;
  that.count = 0;
  that.content.find("#next").hide();
  that.content.find(":checkbox").change(function(){
    that.checkCheckbox();
  });
};

ZoffsetPreparationClass.prototype.checkCheckbox = function () {
  var that = this;
  that.count = 0;
  that.content.find(":checkbox").each(function(){
    if($(this).is(':checked')){
      that.count++;
    }else{
      that.count--;
    }
    if(that.count == 2){
      that.content.find("#next").show();
    }else{
      that.content.find("#next").hide();
    }
  });
};

ZoffsetPreparationClass.prototype.dispose = function () {

};

module.exports = ZoffsetPreparationClass;
