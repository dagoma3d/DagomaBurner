"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");

var ConfigurationPageClass = function ConfigurationPageClass(){
  this.content = null;
}

ConfigurationPageClass.prototype.load = function (callback) {
  var that = this;

  if(that.content)
    return callback();

  ViewLoader("configuration", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });

  this.keyDownListener = this.keydownHandler.bind(this);
};

ConfigurationPageClass.prototype.initView = function () {
  var that = this;
  that.content.find("#zoffset").on("click", function(){
    NavManager.setPage("zoffset/0_chose");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });

  that.content.find("#pid").on("click", function(){
    NavManager.setPage("pid/1_preparation");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });

  that.content.find("#firmware").on("click", function(){
    NavManager.setPage("firmware/1_preparation");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });
};

ConfigurationPageClass.prototype.show = function () {
  var that = this;

  that.content.find('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  that.keys = [];
  $(document).on("keydown", this.keyDownListener);
};

ConfigurationPageClass.prototype.keydownHandler = function (e) {
  var that = this;
  that.keys.push( e.which );
  that.keys = that.keys.slice( -10 );
  if (that.keys.join('') == '38384040373937396665') {
    NavManager.setPage("diagnostic");
  }
}

ConfigurationPageClass.prototype.dispose = function () {
  $(document).off("keydown", this.keyDownListener);
};

module.exports = ConfigurationPageClass;
