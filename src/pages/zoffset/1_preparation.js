"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var ZoffsetPreparationClass = function ZoffsetPreparationClass(){
  this.content = null;
}

ZoffsetPreparationClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/1_preparation", function(content){
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
    NavManager.setPage("zoffset/2_setJumper")
  });
};

ZoffsetPreparationClass.prototype.show = function () {

};

ZoffsetPreparationClass.prototype.dispose = function () {

};

module.exports = ZoffsetPreparationClass;
