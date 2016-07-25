const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {remote} = electron;
const {ipcRenderer, shell} = electron;
//const {Menu, MenuItem} = remote;

var mainWindow = null;
var menu = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('activate-with-no-open-windows', function(){
  openWindow();
});

app.on('ready', function(){
  openWindow();
});

function openWindow(){
  mainWindow = new BrowserWindow({
    width: 500,
    height:  (process.platform=="win32")?450:420,
    resizable: false, frame: false,
    //type:"dock",
    //'auto-hide-menu-bar': true,
    title: "DagomaDoctor",
    'use-content-size': true,
    //"icon":`file://${__dirname}/icon.ico` make a crash on windows! do not uncomment!
  });
  //mainWindow.loadUrl('file://' + __dirname + '/views/SerialMonitorWindow.jade');
  mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  mainWindow.focus();
  mainWindow.on("will-navigate", function(e) { e.preventDefault() });
  mainWindow.openDevTools();
};
