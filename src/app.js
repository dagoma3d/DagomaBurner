const electron = require('electron');
const {app} = electron;

var that = this;
var mainWindow = null,
    updateWindow = null,
    requestUpdate = null;

var version = require("./config.json")["build-date"];
if(version == "THE_BUILD_DATE")
  version = -1;

var appRunner = null;
var updateUrl = require("./config.json").updateUrl;
var versionInAppData = false;

try {
  versionInAppData = require(app.getPath("userData")+"/app/config.json")["build-date"];
  console.log("version in Application Directory : ", version);
  console.log("version in AppData : ", versionInAppData);
  if(versionInAppData && versionInAppData != "THE_BUILD_DATE" && versionInAppData >= version){
    updateUrl = require(app.getPath("userData")+"/app/config.json").updateUrl;
    appRunner = require(app.getPath("userData")+"/app/appRunner.js");
    versionInAppData = true;
    console.log("get Application From AppData");
  }else{
    console.log("get Application From Application Directory");
    appRunner = require("./appRunner.js");
  }
}
catch (e) {
  appRunner = require("./appRunner.js");
  console.log("get Application From Application Directory because of an error : ", e);
}

appRunner.run(versionInAppData, updateUrl, __dirname);
