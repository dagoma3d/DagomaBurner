var lodash = require("lodash");

var DiagnosticControllerClass = function(oPortSelectorController){
  var that = this;
  that.portSelector = oPortSelectorController;

  $('.modal-trigger').leanModal();

  that.addButtonGCode("#home", ["G28"], true);

  that.addButtonGCode("#zp01", ["G91", "G0 Z0.1"], false);
  that.addButtonGCode("#zp1", ["G91", "G0 Z1"], false);
  that.addButtonGCode("#zp10", ["G91", "G0 Z10"], false);
  that.addButtonGCode("#zm01", ["G91", "G0 Z-0.1"], false);
  that.addButtonGCode("#zm1", ["G91", "G0 Z-1"], false);
  that.addButtonGCode("#zm10", ["G91", "G0 Z-10"], false);

  $("#diagnostic #zoffset").click(function(){
      that.sendGCodes([
        "M851 Z-4",
        "G28",
        /*"M109 S180",*/
        "G91",
        "G0 Z5",
      ],
      true,
      function(){
        $('#modalZoffset').openModal({
          dismissible:false,
          complete: function(){
            that.sendGCodeAndGetResponse("M114", true, function(response){
              var zoffset = +(response.split("Z:")[1].split(" ")[0]);
              console.log(zoffset);
              zoffset = -4+zoffset;
              zoffset = zoffset.toFixed( 2 );
              that.sendGCodes([
                "M851 Z"+zoffset,
                "M500",
              ],
              true,
              function(){
                alert("z-offset réglé à : "+zoffset );
              })
            })
          }
        });
      })
  });

};

DiagnosticControllerClass.prototype.addButtonGCode = function (id, gCodes, showLoader, callback) {
  var that = this;

  $("#diagnostic "+id).click(function(){
    that.sendGCodes(gCodes, showLoader, callback);
  });
};

DiagnosticControllerClass.prototype.sendGCodes = function (gCodes, showLoader, callback) {
  var that = this;

  if(showLoader)
    $("#globalLoader").show();
  that.sendGCodeRecursive(lodash.clone(gCodes), function(){
    if(showLoader)
      $("#globalLoader").hide();
    if(callback)
      callback();
  });
};

DiagnosticControllerClass.prototype.sendGCodeAndGetResponse = function  (gCode, showLoader, callback) {
  var that = this;

  if(showLoader)
    $("#globalLoader").show();
  that.portSelector.selectedDevice().send(gCode+"\r\n");
  that.waitForOK(function(result){
    if(showLoader)
      $("#globalLoader").hide();
    if(callback)
      callback(result);
  });
}


DiagnosticControllerClass.prototype.sendGCodeRecursive = function (gCodes, callback) {
  var that = this;

  if(gCodes.length == 0){
    return callback();
  }
  var gCode = gCodes.shift();
  that.portSelector.selectedDevice().send(gCode+"\r\n");
  that.waitForOK(function(){
    that.sendGCodeRecursive(gCodes, callback);
  });
};



DiagnosticControllerClass.prototype.waitForOK = function (callback) {
  var that = this;
  var _data;

  var dataHandler = function(data){
    if(data == "OK"){
      that.portSelector.selectedDevice().removeListener("receive", dataHandler);
      if(callback){
        return callback(_data);
      }
    }

    _data += data;
  };

  that.portSelector.selectedDevice().on("receive", dataHandler);
};

module.exports = DiagnosticControllerClass;
