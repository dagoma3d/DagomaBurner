"use strict";



var GCodeMakerClass = function(device){

}

GCodeMakerClass.prototype.addButtonGCode = function (id, gCodes, showLoader, callback) {
  var that = this;

  $("#diagnostic "+id).click(function(){
    that.sendGCodes(gCodes, showLoader, callback);
  });
};
