const ENABLE_AUTO_UPDATE = false;


const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {remote} = electron;
const {ipcRenderer, shell} = electron;

const fs = require('fs');
//const request = require('request');

var that = this;
var mainWindow = null,
    updateWindow = null;

var ready = false;
var updateChecked = false;

var version = require("./package.json").version;
var versionInAppData = false;
/*
try {
  version = require(app.getPath("userData")+"/src/package.json").version;
  versionInAppData = true;
}
catch (e) {

}
*/
if(ENABLE_AUTO_UPDATE){
  /*
  request("http://dist.dagoma.fr/dagomapp/update?v="+version, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }else{
      console.log("response.statusCode", response.statusCode); // Show the HTML for the Google homepage.s
    }

    updateChecked = true;

    runApp();
  })*/
  runApp();
}
else{
  updateChecked = true;
  runApp();
}

//200
//304
function runApp(){
  console.log("finalversion : ", version);
  if(ready && updateChecked){
    openWindow();
  }
  else if(!updateChecked && !updateWindow){
    openUpdateWindow();
  }
}

function openWindow(){
  console.log("openWindow");

  mainWindow = new BrowserWindow({
    width: 500,
    height:  (process.platform=="win32")?460:430,
    resizable: false, frame: false,
    //type:"dock",
    title: "Dagom'App",
    'use-content-size': true,
    //"icon":`file://${__dirname}/icon.ico` make a crash on windows! do not uncomment!
  });
  //mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  if(versionInAppData){
    console.log("getVersion in app data");
    mainWindow.loadURL("file://"+app.getPath("userData")+"/src/views/index.html");
  }
  else {
    console.log("getVersion in app folder", `file://${__dirname}/views/index.html`);
    mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  }
  mainWindow.focus();
  mainWindow.on("will-navigate", function(e) { e.preventDefault() });
  mainWindow.openDevTools();
  //if(updateWindow)
  //  updateWindow.close();
};

function openUpdateWindow(){
  updateWindow = new BrowserWindow({
    width: 300,
    height:  (process.platform=="win32")?230:200,
    resizable: false, frame: false,
    transparent:true,
    title: "Dagom'App",
    'use-content-size': true,
    //"icon":`file://${__dirname}/icon.ico` make a crash on windows! do not uncomment!
  });
  //updateWindow.loadURL(`file://${__dirname}/views/index.html`);
  if(versionInAppData){
    updateWindow.loadURL("file://"+app.getPath("userData")+"/src/views/update.html");
  }
  else {
    updateWindow.loadURL(`file://${__dirname}/views/update.html`);
  }
  updateWindow.focus();
  updateWindow.on("will-navigate", function(e) { e.preventDefault() });
  //updateWindow.openDevTools();
};


// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('activate-with-no-open-windows', function(){
  runApp();
});

app.on('ready', function(){
  ready = true;
  runApp();
});
