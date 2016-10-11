"use strict";

var root = __dirname + "/../";
var osLocale = require('os-locale');

var I18nClass = function I18nClass(){
  this.context = null;
}

I18nClass.prototype.initLanguage = function(){
  var local = osLocale.sync();
  console.log("local", local);
  this.setLanguage(local);
}

I18nClass.prototype.setLanguage = function(local){
  if(local.split("_")[0] == "fr"){
    //this.context = require("./fr.json");
  //}else{
    this.context = require("./en.json");
  }
}

I18nClass.prototype.currentLanguage = function(){
  return this.context;
}

I18nClass.instance = null;

I18nClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new I18nClass();
    }
    return this.instance;
}

module.exports = I18nClass.getInstance();
