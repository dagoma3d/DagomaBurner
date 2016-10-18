"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");

var ZoffsetTuningClass = function ZoffsetTuningClass(){
  this.content = null;
}

ZoffsetTuningClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("zoffset/1_tuning", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetTuningClass.prototype.initView = function () {
  var that = this;

};

ZoffsetTuningClass.prototype.show = function () {
  var that = this;
  that.zoffset = 0;

  that.content.find("#next").on("click", function(){
    window.zoffset = that.zoffset;
    NavManager.setPage("zoffset/8_SaveTuning");
  });

  ModalManager.showLoader(I18n.currentLanguage().z_offset_getting);
  GCodeSender.send([
    "M851"],
    false,
    function(response){
      console.log("response", response);
      var regex = / : (-?\d+.\d+)/.exec(response);
      console.log("regex", regex);
      if(regex && regex.length>=2){
        console.log("zoffset:", regex[1]);
        that.zoffset = +regex[1];
      }else{
        console.log("erreur");
        that.zoffset = 0;
      }

      that.content.find(".value").text(that.zoffset.toFixed(2));

      ModalManager.hideLoader();
      that.updateZOffset();
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

ZoffsetTuningClass.prototype.addButton = function (button, callback) {
  var that = this;

  that.content.find(button)[0].addEventListener("mousedown", function(e){
    that.content.find("#next").show();
    that.pressTimer = window.setTimeout(function() {
      that.pressInterval = window.setInterval(function() {
        callback(that);
      },100);
    },100);
    if(that.moveEnabled){
      callback(that);
      that.moveEnabled = false;
      window.setTimeout(function() {
        that.moveEnabled = true;
      },100);
    }
    return false;
  });
};


ZoffsetTuningClass.prototype.moveUp = function (that){
  that.zoffset += 0.05;
  that.updateZOffset();
};

ZoffsetTuningClass.prototype.moveDown = function (that){
  that.zoffset -= 0.05;
  that.updateZOffset();
};



ZoffsetTuningClass.prototype.updateZOffset = function () {
  var that = this;
  that.content.find("h3").text(that.zoffset.toFixed(2));
};

ZoffsetTuningClass.prototype.dispose = function () {

};

module.exports = ZoffsetTuningClass;
