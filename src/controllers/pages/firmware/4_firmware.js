"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var CodeBuilder = require(_root+"manager/codeBuilder.js");


var FirmwareFirmwareClass = function FirmwareFirmwareClass(){
  this.content = null;
}

FirmwareFirmwareClass.prototype.load = function (callback) {
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

FirmwareFirmwareClass.prototype.initView = function () {
  var that = this;
  that.content.find("#next").on("click", function(){
    NavManager.setPage("home");
  });
};

FirmwareFirmwareClass.prototype.show = function () {
  var that = this,
      file,
      $btn;

  $btn = that.content.find("#burn");
  $btn.hide();

  that.content.find('input[type=file]').change(function(e) {
    file = this.files[0];
    $btn.show();
  });

  $btn.on("click", function(){
    ModalManager.showLoader("Le firmware est en train d'être chargé sur votre imprimante")
    console.log("window.printer", window.printer);
    new CodeBuilder(DeviceManager.getSelectedDevice(), file.path, window.printer.bootloader, function(success){
      ModalManager.hideLoader();
      if(success)
        ModalManager.alert("Succès", "Votre imprimante s'est bien mise à jour");
      else
        ModalManager.alert("<span class=\"red\">Erreur!</span>", "La mise à jour à connu une erreur");
      NavManager.setPage("home");
    });
  })

  /*
  var $dropZone = $("html");
  var $dragZone = that.content.find(".drag");
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
  */
};

FirmwareFirmwareClass.prototype.dispose = function () {
};

module.exports = FirmwareFirmwareClass;
