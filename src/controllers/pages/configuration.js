"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var config = require(_root+"config.json");

var ConfigurationPageClass = function ConfigurationPageClass(){
  this.content = null;
  this.keyDownListener = this.keydownHandler.bind(this);
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

  that.content.find("#reset").on("click", function(){
    NavManager.setPage("reset/1_preparation");
    //NavManager.setPage("zoffset/7_TestPrinting");
  });


  that.content.find("#firmware").on("click", function(){
    NavManager.setPage("firmware/4_firmware");
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

  // Sancho : for now, Neva does not support other configuration sections
  if (window.printer == config.printer.type.Neva) {
    that.content.find('#configuration-z-offset').hide();
    that.content.find('#configuration-reset-factory').hide();
  }
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
