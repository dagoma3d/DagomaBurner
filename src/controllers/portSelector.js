var root = __dirname + "/../";
var DeviceManager = require(_root+"manager/devices.js");

var PortSelectorControllerClass = function($ref){
  var that = this;
  that.selectedDevice = null;
  that.textBox = $("#comSelector p");

  DeviceManager.on("add", function(device){
    that.updateDeviceList(device);
  });

  DeviceManager.on("remove", function(device){
    that.removeDeviceList(device);
  });

  $("select#com").on("change", function(event){
    if(that.selectedDevice != null){
      that.selectedDevice.close();
    }
    that.selectedDevice = DeviceManager.devices[$('select#com').val()];
    DeviceManager.setSelectedDevice(that.selectedDevice);

    //$(".tabsContent").removeClass("disabled");
    that.selectedDevice.open();
  });

  DeviceManager.on("open", function(device){
    that.openDevice();
  })

};

PortSelectorControllerClass.prototype.openDevice = function () {
  var that = this;
  var timeOut3DPrinterSearch;
  $(".tabsContent").addClass("disabled");

  that.textBox.show();
  that.textBox.text("Ouverture du port "+that.selectedDevice.name+"...");

  function no3DPrinterFound(){
    clearTimeout(timeOut3DPrinterSearch);
    that.textBox.text("Aucune imprimante detectée sur ce port !");
    that.selectedDevice.removeListener("ready", deviceReady);
    that.selectedDevice.removeListener("printerFound", printerFound);
    $(".tabsContent").removeClass("disabled");
  }

  function printerFound(){
    no3DPrinterFound();
    that.textBox.text("Imprimante detectée");
    that.selectedDevice.removeListener("printerFound", printerFound);
    //$('select#type').val("melzi");
  }

  function deviceReady(){
    that.textBox.text("Recherche d'une imprimante... (peut prendre jusqu'a 30secondes)");

    that.selectedDevice.removeListener("ready", deviceReady);
    timeOut3DPrinterSearch = setTimeout(function(){
      no3DPrinterFound();
    }, 30000);
    that.selectedDevice.on("printerFound", printerFound);
  }

  if(that.selectedDevice.ready)
    deviceReady();
  else
    that.selectedDevice.on("ready", deviceReady);
};

PortSelectorControllerClass.prototype.updateDeviceList = function(device){
  var that = this;
  device.$select = $('<option val="'+device.portName+'">'+device.portName+'</option>');
  $('select#com').append(device.$select);
  $('select').material_select();
}

PortSelectorControllerClass.prototype.removeDeviceList = function(device){
  device.$select.remove();
}

module.exports = PortSelectorControllerClass;
