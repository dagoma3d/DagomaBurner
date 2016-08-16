(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 110,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/MoveNozzleHTML_atlas_.png", id:"MoveNozzleHTML_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"MoveNozzleHTML_atlas_", frames: [[0,139,128,128],[0,0,137,137]]}
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
	this.spriteSheet = ss["MoveNozzleHTML_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["MoveNozzleHTML_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Image_1();
	this.instance.setTransform(-22.7,-14.9,0.328,0.204,0,1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlDEdIBQo5IHsAAIBLI5g");
	this.shape.setTransform(-1.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-29.3,64.9,57);


(lib.Interpoler2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Image();
	this.instance.setTransform(-51.5,-51.5,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Image();
	this.instance.setTransform(-51.5,-51.5,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103,103);


// stage content:
(lib.MoveNozzleHTML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.Interpoler1("synched",0);
	this.instance.setTransform(54.5,40.5);

	this.instance_1 = new lib.Interpoler2("synched",0);
	this.instance_1.setTransform(54.5,71.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:63.8},6,cjs.Ease.get(-1)).to({_off:true,y:71.5},6,cjs.Ease.get(1)).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},6,cjs.Ease.get(1)).to({y:63.8},6,cjs.Ease.get(-1)).to({y:41.6},5,cjs.Ease.get(1)).wait(1));

	// Calque 7
	this.instance_2 = new lib.Symbole1();
	this.instance_2.setTransform(53.9,108.5,1,1,0,0,0,-0.8,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:48.9},0).wait(1).to({x:53.9},0).wait(1).to({x:58.9},0).wait(1).to({x:53.9},0).wait(1).to({x:48.9},0).wait(1).to({x:53.9},0).wait(1).to({x:58.9},0).wait(1).to({x:53.9},0).wait(9).to({x:58.9},0).wait(1).to({x:53.9},0).wait(1).to({x:48.9},0).wait(1).to({x:53.9},0).wait(1).to({x:58.9},0).wait(1).to({x:53.9},0).wait(1).to({x:48.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,64,103,148);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;