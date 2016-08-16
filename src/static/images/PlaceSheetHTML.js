(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/PlaceSheetHTML_atlas_.png", id:"PlaceSheetHTML_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"PlaceSheetHTML_atlas_", frames: [[0,139,128,128],[0,0,137,137]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["PlaceSheetHTML_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["PlaceSheetHTML_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Image_1();
	this.instance.setTransform(-22.7,-14.9,0.328,0.204,0,1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2196F3").ss(3,1,1).p("AjzkcIHtAAIBKI5IqHAAg");
	this.shape.setTransform(-1.3,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlDEdIBQo5IHsAAIBLI5g");
	this.shape_1.setTransform(-1.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-30.8,67.9,60);


// stage content:
(lib.PlaceSheetHTML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(33,150,243,0.498)").ss(3,1,1).p("AAAgkIAABJ");
	this.shape.setTransform(155.6,100.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).to({_off:true},11).wait(5));

	// Calque 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(33,150,243,0.498)").ss(3,1,1).p("AAAgkIAABJ");
	this.shape_1.setTransform(155.6,85.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},15).wait(3));

	// Calque 2
	this.instance = new lib.Image();
	this.instance.setTransform(104,-11,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Calque 1
	this.instance_1 = new lib.Symbole1();
	this.instance_1.setTransform(272,184.5,1,1,0,0,0,-0.8,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:-1.3,x:266.3,y:168.5},0).wait(1).to({x:258.1,y:153.9},0).wait(1).to({x:247.1,y:141.1},0).wait(1).to({x:234.1,y:130.5},0).wait(1).to({x:219.6,y:122},0).wait(1).to({x:204.1,y:115.7},0).wait(1).to({x:187.9,y:111.3},0).wait(1).to({x:171.2,y:108.9},0).wait(1).to({x:154.5,y:108.5},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(254,64,103,103);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;