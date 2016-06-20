"use strict";

var _root = __dirname + "/../";
var DeviceManager = require(_root+"manager/devices.js");
var CodeBuilder = require(_root+"manager/codeBuilder.js");

const {remote} = require('electron');
const {Menu, MenuItem} = remote;

if (process.platform == 'darwin') {
  var template = [
    {
      label: 'Dagoma Burner',
      submenu: [
        {
          label: 'Dagoma Burner',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide Dagoma Burner',
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
          click() { app.quit(); }
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
          click() { mainWindow.close(); }
        },
      ]
    },
    {
      label: '&View',
      submenu: [
        {
          label: '&Reload',
          accelerator: 'Ctrl+R',
          click() { mainWindow.restart(); }
        },
        {
          label: 'Toggle &Full Screen',
          accelerator: 'F11',
          click() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
        },
        {
          label: 'Toggle &Developer Tools',
          accelerator: 'Alt+Ctrl+I',
          click() { mainWindow.toggleDevTools(); }
        },
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Learn More',
          click() { require('shell').openExternal('http://electron.atom.io') }
        },
        {
          label: 'Documentation',
          click() { require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme') }
        },
        {
          label: 'Community Discussions',
          click() { require('shell').openExternal('https://discuss.atom.io/c/electron') }
        },
        {
          label: 'Search Issues',
          click() { require('shell').openExternal('https://github.com/atom/electron/issues') }
        }
      ]
    }
  ];
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

( function( $ ) {
  $("#printConfig").hide();
  $("#globalLoader").hide();

  DeviceManager.on("add", function(device){
    updateDeviceList(device);
  });

  DeviceManager.on("remove", function(device){
    updateDeviceList(device);
  });

  var $dropZone = $("html");
  var $dragZone = $(".drag");
  var $btn = $("#burn");
  var hasFile = false;
  var file;
  var fileName;
  var counter = 0;

  $dropZone.on("dragenter", function (e) {
    counter++;
  });

  $dropZone.on("dragover", function (e) {
    $dragZone.removeClass("hide");
    $dragZone.addClass("hover");
    $(".file").addClass("hide");
    return false;
  });

  $dropZone.on("dragleave", function (e) {
    counter--;
    if (counter === 0) {
      $dragZone.removeClass("hover");
      if(hasFile){
        $(".file").removeClass("hide");
        $dragZone.addClass("hide");
      }
    }
    return false;
  });

  $dropZone.on("drop", function(e){
    e.preventDefault();

    counter = 0;
    $dragZone.removeClass("hover");

    file = e.originalEvent.dataTransfer.files[0];
    fileName = file.name;
    var fileNameSplit = fileName.split(".");
    if(fileNameSplit[fileNameSplit.length-1] == "hex"){
      hasFile = true;
      $(".file .fileName").text(fileName);
      $(".file").removeClass("hide");
      $dragZone.addClass("hide");
    }

  });

  $btn.on("click", function(){
    $("#globalLoader").show();
    new CodeBuilder(DeviceManager.readyDevices[$('select#com').val()], file.path, $('select#type').val(), function(success){
      $("#globalLoader").hide();
      if(success)
        alert("Success");
      else
        alert("Error");
    });
  })

} )( window.jQuery );

function updateDeviceList(device){
  $('select#com').append('<option val="'+device.portName+'">'+device.portName+'</option>');
}
