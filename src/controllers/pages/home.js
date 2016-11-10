"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var HomePageClass = function HomePageClass(){
  this.keyDownListener = this.keydownHandler.bind(this);

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
    window.pageAfterDeviceSelection = "configuration";
    NavManager.setPage("selectPrinter/0_preparation");
    //NavManager.setPage("configuration");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });

  that.content.find("#sav").on("click", function(){
    NavManager.setPage("dagoExperts");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });
};

HomePageClass.prototype.keydownHandler = function (e) {
  var that = this;
  that.keys.push( e.which );
  that.keys = that.keys.slice( -10 );
  if (that.keys.join('') == '38384040373937396665') {
    window.pageAfterDeviceSelection = "diagnostic";
    //NavManager.setPage("diagnostic");
    NavManager.setPage("selectPrinter/0_preparation");
  }

  if (that.keys.join('') == '38404037393739836586') {
    NavManager.setPage("sav/savAdminConnection");
  }
}

HomePageClass.prototype.show = function () {
  this.keys = [];
  $(document).on("keydown", this.keyDownListener);
};

HomePageClass.prototype.dispose = function () {
  $(document).off("keydown", this.keyDownListener);
};

module.exports = HomePageClass;
