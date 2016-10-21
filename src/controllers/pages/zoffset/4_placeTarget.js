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

ZoffsetPlaceTargetClass.prototype.show = function () {
  var that = this;

  that.content.hide();

  ModalManager.showLoader(I18n.currentLanguage().z_offset_print_moving);
  switch(window.printer.type){
    case "E350":
      //;Parallelisme Axe X
      GCodeSender.send([
        "M117 Parallelisme X",//      ; Message sur afficheur",
        "G28",// ",
        "G28 X Y",// ",
        "G1 Z5 F9000",//           ; lift nozzle",
        "G92 Z20",//",
        "G91",//                   ; Passage coordonnees relatives",
        "G1 Z-18 F200",//             ; Descente en dessous du plateau",
        "G1 Z18 F9000",//,
        "G28",//                 ; Home",
        "G91",//                   ; Passage coordonnees absolues",
        "M851 Z-10"],
        false,
        function(){
          that.content.show();
          ModalManager.hideLoader();
        }
      );
    break;
    default :
      GCodeSender.send([
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
