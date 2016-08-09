var _root = __dirname + "/../";

var lodash = require("lodash");
var DeviceManager = require(_root+"manager/devices.js");
var GCodeSender = require(_root+"controllers/utils/GCodeSender.js");
var GCodeParser = require(_root+"controllers/utils/GCodeParser.js");
var GCodePrinter = require(_root+"controllers/utils/GCodePrinter.js");

var DiagnosticControllerClass = function(oPortSelectorController){
  var that = this;
  that.portSelector = oPortSelectorController;
  that.needToGoUp = true;

  DeviceManager.on("printerFound", function(device){
    GCodeSender.send(["M105"], false, function(response){
      console.log("M105", response);
    });
  })

  $('.modal-trigger').leanModal();

  GCodeSender.addButtonGCode("#home", ["G28"], true);

  GCodeSender.addButtonGCode("#zp01", ["G91", "G0 Z0.1"], false);
  GCodeSender.addButtonGCode("#zp1", ["G91", "G0 Z1"], false);
  GCodeSender.addButtonGCode("#zp10", ["G91", "G0 Z10"], false);
  GCodeSender.addButtonGCode("#zm01", ["G91", "G0 Z-0.1"], false);
  GCodeSender.addButtonGCode("#zm1", ["G91", "G0 Z-1"], false);
  GCodeSender.addButtonGCode("#zm10", ["G91", "G0 Z-10"], false);
  GCodeSender.addButtonGCode("#stopMotors", ["M18"], false);


  $("#diagnostic .speedControl a").click(function(){
    $("#diagnostic .speedControl a").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#diagnostic .btnPosition").click(function(){
    var gcode = "G0 ";
    switch ($(this)[0].id) {
      case "xp":
        gcode += "X";
        break;
      case "xm":
        gcode += "X-";
        break;
      case "yp":
        gcode += "Y";
        break;
      case "ym":
        gcode += "Y-";
        break;
      case "zp":
        gcode += "Z";
        break;
      case "zm":
        gcode += "Z-";
        break;
    }

    gcode += $("#diagnostic .speedControl .selected").text();

    GCodeSender.send(["G91", gcode], false);
  });

  $("#diagnostic #spirale").click(function(){
      that.needToStop = false;

      GCodeSender.send([
        "G28 X Y",
        "M106 S160",
        "M109 S180",
        "M104 S215",
        "G28",
      ],
      true,
      function(){
        GCodeSender.send([
          "M114",
        ],
        true,
        function(response){

          var regex = /X:(\d+.\d+) Y:(\d+.\d+) Z:(\d+.\d+)/.exec(response);
          var centerx = parseFloat(regex[1]);
          var centery = parseFloat(regex[2]);
          var zOffset = -parseFloat(regex[3]);
          var initialZ = 0.26;
          console.log("ok", regex, centerx, centery, zOffset);
          that.z = initialZ;

          GCodeSender.send([
            "G29; Detailed Z-Probe",
            "G90; Set to absolute positioning if not",
            "G1 X100 Y200 Z5 F3000",
            "G1 Z0",
            "M82 ;set extruder to absolute mode",
            "G92 E0 ;zero the extruded length",
            "G1 F200 E3 ;extrude 10mm of feed stock",
            "G92 E0 ;zero the extruded length again",
            "G1 F60",
            "G1 Y190",
            "G90",
            "G0 X"+centerx+" Y"+centery+" F3000",
            "G0 Z"+initialZ
          ],
          true,
          function(){
            var it = 0;

            var dist = 1; //5; // distance entre chaque point
            var sep = 2; //2; //separation entre les lignes
            var r = dist;
            var b = sep / (2 * Math.PI);
            var phi = r / b;
            var x,y;
            var volume = dist * 0.2 * 0.8;// (à ajuster)
            var e = volume/(Math.pow(1.75/2, 2)*Math.PI);

            function finishPrint(){
              zOffset = zOffset + that.z - initialZ;
              zOffset = zOffset.toFixed( 2 );
              console.log("zOffset", zOffset);

              GCodeSender.send([
                "M104 S0     ;extruder heater off",
                "M106 S255     ;start fan full power",
                "M140 S0      ;heated bed heater off (if you have it)",
                "G91        ;relative positioning",
                "G1 E-1 F300  ;retract the filament a bit before lifting the nozzle, to release some of the pressure",
                "G1 Z+3 E-2 F60  ;move Z up a bit and retract filament even more",
                "G28 X0 Y0  ;move X/Y to min endstops, so the head is out of the way;",
                "M84      ;shut down motors",
                "M851 Z"+zOffset,
                "M500",
              ],
              true,
              function(){
                alert("Z-offset : "+zOffset);
              });
            }

            function doIteration(){
              it++;
              if(that.needToStop){
                return finishPrint();
              }
              phi += dist / r;
              r = b * phi;
              x = r * Math.cos(phi) + centerx;
              y = r * Math.sin(phi) + centery;
              var gcode = "G0 Z"+that.z+" X"+x+" Y"+y+" E"+(e*it)+" F1000"

              GCodeSender.send([gcode],
                false,
                function(){
                  doIteration();
                });
            }
            doIteration();
          });
        });
      });
  });

  $("#diagnostic #pastille").click(function(){
    GCodeParser(_root+"/pastille.g", function(datas){
      GCodePrinter.print(datas, true, false, 50, 50, 0, function(){
        GCodePrinter.print(datas, false, false, 70, 50, 0, function(){
          GCodePrinter.print(datas, false, false, 90, 50, 0, function(){
            GCodePrinter.print(datas, false, false, 110, 50, 0, function(){
              GCodePrinter.print(datas, false, false, 130, 50, 0, function(){
                GCodePrinter.print(datas, false, false, 130, 70, 0, function(){
                  GCodePrinter.print(datas, false, false, 110, 70, 0, function(){
                    GCodePrinter.print(datas, false, false, 90, 70, 0, function(){
                      GCodePrinter.print(datas, false, false, 70, 70, 0, function(){
                        GCodePrinter.print(datas, false, false, 50, 70, 0, function(){
                          GCodePrinter.print(datas, false, false, 50, 90, 0, function(){
                            GCodePrinter.print(datas, false, true, 70, 90, 0, function(){

                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  $("#diagnostic #monter").click(function(){
      that.z += 0.1;
      GCodePrinter.insert(["G91", "G0 Z1", "G90"]);
  });
  $("#diagnostic #descendre").click(function(){
      that.z -= 0.1;
      GCodePrinter.insert(["G91", "G0 Z-1", "G90"]);
  });
  $("#diagnostic #stop").click(function(){
      that.needToStop = true;
  });

  $("#diagnostic #zoffset").click(function(){
      GCodeSender.send([
        "M851 Z-4",
        "G28",
        "G91",
        "G0 Z5"
      ],
      true,
      function(){
        $('#modalZoffset').openModal({
          dismissible:false,
          complete: function(){
            GCodeSender.send(["M114"], true, function(response){
              var zoffset = +(response.split("Z:")[1].split(" ")[0]);
              console.log(zoffset);
              zoffset = -4+zoffset;
              zoffset = zoffset.toFixed( 2 );
              GCodeSender.send([
                "M851 Z"+zoffset,
                "M500",
                "G28",
                "G90",
                "G0 Z0", //origine auto : besoin pour que le z soit pris en compte
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

function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}

module.exports = DiagnosticControllerClass;
