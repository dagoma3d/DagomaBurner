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

var updateUrl = require("./config.json").updateUrl;
var versionInAppData = false;

global.state = {
  ready : false,
  hasUpdate : false,
  requestUpdate : false,
  hasUpdate : false
}

checkCurrentVersionInData();

checkForUpdate();

//200
//304
function runApp(){
  if(global.state.ready && global.state.updateChecked){
    openWindow();
  }
  else if(!global.state.updateChecked && !global.state.updateWindow){
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
  //mainWindow.openDevTools();
  if(updateWindow)
    updateWindow.close();
};

function openUpdateWindow(){
  updateWindow = new BrowserWindow({
    width: 300,
    height:  (process.platform=="win32")?280:250,
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
  updateWindow.webContents.on('did-finish-load', () => {
    if(global.state.updateChecked && global.state.hasUpdate)
      updateWindow.webContents.send('hasUpdate');
  });
};

function checkForUpdate(){
  if(ENABLE_AUTO_UPDATE){
    var time = process.hrtime();

    ipcMain.on("acceptUpdate", function(e){
      console.log("file://"+app.getPath("userData")+"/src.zip");
      request
        .get(updateUrl)
        .pipe(ws = fs.createWriteStream(app.getPath("userData")+"/src.zip"));

      ws.on('finish', function() {
        console.log("finish Auto Update");

        fs
          .createReadStream(app.getPath("userData")+"/src.zip")
          .pipe(unzip.Extract({ path: app.getPath("userData")+"/" }))
          .on('error', function(err) {
              console.log("unzip error", err);

              checkCurrentVersionInData();
              global.state.updateChecked = true;
              runApp();
            })
          .on('finish', function(err) {
              console.log("unzip finish", err);
              checkCurrentVersionInData();
              global.state.updateChecked = true;
              runApp();
            });

      });
    });

    ipcMain.on("discardUpdate", function(e){
      console.log("getDiscardUpdate", e);

      global.state.updateChecked = true;
      runApp();
    });

    if(!updateUrl || updateUrl == "THE_UPDATE_URL"){
      console.error("no update url");
      global.state.updateChecked = true;
      runApp();
    }else{
      console.log("updateUrl", updateUrl);

      requestUpdate = request
      .get(updateUrl)
      //.get("http://dist.dagoma.fr/dagomapp/update?v="+version)
      .on('response', function(response) {

        var diff = process.hrtime(time);
        console.log(`Benchmark took ${(diff[0] * 1e9 + diff[1])/1e9} nanoseconds`);

        if(response.statusCode == 200){
          global.state.hasUpdate = true;
          global.state.updateChecked = true;
          console.log(response.headers['content-type']) // 'image/png'
        }else{
          global.state.updateChecked = true;
          runApp();
        }
      });
    }

      //.pipe(request.put('http://mysite.com/img.png'))
  }
  else{
    global.state.updateChecked = true;
    runApp();
  }
}

function checkCurrentVersionInData(){
  try {
    updateUrl = require(app.getPath("userData")+"/src/package.json").updateUrl;
    versionInAppData = true;
  }
  catch (e) {

  }
  console.log("get version from appData", versionInAppData);
}

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('activate-with-no-open-windows', function(){
  runApp();
});

app.on('ready', function(){
  global.state.ready = true;
  runApp();
});
