"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var ZoffsetTestPrintStartClass = function ZoffsetTestPrintStartClass(){
  this.content = null;
}

ZoffsetTestPrintStartClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/6_TestPrintStart", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetTestPrintStartClass.prototype.initView = function () {
  var that = this;
  that.content.find("#start").on("click", function(){
    NavManager.setPage("zoffset/7_TestPrinting");
  });
};

ZoffsetTestPrintStartClass.prototype.show = function () {
  var that = this;
};

ZoffsetTestPrintStartClass.prototype.dispose = function () {

};

module.exports = ZoffsetTestPrintStartClass;
