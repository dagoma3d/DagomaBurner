"use strict";

var _root = __dirname + "/../";

var NavManagerClass = function NavManagerClass(){

}

NavManagerClass.prototype.setContainer = function ($container) {
  this.container = $container;
};

NavManagerClass.prototype.setPage = function (page) {
  if(page=="home")
    $("#navHome").hide();
  else
    $("#navHome").show();

  var that = this;
  if(that.page){
    that.page.dispose();
  }
  that.container.empty();
  that.page = new (require(_root+"pages/"+page+".js"))();
  that.page.load(function(){
    that.container.append(that.page.content);
  });
};

NavManagerClass.instance = null;

NavManagerClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new NavManagerClass();
    }
    return this.instance;
}

module.exports = NavManagerClass.getInstance();
