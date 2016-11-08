"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var DeviceManager = require(_root+"manager/devices.js");
var VODeviceP2P = require(_root+"manager/vo/deviceP2P.js");
var I18n = require(_root+"i18n/i18n.js");
var config = require(_root+"config.json");

var P2PConnectionClass = function P2PConnectionClass(){
  this.content = null;
}

P2PConnectionClass.prototype.load = function (callback) {
  var that = this;
  if(that.content)
    return callback();

  ViewLoader("savAdminConnection", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });
};

P2PConnectionClass.prototype.initView = function () {
  var that = this;

};

P2PConnectionClass.prototype.show = function () {
  var that = this;
  that.content.find("form").on("submit", function(e){
    e.preventDefault();
    that.connectToID(that.content.find("input").val());
  });

  that.content.find("#next").on("click", function(){
    NavManager.setPage("savAdmin");
  });

  that.content.find("#usbPrinter").on("click", function(){
    window.pageAfterDeviceSelection = "savAdmin";
    NavManager.setPage("selectPrinter/0_preparation");
  });

  that.content.find("#next").hide();

};

P2PConnectionClass.prototype.connectToID = function (id) {
  var that = this;
  console.log("id", id);
  that.content.find("#text").text("connection...");
  console.log(config);
  var peer = new Peer({host: config.sav.url, port: config.sav.port})//{key: '7gphj6gigo561or', });
  var conn = peer.connect(id);
  conn.on('open', function(){
    conn.send('ping');
  });

  conn.on('data', function(data){
    if(data == "pong"){
      that.content.find("#text").text("connected");
      var device = new VODeviceP2P(conn);
      DeviceManager.setSelectedDevice(device);
      NavManager.setPage("savAdmin");
    }
  });
};

P2PConnectionClass.prototype.dispose = function () {

};

module.exports = P2PConnectionClass;
