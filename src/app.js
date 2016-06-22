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
    width: 400,
    height: 320,
    'min-width': 400,
    'min-height': 320,
    resizable: false, frame: true,
    //type:"dock",
    //'auto-hide-menu-bar': true,
    'use-content-size': true,
  });
  //mainWindow.loadUrl('file://' + __dirname + '/views/SerialMonitorWindow.jade');
  mainWindow.loadURL(`file://${__dirname}/views/index.html`);
  mainWindow.focus();
  mainWindow.on("will-navigate", function(e) { e.preventDefault() });
  //mainWindow.openDevTools();
};
