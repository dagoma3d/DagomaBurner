"use strict";

var _root = __dirname + "/../";

var NavManagerClass = function NavManagerClass(){
  this.backPage = [];
}

NavManagerClass.prototype.setContainer = function ($container) {
  var that = this;
  this.container = $container;
  this.currentPage = "";
};

NavManagerClass.prototype.setPage = function (page) {
  var that = this;
  if(that.page){
    that.page.dispose();
  }

  this.backPage.push(this.currentPage);
  this.currentPage = page;

  that.container.empty();
  that.page = new (require(_root+"controllers/pages/"+page+".js"))();
  that.page.load(function(){
    that.container.append(that.page.content);
    that.page.show();
  });

  this.updateNavButton();

}

NavManagerClass.prototype.updateNavButton = function(){
  if(this.currentPage=="home"){
    $("#navHome").hide();
    $("#navBack").hide();
  }
  else{
    $("#navHome").show();
    if(this.backPage[this.backPage.length-1] == "home"){
      $("#navBack").hide();
    }else{
      $("#navBack").show();
    }
  }
}

NavManagerClass.prototype.back = function(){
  var backpage = this.backPage.pop();
  if(backpage == ""){
    backpage = "home";
  }
  this.setPage(backpage);
  this.backPage.pop();
  this.updateNavButton();
}

NavManagerClass.instance = null;

NavManagerClass.getInstance = function(){
    if(this.instance === null){
        this.instance = new NavManagerClass();
    }
    return this.instance;
}

module.exports = NavManagerClass.getInstance();
