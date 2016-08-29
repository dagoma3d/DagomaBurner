"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var CodeBuilder = require(_root+"manager/codeBuilder.js");


var ZoffsetSaveClass = function ZoffsetSaveClass(){
  this.content = null;
}

ZoffsetSaveClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("firmware/4_firmware", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

ZoffsetSaveClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("home");
  });
};

ZoffsetSaveClass.prototype.show = function () {
  var that = this;

  var $dropZone = $("html");
  var $dragZone = that.content.find(".drag");
  var $btn = that.content.find("#burn");
  var file;
  var fileName;
  var counter = 0;

  $dropZone.on("drop", function(e){
    e.preventDefault();

    file = e.originalEvent.dataTransfer.files[0];
    if(file){
      fileName = file.name;
      var fileNameSplit = fileName.split(".");
      if(fileNameSplit[fileNameSplit.length-1] == "hex"){
        that.content.find(".file .fileName").text(fileName);
        that.content.find(".file").removeClass("hide");
        console.log($dragZone);
        $dragZone.addClass("hide");
      }
    }
  });

  $btn.on("click", function(){
    ModalManager.showLoader("le firmware est en train d'être uploadé sur la carte ")
    console.log("window.boardType", window.boardType);
    new CodeBuilder(DeviceManager.getSelectedDevice(), file.path, window.boardType, function(success){
      ModalManager.hideLoader();
      if(success)
        ModalManager.alert("Succès", "Votre imprimante s'est bien mise à jour");
      else
        ModalManager.alert("<span class=\"red\">Erreur!</span>", "La mise à jour à connu une erreur");
      NavManager.setPage("home");
    });
  })

};

ZoffsetSaveClass.prototype.dispose = function () {
};

module.exports = ZoffsetSaveClass;
