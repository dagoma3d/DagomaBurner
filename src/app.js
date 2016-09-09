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
var mainWindow = null,
    updateWindow = null,
    requestUpdate = null;

var version = require("./config.json")["build-date"];
if(version == "THE_BUILD_DATE")
  version = -1;

var updateUrl = require("./config.json").updateUrl;
var versionInAppData = false;

global.state = {
  ready : false,
  hasUpdate : false,
  updateChecked : false,
  requestUpdate : false}

checkCurrentVersionInData();

checkForUpdate();

//200
//304
function runApp(){
  if(global.state.ready == false)
    return console.log("Run App return ready == false");

  if(global.state.updateChecked == false)
    return console.log("Run App return updateChecked == false");

  if(global.state.hasUpdate == false && mainWindow == null)
    return openWindow();
  else if(openUpdateWindow == null)
    return openUpdateWindow();

  return console.log("Run App return openUpdateWindow or openWindow Exist");
}

function openWindow(){
  console.log("open Main Window");
  if(mainWindow)
    return;

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
    mainWindow.loadURL("file://"+app.getPath("userData")+"/app/views/index.html");
  }
  else {
    mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  }
  mainWindow.focus();
  mainWindow.on("will-navigate", function(e) { e.preventDefault() });
  //mainWindow.openDevTools();
  if(updateWindow)
    updateWindow.close();
};

function openUpdateWindow(){
  if(updateWindow)
    return;

  updateWindow = new BrowserWindow({
    width: 300,
    height:  (process.platform=="win32")?280:250,
    resizable: false, frame: false,
    title: "Dagom'App",
    'use-content-size': true,
    //"icon":`file://${__dirname}/icon.ico` make a crash on windows! do not uncomment!
  });
  //updateWindow.loadURL(`file://${__dirname}/views/index.html`);
  if(versionInAppData){
    updateWindow.loadURL("file://"+app.getPath("userData")+"/app/views/update.html");
  }
  else {
    updateWindow.loadURL(`file://${__dirname}/views/update.html`);
  }
  updateWindow.focus();
  updateWindow.on("will-navigate", function(e) { e.preventDefault() });
  //updateWindow.openDevTools();
  updateWindow.webContents.on('did-finish-load', () => {
    if(global.state.updateChecked && global.state.hasUpdate)
      updateWindow.webContents.send('hasUpdate');
  });
};

function checkForUpdate(){
  if(ENABLE_AUTO_UPDATE){
    var time = process.hrtime();

    ipcMain.on("acceptUpdate", function(e){
      request
        .get(updateUrl)
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
      console.log("Run App from ", "User Discard Update");
      runApp();
    });

    console.log("updateUrl : ", updateUrl);
    if(!updateUrl || updateUrl == "THE_UPDATE_URL"){
      console.error("No conform update url");
      global.state.updateChecked = true;
      console.log("Run App from ", "No conform update url");
      runApp();
    }else{
      requestUpdate = request
      .get(updateUrl)
      //.get("http://dist.dagoma.fr/dagomapp/update?v="+version)
      .on('response', function(response) {

        var diff = process.hrtime(time);
        console.log(`get status code in  ${(diff[0] * 1e9 + diff[1])/1e9} seconds : ${response.statusCode}`);

        if(response.statusCode == 200){
          global.state.hasUpdate = true;
          global.state.updateChecked = true;
          console.log("Run App from ", "Status 200");
          runApp();
        }else{
          global.state.updateChecked = true;
          console.log("Run App from ", "Status != 200");
          runApp();
        }
      });
    }
  }
  else{
    console.log("Run App from ", "ENABLE_AUTO_UPDATE FALSE");
    global.state.updateChecked = true;
    runApp();
  }
}

function checkCurrentVersionInData(){
  try {
    var versionInAppData = require(app.getPath("userData")+"/app/config.json")["build-date"];
    console.log("version in Application Directory : ", version);
    console.log("version in AppData : ", versionInAppData);
    if(versionInAppData && versionInAppData != "THE_BUILD_DATE" && versionInAppData >= version){
      updateUrl = require(app.getPath("userData")+"/app/config.json").updateUrl;
      console.log("get Application From AppData");
      versionInAppData = true;
    }else{
      console.log("get Application From Application Directory");
    }

  }
  catch (e) {
    console.log("get Application From Application Directory");
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('activate-with-no-open-windows', function(){
  console.log("Run App from ", "activate-with-no-open-windows");
  runApp();
});

app.on('ready', function(){
  console.log("Run App from ", "ready");
  global.state.ready = true;
  runApp();
});
