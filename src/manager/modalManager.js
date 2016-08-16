"use strict";

var EventEmitter = require('events').EventEmitter,
    util = require('util');
var root = __dirname + "/../";

var ModalManagerClass = function(){
  EventEmitter.call(this);
};

util.inherits(ModalManagerClass, EventEmitter);

ModalManagerClass.prototype.showLoader = function(title) {
  $("#globalLoader").show();
  $("html").addClass("loader");
  this.setLoaderTitle(title);
}

ModalManagerClass.prototype.setLoaderTitle = function(title) {
  if(title == undefined){
    $("#globalLoader .description").hide();
  }else {
    $("#globalLoader .description").show();
    $("#globalLoader .description").text(title);
  }
}

ModalManagerClass.prototype.hideLoader = function() {
  $("#globalLoader").hide();
  $("html").removeClass("loader");
}

ModalManagerClass.prototype.resetView = function (title, content) {
  $("#globalModal .modal-footer").show();
}

ModalManagerClass.prototype.alert = function (title, content) {
  var that = this;
  that.resetView();

  $("#globalModal .modal-footer").hide();

  $('#globalModal h4').html(title);
  $('#globalModal .content').html(content);
  $('#globalModal').openModal();
};

ModalManagerClass.instance = null;

ModalManagerClass.getInstance = function(){
  if(this.instance === null){
      this.instance = new ModalManagerClass();
  }
  return this.instance;
}

module.exports = ModalManagerClass.getInstance();
