(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/PlaceSheetHTML_atlas_.png?1471939427222", id:"PlaceSheetHTML_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"PlaceSheetHTML_atlas_", frames: [[722,0,128,128],[0,0,720,634]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["PlaceSheetHTML_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copieCapturedécran20160823à091310 = function() {
	this.spriteSheet = ss["PlaceSheetHTML_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.copieCapturedécran20160823à091310();
	this.instance.setTransform(-33,-23,0.089,0.089);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-23,64,56.4);


// stage content:
(lib.PlaceSheetHTML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(33,150,243,0.498)").ss(3,1,1).p("AAAgkIAABJ");
	this.shape.setTransform(155.6,100.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).to({_off:true},11).wait(7).to({_off:false},0).to({_off:true},9).wait(3));

	// Calque 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(33,150,243,0.498)").ss(3,1,1).p("AAAgkIAABJ");
	this.shape_1.setTransform(155.6,85.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},15).wait(3).to({_off:false},0).to({_off:true},13).wait(1));

	// Calque 2
	this.instance = new lib.Image();
	this.instance.setTransform(104,-11,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

	// Calque 1
	this.instance_1 = new lib.Symbole1();
	this.instance_1.setTransform(272,184.5,1,1,0,0,0,-0.8,-0.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:-1,regY:5.2,x:266.6,y:174.5},0).wait(1).to({x:258.4,y:159.9},0).wait(1).to({x:247.4,y:147.1},0).wait(1).to({x:234.4,y:136.5},0).wait(1).to({x:219.9,y:128},0).wait(1).to({x:204.4,y:121.7},0).wait(1).to({x:188.2,y:117.3},0).wait(1).to({x:171.5,y:114.9},0).wait(1).to({x:154.8,y:114.5},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(254,64,103,103);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;