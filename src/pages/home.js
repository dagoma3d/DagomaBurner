"use strict";

var _root = __dirname + "/../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var HomePageClass = function HomePageClass(){
  this.content = null;
}

HomePageClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("home", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

HomePageClass.prototype.initView = function () {
  var that = this;
  that.content.find("#configure").on("click", function(){
    NavManager.setPage("zoffset/1_preparation")
    //NavManager.setPage("zoffset/7_TestPrinting");
  });
};

HomePageClass.prototype.show = function () {

};

HomePageClass.prototype.dispose = function () {

};

module.exports = HomePageClass;
