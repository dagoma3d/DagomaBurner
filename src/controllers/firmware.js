var FirmwareControllerClass = function(oPortSelectorController){
  var $dropZone = $("html");
  var $dragZone = $("#firmware .drag");
  var $btn = $("#firmware #burn");
  var hasFile = false;
  var file;
  var fileName;
  var counter = 0;
  var portSelectorController = oPortSelectorController;

  $dragZone.addClass("disabled");

  $('select#type').on("change", function(e){
    $dragZone.removeClass("disabled");
  });

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
    if(file){
      fileName = file.name;
      var fileNameSplit = fileName.split(".");
      if(fileNameSplit[fileNameSplit.length-1] == "hex"){
        hasFile = true;
        $(".file .fileName").text(fileName);
        $(".file").removeClass("hide");
        $dragZone.addClass("hide");
      }
    }

  });

  $btn.on("click", function(){
    $("#globalLoader").show();
    new CodeBuilder(portSelectorController.selectedDevice(), file.path, $('select#type').val(), function(success){
      $("#globalLoader").hide();
      if(success)
        alert("Success");
      else
        alert("Error");
    });
  })
};


module.exports = FirmwareControllerClass;
