"use strict";

var _root = __dirname + "/../";
var DeviceManager = require(_root+"manager/devices.js");
var FirmwareController = require(_root+"controllers/firmware.js");
var PortSelectorController = require(_root+"controllers/portSelector.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");

const {remote} = require('electron');
const {Menu, MenuItem} = remote;

var template = [
  {
    label: 'Dagoma Doctor',
    submenu: [
      {
        label: 'Dagoma Doctor',
        selector: 'orderFrontStandardAboutPanel:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Hide Dagoma Doctor',
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
        click() { require('electron').remote.app.quit(); }
      },
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'Command+R',
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload();
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
          if (focusedWindow)
            focusedWindow.webContents.toggleDevTools();
        }
      }
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
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

( function( $ ) {
  NavManager.setContainer($("#pageContainer"));
  NavManager.setPage("home");
  $("#navHome").on("click", function(){
    NavManager.setPage("home")
  });

  DeviceManager.on("remove", function(device){
    if(device == DeviceManager.selectedDevice){
      ModalManager.hideLoader();
      NavManager.setPage("home");
      ModalManager.alert("D&eacute;connexion", "Votre imprimante s'est d&eacute;connect&eacute;e!");
    }
  })


  /*var portSelectorController = new PortSelectorController()
  var firmwareController = new FirmwareController(portSelectorController);
  var diagnosticController = new DiagnosticController(portSelectorController);
  */
  $("#navbar a.close").click(function(){
    remote.getCurrentWindow().close();
  });

  $('select').material_select();

  ModalManager.hideLoader();

  $("#version").text("V"+require(_root+"package.json").version);

} )( window.jQuery );
