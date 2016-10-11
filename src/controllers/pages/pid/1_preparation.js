"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var PIDPreparationClass = function PIDPreparationClass(){
  this.content = null;
}

PIDPreparationClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("pid/1_preparation", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

PIDPreparationClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    window.pageAfterDeviceSelection = "pid/4_PID";
    NavManager.setPage("selectPrinter/1_selectPrinter");
  });
};

PIDPreparationClass.prototype.show = function () {
  var that = this;
  that.count = 0;
  that.content.find("#next").hide();
  that.content.find(":checkbox").change(function(){
    that.checkCheckbox();
  });
};

PIDPreparationClass.prototype.checkCheckbox = function () {
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

PIDPreparationClass.prototype.dispose = function () {

};

module.exports = PIDPreparationClass;
