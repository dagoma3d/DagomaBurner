"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var ZoffsetChoseClass = function ZoffsetChoseClass(){
  this.content = null;
}

ZoffsetChoseClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/0_chose", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetChoseClass.prototype.initView = function () {
  var that = this;
  that.content.find("#initialisation").on("click", function(){
    window.zOffsetType = 1;
    window.pageAfterDeviceSelection = "configuration";
    NavManager.setPage("zoffset/1_preparation");
    //NavManager.setPage("configuration");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });

  if(window.printer.type != "Delta"){
    that.content.find("#initialisation2").hide();
  }else{
    that.content.addClass("delta")
  }

  that.content.find("#initialisation2").on("click", function(){
    window.zOffsetType = 2;
    window.pageAfterDeviceSelection = "configuration";
    NavManager.setPage("zoffset/1_preparation");
    //NavManager.setPage("configuration");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });

  that.content.find("#tuning").on("click", function(){
    NavManager.setPage("zoffset/1_tuning");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });
};

ZoffsetChoseClass.prototype.show = function () {
  var that = this;
};

ZoffsetChoseClass.prototype.checkCheckbox = function () {
  var that = this;

};

ZoffsetChoseClass.prototype.dispose = function () {

};

module.exports = ZoffsetChoseClass;
