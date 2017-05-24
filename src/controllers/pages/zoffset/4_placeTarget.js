"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var config = require(_root+"config.json");
var ModalManager = require(_root+"manager/modalManager.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");
var I18n = require(_root+"i18n/i18n.js");

var ZoffsetPlaceTargetClass = function ZoffsetPlaceTargetClass(){
  this.content = null;
}

ZoffsetPlaceTargetClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/4_placeTarget", function(content){
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
    NavManager.setPage("zoffset/5_moveNozzle")
  });

  $("#navBack").show();
};

ZoffsetPlaceTargetClass.prototype.parallelismeX350 = function (callback) {
  GCodeSender.send([
    "M117 Parallelisme X",//      ; Message sur afficheur",
    "M666 Z0",
    "G28",
    "G90",
    "G0 X0 F8000",],
    false,
    function(){//;Parallelisme Axe X
      GCodeSender.send([
        "G30"],
        false,
        function(result){
          console.log("result", result);
          result = +(result.split("Z:")[1].split("echo")[0]);
          console.log("result=", result);
          GCodeSender.send([
            "G90",
            "G0 X350 F8000",
            "G30"],
            false,
            function(result350){
                console.log("result350", result350);
                result350 = +(result350.split("Z:")[1].split("echo")[0]);
                console.log("result350=", result350);
                var globalResult = result350 - result;
                GCodeSender.send([
                  "M666 Z"+globalResult],
                  false,
                  function(){
                    GCodeSender.send([
                      "G28",
                      "M666 Z0"],
                      false,
                      function(){
                        callback();
                      }
                    );
                  }
                );
            }
          );
        }
      );
    });
}

ZoffsetPlaceTargetClass.prototype.show = function () {
  var that = this;

  that.content.hide();

  ModalManager.showLoader(I18n.currentLanguage().z_offset_print_moving);
  switch(window.printer.type){
    case "E350":
    /*
    that.parallelismeX350( function(){
      that.parallelismeX350(function(){
    */
        GCodeSender.send([
          "M851 Z-10",
          "G28",//                 ; Home",
          "G90",
          "G0 Z15",
          "G0 F8000"],
          false,
          function(){
            that.content.show();
            ModalManager.hideLoader();
          }
        );
    /*
      })
    })
    */
    break;
    case "Delta":
      if(window.zOffsetType == 1){
        GCodeSender.send([
          "G0 X-77.94 Y-45.00 Z5 F8000",
          "G30",
          "G0 X77.94 Y-45 Z5 F8000",//config.initialZOffset //Not -4 but -10 for the new V2],
          "G30",
          "G0 X0 Y90 Z5 F8000",
          "G30"],
          false,
          function(result){
            var regex = /X(\d+.\d+)/.exec(response);
            var offsetX = regex[1];

            regex = /Y(\d+.\d+)/.exec(response);
            var offsetY = regex[1];

            regex = /Z(\d+.\d+)/.exec(response);
            var offsetZ = regex[1];

            GCodeSender.send([
              "M206 X"+offsetX+" Y"+offsetY+" Z"+offsetZ,
              "G0 X0 Y0 Z5 F8000",
              "G30"],
              false,
              function(result){
                var regex = /Z(\d+.\d+)/.exec(response);
                var homeZ = regex[1];

                GCodeSender.send([
                  "M666 Z"+homeZ],
                  false,
                  function(result){
                    that.content.show();
                    ModalManager.hideLoader();
                  });
                });
              });
      }
      else
      {
        GCodeSender.send([
          "G0 X0 Y0 Z5 F8000",
          "G30"],
          false,
          function(result){
            var regex = /Z(\d+.\d+)/.exec(response);
            var homeZ = regex[1];

            GCodeSender.send([
              "M666 Z"+homeZ],
              false,
              function(result){
                GCodeSender.send([
                  "G0 X-77.94 Y-45.00 Z5 F8000",
                  "G30",
                  "G0 X77.94 Y-45 Z5 F8000",//config.initialZOffset //Not -4 but -10 for the new V2],
                  "G30",
                  "G0 X0 Y90 Z5 F8000",
                  "G30"],
                  false,
                  function(result){
                    var regex = /X(\d+.\d+)/.exec(response);
                    var offsetX = regex[1];

                    regex = /Y(\d+.\d+)/.exec(response);
                    var offsetY = regex[1];

                    regex = /Z(\d+.\d+)/.exec(response);
                    var offsetZ = regex[1];

                    GCodeSender.send([
                      "M206 X"+offsetX+" Y"+offsetY+" Z"+offsetZ],
                      false,
                      function(){
                        that.content.show();
                        ModalManager.hideLoader();
                      });
                  });
              });
          });
      }
    break;
    default :
      GCodeSender.send([
        "G91",
        "G0 Z10",
        "M851 Z-10",//config.initialZOffset //Not -4 but -10 for the new V2],
        "G28",
        "G91",
        "G0 Z5"],
        false,
        function(){
          that.content.show();
          ModalManager.hideLoader();
        });
    break;
  };
};


ZoffsetPlaceTargetClass.prototype.dispose = function () {
};

module.exports = ZoffsetPlaceTargetClass;
