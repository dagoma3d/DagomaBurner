var PortSelectorControllerClass = function($ref){

  DeviceManager.on("add", function(device){
    updateDeviceList(device);
  });

  DeviceManager.on("remove", function(device){
    console.log("remove", device);
    removeDeviceList(device);
  });

};

PortSelectorControllerClass.prototype.selectedDevice = function () {
  return DeviceManager.readyDevices[$('select#com').val()];
};

function updateDeviceList(device){
  device.$select = $('<option val="'+device.portName+'">'+device.portName+'</option>');
  $('select#com').append(device.$select);
}

function removeDeviceList(device){
  device.$select.remove();
}


module.exports = PortSelectorControllerClass;
