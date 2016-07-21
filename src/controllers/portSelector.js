var DeviceManager = require(_root+"manager/devices.js");

var PortSelectorControllerClass = function($ref){
  var that = this;
  that.connectedDevice = null;
  that.textBox = $("#comSelector p");

  DeviceManager.on("add", function(device){
    updateDeviceList(device);
  });

  DeviceManager.on("remove", function(device){
    console.log("remove", device);
    removeDeviceList(device);
  });

  $("select#com").on("change", function(event){
    if(that.connectedDevice != null){
      that.connectedDevice.close();
    }
    //$(".tabsContent").removeClass("disabled");
    that.selectedDevice().open();
  });

  DeviceManager.on("open", function(device){
    that.openDevice();
  })

};

PortSelectorControllerClass.prototype.selectedDevice = function () {
  return DeviceManager.devices[$('select#com').val()];
};

PortSelectorControllerClass.prototype.openDevice = function () {
  var that = this;
  var timeOut3DPrinterSearch;
  $(".tabsContent").addClass("disabled");

  that.connectedDevice = that.selectedDevice();
  that.textBox.show();
  that.textBox.text("Ouverture du port "+that.connectedDevice.name+"...");

  function no3DPrinterFound(){
    clearTimeout(timeOut3DPrinterSearch);
    that.textBox.text("Aucune imprimante detectée sur ce port !");
    that.connectedDevice.removeListener("ready", deviceReady);
    that.connectedDevice.removeListener("printerFound", printerFound);
    $(".tabsContent").removeClass("disabled");
  }

  function printerFound(){
    no3DPrinterFound()
    that.textBox.text("Imprimante detectée");
    that.connectedDevice.removeListener("printerFound", printerFound);
    //$('select#type').val("melzi");
  }

  function deviceReady(){
    that.textBox.text("Recherche d'une imprimante... (peut prendre jusqu'a 30secondes)");

    that.connectedDevice.removeListener("ready", deviceReady);
    timeOut3DPrinterSearch = setTimeout(no3DPrinterFound, 30000);
    that.connectedDevice.on("printerFound", printerFound);
  }
  if(that.connectedDevice.ready)
    deviceReady();
  else
    that.connectedDevice.on("ready", deviceReady);

};

function updateDeviceList(device){
  device.$select = $('<option val="'+device.portName+'">'+device.portName+'</option>');
  $('select#com').append(device.$select);
  $('select').material_select();
}

function removeDeviceList(device){
  device.$select.remove();
}


module.exports = PortSelectorControllerClass;
