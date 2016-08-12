"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var ZoffsetPlaceTargetClass = function ZoffsetPlaceTargetClass(){
  this.content = null;
}

ZoffsetPlaceTargetClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/placeTarget", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetPlaceTargetClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("zoffset/setJumper")
  });
};


ZoffsetPlaceTargetClass.prototype.dispose = function () {

};

module.exports = ZoffsetPlaceTargetClass;
