"use strict";

var root = __dirname + "/../";

var AbstractDeviceClass = function(name, child){

	this.child = child;
	this.child.name = name;
	this.child.jQueryElement = null;
	this.child.typeId = 0;
	this.child.version = 0;

	this.child.isSikwiDevice = 0;
	this.child.uid = 0;

	this.child.interval = -1;
	this.child.ready = false;
	this.child.active = false;
	this.child.isBuilding = false;

	this.child.hasShield = false;
	this.child.shieldID = 0;
	this.child.shieldVersion = 0;
	this.child.shieldVariant = 0;

	this.child.shield = "Arduino";

  this.child.isNRFGateway = false;
	//{type:"Arduino", name:"Arduino Uno", uid:12331,active:""},
};

AbstractDeviceClass.prototype.templateObject = function (deviceData){
  var that = this;
	var object = {data:{uid:"others"}, name:that.child.name, uid:that.child.uid};
	var device = deviceData[that.child.typeId];
	if(device != null)
		object.data = device;
  return object;
}

AbstractDeviceClass.prototype.destroy = function ()
{

}

AbstractDeviceClass.prototype.open = function ()
{

}

AbstractDeviceClass.prototype.delete = function()
{
  var that = this;
  that.child.close();
  that.child.emit("delete", that.child);
}

AbstractDeviceClass.prototype.close = function()
{
}

AbstractDeviceClass.prototype.pause = function(portName)
{
}

AbstractDeviceClass.prototype.resume = function(portName)
{
}


module.exports = AbstractDeviceClass;
