"use strict";

var root = __dirname + "/../";

var I18nClass = function I18nClass(){

}

I18nClass.prototype.currentLanguage = function(device){
  return require("./fr_fr.json");
}

I18nClass.instance = null;

I18nClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new I18nClass();
    }
    return this.instance;
}

module.exports = I18nClass.getInstance();
