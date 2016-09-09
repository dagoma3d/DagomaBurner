const ENABLE_AUTO_UPDATE = true;

const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {remote} = electron;
const {ipcMain, ipcRenderer, shell} = electron;

const fs = require('fs');
const unzip = require('unzip');
const request = require('request');

var that = this;

"use strict";

var AppRunnerClass = function AppRunnerClass(){
  this.mainWindow = null;
  this.updateWindow = null;
  this.versionInAppData = false;
  this.updateUrl = null;
}

AppRunnerClass.prototype.run = function (bVersionInAppData, sUpdateUrl, sApplicationDirname) {
  var that = this;

  global.state = {
    ready : false,
    hasUpdate : false,
    updateChecked : false}

  this.versionInAppData = bVersionInAppData;
  this.updateUrl = sUpdateUrl;
  this.applicationDirname = sApplicationDirname;

  this.checkForUpdate();

  // Quit when all windows are closed.
  app.on('window-all-closed', function() {
    app.quit();
  });

  app.on('activate-with-no-open-windows', function(){
    console.log("Run App from ", "activate-with-no-open-windows");
    that.runApp();
  });

  app.on('ready', function(){
    console.log("Run App from ", "ready");
    global.state.ready = true;
    that.runApp();
  });
}

//200
//304
AppRunnerClass.prototype.runApp = function(){
  var that = this;

  if(global.state.ready == false)
    return console.log("    return ready == false");

  if(global.state.updateChecked == false){
    that.openUpdateWindow();
    return console.log("    return updateChecked == false");
  }

  if(global.state.hasUpdate == false && that.mainWindow == null){
    return that.openWindow();
  }
  else if(that.updateWindow == null){
    return that.openUpdateWindow();
  }
  else if(that.updateWindow){
    if(global.state.updateChecked && global.state.hasUpdate)
      that.updateWindow.webContents.send('hasUpdate');
  }

  return console.log("    return hasUpdate : ", global.state.hasUpdate, ", mainWindow == null : ", that.mainWindow == null, ", updateWindow == null : ", that.updateWindow == null);
}

AppRunnerClass.prototype.openWindow = function(){
  var that = this;

  if(that.mainWindow)
    return;

  that.mainWindow = new BrowserWindow({
    width: 500,
    height:  (process.platform=="win32")?460:430,
    resizable: false, frame: false,
    //type:"dock",
    title: "Dagom'App",
    'use-content-size': true,
    //"icon":`file://${__dirname}/icon.ico` make a crash on windows! do not uncomment!
  });
  //mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  console.log("that.versionInAppData", that.versionInAppData);
  if(that.versionInAppData){
    console.log("open Main Window from appData");
    that.mainWindow.loadURL("file://"+app.getPath("userData")+"/app/views/index.html");
  }
  else {
    console.log("open Main Window from application directory");
    that.mainWindow.loadURL(`file://${that.applicationDirname}/views/index.html`);
  }
  that.mainWindow.focus();
  that.mainWindow.on("will-navigate", function(e) { e.preventDefault() });
  //mainWindow.openDevTools();
  if(that.updateWindow)
    that.updateWindow.close();
};

AppRunnerClass.prototype.openUpdateWindow = function(){
  var that = this;

  if(that.updateWindow)
    return;

  that.updateWindow = new BrowserWindow({
    width: 300,
    height:  (process.platform=="win32")?280:250,
    resizable: false, frame: false,
    title: "Dagom'App",
    'use-content-size': true,
    //"icon":`file://${__dirname}/icon.ico` make a crash on windows! do not uncomment!
  });
  //updateWindow.loadURL(`file://${__dirname}/views/index.html`);
  if(that.versionInAppData){
    that.updateWindow.loadURL("file://"+app.getPath("userData")+"/app/views/update.html");
  }
  else {
    that.updateWindow.loadURL(`file://${that.applicationDirname}/views/update.html`);
  }
  that.updateWindow.focus();
  that.updateWindow.on("will-navigate", function(e) { e.preventDefault() });
  //updateWindow.openDevTools();

  ipcMain.on("updateWindowReady", function(e){
    if(global.state.updateChecked && global.state.hasUpdate)
      that.updateWindow.webContents.send('hasUpdate');
  });

  that.updateWindow.webContents.on('did-finish-load', () => {
    if(global.state.updateChecked && global.state.hasUpdate)
      that.updateWindow.webContents.send('hasUpdate');
  });
};

AppRunnerClass.prototype.checkForUpdate = function(){
  var that = this;
  var ws;

  if(ENABLE_AUTO_UPDATE){
    var time = process.hrtime();

    ipcMain.on("acceptUpdate", function(e){
      request
        .get(that.updateUrl)
        .pipe(ws = fs.createWriteStream(app.getPath("userData")+"/app.zip"));

      ws.on('finish', function() {
        console.log("zip dowloaded");

        fs
          .createReadStream(app.getPath("userData")+"/app.zip")
          .pipe(unzip.Extract({ path: app.getPath("userData")+"/" }))
          .on('error', function(err) {
              console.log("unzip error : ", err);

              console.log("restart application");
              var exec = require('child_process').exec;
              exec("\""+process.execPath+"\"");
              app.quit();

              return;
            })
          .on('finish', function(err) {
              console.log("unzip finish", err);

              console.log("restart application");
              var exec = require('child_process').exec;
              exec("\""+process.execPath+"\"");
              app.quit();

              return;
            });

      });
    });

    ipcMain.on("discardUpdate", function(e){
      console.log("User Discard Update");

      global.state.updateChecked = true;
      global.state.hasUpdate = false;
      console.log("Run App from ", "User Discard Update");
      that.runApp();
    });

    console.log("updateUrl : ", that.updateUrl);
    if(!that.updateUrl || that.updateUrl == "THE_UPDATE_URL"){
      console.error("No conform update url");
      global.state.updateChecked = true;
      console.log("Run App from ", "No conform update url");
      that.runApp();
    }else{
      request
        .get(that.updateUrl)
        .on("error", function(err){
          global.state.updateChecked = true;
          console.log("Run App from ", "error in updateURL Checking");
          that.runApp();
        })
        .on('response', function(response) {

          var diff = process.hrtime(time);
          console.log(`get status code in  ${(diff[0] * 1e9 + diff[1])/1e9} seconds : ${response.statusCode}`);

          if(response.statusCode == 200){
            global.state.hasUpdate = true;
            global.state.updateChecked = true;
            console.log("Run App from ", "Status 200");
            that.runApp();
          }else{
            global.state.updateChecked = true;
            console.log("Run App from ", "Status != 200");
            that.runApp();
          }
        });
    }
  }
  else{
    console.log("Run App from ", "ENABLE_AUTO_UPDATE FALSE");
    global.state.updateChecked = true;
    that.runApp();
  }
}

AppRunnerClass.instance = null;

AppRunnerClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new AppRunnerClass();
    }
    return this.instance;
}

module.exports = AppRunnerClass.getInstance();
