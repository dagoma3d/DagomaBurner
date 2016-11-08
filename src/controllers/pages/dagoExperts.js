"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var DagoExpertsClass = function DagoExpertsClass(){
  this.content = null;
}

DagoExpertsClass.prototype.load = function (callback) {
  var that = this;

  if(that.content)
    return callback();

  ViewLoader("dagoExperts", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

DagoExpertsClass.prototype.initView = function () {
  var that = this;

};

DagoExpertsClass.prototype.show = function () {
  this.content.find("img").on("click", function(){
    NavManager.setPage("savUser");
  });
};

DagoExpertsClass.prototype.dispose = function () {

};

module.exports = DagoExpertsClass;
