"use strict";

var app = require('app'),
    Menu = require('menu'),
    MenuItem = require('menu-item'),
    BrowserWindow = require('browser-window'),
    j = require('electron-jade')({pretty: true}, {}),
    ipc = require("electron").ipcMain;

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
    height: 300,
    'min-width': 400,
    'min-height': 300,
    resizable: false, frame: true,
    type:"dock",
    //'auto-hide-menu-bar': true,
    'use-content-size': true,
  });
  //mainWindow.loadUrl('file://' + __dirname + '/views/SerialMonitorWindow.jade');
  mainWindow.loadUrl('file://' + __dirname + '/views/index.jade');
  mainWindow.focus();
  mainWindow.on("will-navigate", function(e) { e.preventDefault() });

  if (process.platform == 'darwin') {
    var template = [
      {
        label: 'Sikwi Configurator',
        submenu: [
          {
            label: 'Sikwi Configurator',
            selector: 'orderFrontStandardAboutPanel:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Hide Sikwi Configurator',
            accelerator: 'Command+H',
            selector: 'hide:'
          },
          {
            label: 'Hide Others',
            accelerator: 'Command+Shift+H',
            selector: 'hideOtherApplications:'
          },
          {
            label: 'Show All',
            selector: 'unhideAllApplications:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click: function() { app.quit(); }
          },
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'New Serial Monitor',
            click: function() {
              var serialMonitor = new BrowserWindow({
                height: 600,
                width: 500,
                'min-height': 600,
                'min-width': 500,
                resizable: true, frame: false,
                type:"dock",
                //'auto-hide-menu-bar': true,
                'use-content-size': true,
              });
              serialMonitor.loadUrl('file://' + __dirname + '/views/SerialMonitorWindow.jade');
              serialMonitor.focus();
            }
          },
          {
            label: 'Reload',
            accelerator: 'Command+R',
            click: function() { mainWindow.restart(); }
          },
          {
            label: 'Toggle Full Screen',
            accelerator: 'Ctrl+Command+F',
            click: function() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
          },
          {
            label: 'Toggle Developer Tools',
            accelerator: 'Alt+Command+I',
            click: function() { mainWindow.toggleDevTools(); }
          },
        ]
      },
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'Command+Z',
            selector: 'undo:'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+Command+Z',
            selector: 'redo:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: 'Command+X',
            selector: 'cut:'
          },
          {
            label: 'Copy',
            accelerator: 'Command+C',
            selector: 'copy:'
          },
          {
            label: 'Paste',
            accelerator: 'Command+V',
            selector: 'paste:'
          },
          {
            label: 'Select All',
            accelerator: 'Command+A',
            selector: 'selectAll:'
          },
        ]
      },
      {
        label: 'Window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: 'Command+M',
            selector: 'performMiniaturize:'
          },
          {
            label: 'Close',
            accelerator: 'Command+W',
            selector: 'performClose:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Bring All to Front',
            selector: 'arrangeInFront:'
          },
        ]
      },
      /*{
        label: 'Utils',
        submenu: [
          {
            label: 'Override Shield Eeprom',
            click: function(){
              mainWindow.webContents.send('Override_Shield_Eeprom');
            }
          },
        ]
      },*/
      {
        label: 'Help',
        submenu: [
          {
            label: 'Learn More',
            click: function() { require('shell').openExternal('http://electron.atom.io') }
          },
          {
            label: 'Documentation',
            click: function() { require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme') }
          },
          {
            label: 'Community Discussions',
            click: function() { require('shell').openExternal('https://discuss.atom.io/c/electron') }
          },
          {
            label: 'Search Issues',
            click: function() { require('shell').openExternal('https://github.com/atom/electron/issues') }
          }
        ]
      }
    ];

    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  } else {
    var template = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Open',
            accelerator: 'Ctrl+O',
          },
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click: function() { mainWindow.close(); }
          },
        ]
      },
      {
        label: '&View',
        submenu: [
          {
            label: '&Reload',
            accelerator: 'Ctrl+R',
            click: function() { mainWindow.restart(); }
          },
          {
            label: 'Toggle &Full Screen',
            accelerator: 'F11',
            click: function() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
          },
          {
            label: 'Toggle &Developer Tools',
            accelerator: 'Alt+Ctrl+I',
            click: function() { mainWindow.toggleDevTools(); }
          },
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Learn More',
            click: function() { require('shell').openExternal('http://electron.atom.io') }
          },
          {
            label: 'Documentation',
            click: function() { require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme') }
          },
          {
            label: 'Community Discussions',
            click: function() { require('shell').openExternal('https://discuss.atom.io/c/electron') }
          },
          {
            label: 'Search Issues',
            click: function() { require('shell').openExternal('https://github.com/atom/electron/issues') }
          }
        ]
      }
    ];

    menu = Menu.buildFromTemplate(template);
    mainWindow.setMenu(menu);
  }

};
