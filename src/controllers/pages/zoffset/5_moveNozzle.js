"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");
var config = require(_root+"config.json");

var ZoffsetMoveNozzleClass = function ZoffsetMoveNozzleClass(){
  this.content = null;
}

ZoffsetMoveNozzleClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/5_moveNozzle", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetMoveNozzleClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    GCodeSender.send(["M114"], false, function(response){
      var zoffset;
      if(response){
        zoffset = +(response.split("Z:")[1].split(" ")[0]);
        zoffset = -(config.initialZOffset)+zoffset;
        zoffset = zoffset.toFixed( 2 );
      }

      GCodeSender.send([
        "G91;",
        "G0 F3600.000000 Z10",
        "M851 Z"+zoffset,
        "M500"],
        false,
        function(){
          //alert("z-offset réglé à : "+zoffset );
          NavManager.setPage("zoffset/6_TestPrintStart")
        });
      });
  });

  that.moveEnabled = true;

  that.content.mouseup(function(e){
    clearTimeout(that.pressTimer);
    clearInterval(that.pressInterval);
    return false;
  });

  that.addButton("#zp", that.moveUp);
  that.addButton("#zm", that.moveDown);

  $("#navBack").show();
};

ZoffsetMoveNozzleClass.prototype.addButton = function (button, callback) {
  var that = this;

  that.content.find(button)[0].addEventListener("mousedown", function(e){
    that.content.find("#next").show();
    that.pressTimer = window.setTimeout(function() {
      that.pressInterval = window.setInterval(function() {
        callback();
      },100);
    },100);
    if(that.moveEnabled){
      callback();
      that.moveEnabled = false;
      window.setTimeout(function() {
        that.moveEnabled = true;
      },100);
    }
    return false;
  });
};

ZoffsetMoveNozzleClass.prototype.show = function () {
  var that = this;
  that.content.find("#next").hide();
};

ZoffsetMoveNozzleClass.prototype.moveUp = function () {
  var that = this;
  GCodeSender.send(["G91", "G0 Z0.1"], false);
};

ZoffsetMoveNozzleClass.prototype.moveDown = function () {
  var that = this;
  GCodeSender.send(["G91", "G0 Z-0.1"], false);
};

ZoffsetMoveNozzleClass.prototype.dispose = function () {
};

module.exports = ZoffsetMoveNozzleClass;
