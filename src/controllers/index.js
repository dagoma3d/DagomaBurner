"use strict";

var _root = __dirname + "/../";
var DeviceManager = require(_root+"manager/devices.js");
var FirmwareController = require(_root+"controllers/firmware.js");
var PortSelectorController = require(_root+"controllers/portSelector.js");
var NavManager = require(_root+"manager/NavManager.js");
var ModalManager = require(_root+"manager/modalManager.js");
var ViewLoader = require(_root+"controllers/utils/ViewLoader.js");
var I18n = require(_root+"i18n/i18n.js");
I18n.initLanguage();

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
          if(window.currentBounds && focusedWindow){
            focusedWindow.setBounds(window.currentBounds);
            focusedWindow.setResizable(false);
          }
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

  setView();

} )( window.jQuery );

function setView(){
  ViewLoader("container", function(content){
    $("body>#content").empty();
    $("body>#content").append(content);
    initPage();
  });
}

function initPage(){

  const shell = require('electron').shell;

  $(document).on('click', 'a[href^="http"], a[href^="mailto:"]', function(event) {
      event.preventDefault();
      shell.openExternal(this.href);
  });

  NavManager.setContainer($("#pageContainer"));
  NavManager.setPage("home");
  $("#navHome").on("click", function(){
    NavManager.setPage("home")
  });
  $("#navBack").on("click", function(){
    NavManager.back();
  });

  DeviceManager.on("remove", function(device){
    if(device == DeviceManager.selectedDevice){
      DeviceManager.selectedDevice = null;

      if(NavManager.currentPage != "zoffset/3_printerConnection" && NavManager.currentPage != "home "){
        ModalManager.hideLoader();
        NavManager.setPage("home");
        ModalManager.alert(I18n.currentLanguage().disconnected_title, I18n.currentLanguage().disconnected_message);
      }
    }
  })

  var timeOutWelcome = setTimeout(function(){
    $("#welcome").fadeOut(1000)
  }, 4000);

  $("#welcome").on("click", function(){
    clearTimeout(timeOutWelcome);
    $("#welcome").fadeOut(100);
  });

  var $dropZone = $("html");

  $dropZone.on("dragover", function (e) {
    return false;
  });

  $dropZone.on("dragleave", function (e) {
    return false;
  });

  $dropZone.on("drop", function(e){
    if(NavManager.currentPage != "firmware/4_firmware")
      e.preventDefault();
  });

  /*var portSelectorController = new PortSelectorController()
  var firmwareController = new FirmwareController(portSelectorController);
  var diagnosticController = new DiagnosticController(portSelectorController);
  */

  $('.dropdown-button').dropdown();
  $("#languageFR").click(function(){
    $("#language img").attr("src", $(this).find("img").attr("src"));
    I18n.setLanguage("fr");
    setView();
  });

  $("#languageEN").click(function(){
    $("#language img").attr("src", $(this).find("img").attr("src"));
    I18n.setLanguage("en");
    setView();
  });

  $("#language img").attr("src", "../static/images/flags/"+I18n.currentLanguageID+".gif");

  $("#navbar a.close").click(function(){
    remote.getCurrentWindow().close();
  });

  $('select').material_select();

  ModalManager.hideLoader();
  //ModalManager.setProgress(50);
  $('.tooltipped').tooltip({delay: 50});

  $("#version").text("V"+require(_root+"package.json").version);

  if(require(_root+"package.json").beta){
    $("body").addClass("beta");
  }

  $("#savBar").hide();
}
