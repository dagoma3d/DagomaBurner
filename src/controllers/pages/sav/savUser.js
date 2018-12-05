"use strict";

var _root = __dirname + "/../../../";

var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var NavManager = require(_root+"manager/NavManager.js");
var config = require(_root+"config.json");
var P2PRelay = require(_root+"manager/P2PRelay.js");
const {desktopCapturer} = require('electron')
const {remote} = require('electron');


var SavClass = function SavClass(){
  this.content = null;
}

SavClass.prototype.load = function (callback) {
  var that = this;

  if(that.content)
    return callback();

  ViewLoader("sav/savUser", function(content){
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

SavClass.prototype.s4 = function() {

}

SavClass.prototype.show = function () {
  var that = this;
  if(window.p2pId == null){
    var p2pId = (100000+(Math.random() * 899999)).toFixed();
    var peer = new Peer(p2pId, {
      host: config.sav.url,
      port: config.sav.port,
      path : config.sav.path,
      secure: config.sav.secure,
      key: "253b8464e7f5a449231c3400fadd9e78642d69d3",
      debug: 3
    })//{key: '7gphj6gigo561or', });
    peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
      that.content.find("pre").text(id);
      window.p2pId = p2pId;
    });


    peer.on('connection', function(conn) {
      conn.on('data', function(data){
        if(data == "ping"){
          conn.send("pong");
          P2PRelay.init(conn);
          that.initVideo(peer, conn);
        }
      });
    });
  }else{
    that.content.find("pre").text(window.p2pId);
  }
  console.log("window.p2pId", window.p2pId);
};

SavClass.prototype.initVideo = function(peer, conn){
  console.log(conn);

  var win = remote.getCurrentWindow();
  var currentBounds = win.getBounds();

  desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
    console.log("error, sources", error, sources);
    if (error) throw error
    for (let i = 0; i < sources.length; ++i) {
      console.log(sources[i])
      //if (sources[i].name.indexOf("DagomApp Helper") >= 0 || sources[i].name.indexOf("runElectronApp.sh") >= 0) {
      if (sources[i].name === "DagomApp") {
        navigator.webkitGetUserMedia({
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: sources[i].id,
              minWidth: currentBounds.width,
              maxWidth: currentBounds.width,
              minHeight: currentBounds.height,
              maxHeight: currentBounds.height
            }
          }
        }, handleStream, handleError)
        return;
      }
    }
  })

  function handleStream (stream) {
    peer.call(conn.peer, stream);
  }

  function handleError (e) {
    console.log(e)
  }
}

SavClass.prototype.dispose = function () {

};

module.exports = SavClass;
