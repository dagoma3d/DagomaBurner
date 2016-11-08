"use strict";

var _root = __dirname + "/../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var config = require(_root+"config.json");
var P2PRelay = require(_root+"manager/P2PRelay.js");

var SavClass = function SavClass(){
  this.content = null;
}

SavClass.prototype.load = function (callback) {
  var that = this;

  if(that.content)
    return callback();

  ViewLoader("savUser", function(content){
    that.content = $(content);
    that.initView();
    if(callback){
      callback();
    }
  });

};

SavClass.prototype.initView = function () {

};

SavClass.prototype.keydownHandler = function (e) {

}

SavClass.prototype.show = function () {
  var that = this;
  var peer = new Peer({host: config.sav.url, port: config.sav.port})//{key: '7gphj6gigo561or', });
  peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    that.content.find("pre").text(id);
  });

  peer.on('connection', function(conn) {
    conn.on('data', function(data){
      if(data == "ping"){
        conn.send("pong");
        P2PRelay.init(conn);
      }
    });
  });
};

SavClass.prototype.dispose = function () {

};

module.exports = SavClass;
