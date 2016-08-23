(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 350,
	height: 300,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/SetJumperHTML_atlas_.png?1471881489291", id:"SetJumperHTML_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"SetJumperHTML_atlas_", frames: [[0,0,400,300],[0,604,400,300],[0,302,400,300]]}
];


// symbols:



(lib.Melzi1 = function() {
	this.spriteSheet = ss["SetJumperHTML_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Melzi2 = function() {
	this.spriteSheet = ss["SetJumperHTML_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Melzi3 = function() {
	this.spriteSheet = ss["SetJumperHTML_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Melzi2();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Melzi3();
	this.instance.setTransform(-200,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-150,400,300);


// stage content:
(lib.SetJumper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F44336").ss(3.4,1,1).p("ADCAAQAABQg4A5Qg6A6hQAAQhQAAg5g6Qg5g5AAhQQAAhQA5g4QA5g6BQAAQBQAAA6A6QA4A4AABQg");
	this.shape.setTransform(28.1,103.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F44336").ss(4.2,1,1).p("AmnAAQAAivB8h8QB8h8CvAAQCwAAB8B8QB8B8AACvQAACwh8B8Qh8B8iwAAQivAAh8h8Qh8h8AAiwg");
	this.shape_1.setTransform(55.7,112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F44336").ss(4.9,1,1).p("ApzAAQAAkEC4i3QC3i4EEAAQEFAAC4C4QC4C3AAEEQAAEFi4C4Qi4C4kFAAQkEAAi3i4Qi4i4AAkFg");
	this.shape_2.setTransform(80.4,119.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F44336").ss(5.5,1,1).p("AsoAAQAAlPDtjtQDsjsFPAAQFQAADtDsQDsDtAAFPQAAFQjsDtQjtDslQAAQlPAAjsjsQjtjtAAlQg");
	this.shape_3.setTransform(102.1,126.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F44336").ss(6,1,1).p("AvFAAQAAmQEbkaQEakbGQAAQGRAAEbEbQEaEaAAGQQAAGRkaEbQkbEamRAAQmQAAkakaQkbkbAAmRg");
	this.shape_4.setTransform(121,132.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F44336").ss(6.5,1,1).p("AxKAAQAAnHFClBQFBlBHHAAQHIAAFCFBQFBFBAAHHQAAHIlBFCQlCFBnIAAQnHAAlBlBQlClCAAnIg");
	this.shape_5.setTransform(137,137.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F44336").ss(6.9,1,1).p("Ay2AAQAAn0FhlhQFglhH1AAQH1AAFhFhQFhFhAAH0QAAH1lhFhQlhFhn1AAQn1AAlglhQlhlhAAn1g");
	this.shape_6.setTransform(150.1,141.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F44336").ss(7.2,1,1).p("A0LAAQAAoXF6l6QF6l5IXAAQIYAAF6F5QF6F6AAIXQAAIYl6F6Ql6F5oYAAQoXAAl6l5Ql6l6AAoYg");
	this.shape_7.setTransform(160.3,144.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F44336").ss(7.4,1,1).p("A1HAAQAAowGMmLQGLmMIwAAQIxAAGMGMQGLGLAAIwQAAIxmLGMQmMGLoxAAQowAAmLmLQmMmMAAoxg");
	this.shape_8.setTransform(167.5,146.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F44336").ss(7.5,1,1).p("A1rAAQAAo/GWmWQGWmWI/AAQJAAAGWGWQGWGWAAI/QAAJAmWGWQmWGWpAAAQo/AAmWmWQmWmWAApAg");
	this.shape_9.setTransform(171.9,148.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F44336").ss(7.5,1,1).p("AV4AAQAAJFmZGaQmaGZpFAAQpEAAmZmZQmamaAApFQAApEGamZQGZmaJEAAQJFAAGaGaQGZGZAAJEg");
	this.shape_10.setTransform(173.3,148.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#4CAF50").ss(7.5,1,1).p("AV4AAQAAJFmZGaQmaGZpFAAQpEAAmZmZQmamaAApFQAApEGamZQGZmaJEAAQJFAAGaGaQGZGZAAJEg");
	this.shape_11.setTransform(173.3,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},10).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},14).wait(27));

	// Calque 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("AiJCKQg5g5ABhRQgBhQA5g5QA6g4BPAAQBRAAA4A4QA5A5AABQQAABRg5A5Qg4A4hRAAQhPAAg6g4g");
	var mask_graphics_11 = new cjs.Graphics().p("AkrEsQh7h8gBiwQABivB7h8QB8h8CvAAQCvAAB9B8QB7B8AACvQAACwh7B8Qh9B8ivAAQivAAh8h8g");
	var mask_graphics_12 = new cjs.Graphics().p("Am8G8Qi3i3AAkFQAAkEC3i3QC4i5EEAAQEFAAC3C5QC5C3AAEEQAAEFi5C3Qi3C5kFAAQkEAAi4i5g");
	var mask_graphics_13 = new cjs.Graphics().p("Ao7I9QjtjtAAlQQAAlPDtjtQDsjsFPAAQFQAADtDsQDsDtAAFPQAAFQjsDtQjtDslQAAQlPAAjsjsg");
	var mask_graphics_14 = new cjs.Graphics().p("AqqKsQkbkbAAmRQAAmQEbkaQEakbGQAAQGRAAEbEbQEaEaAAGQQAAGRkaEbQkbEamRAAQmQAAkakag");
	var mask_graphics_15 = new cjs.Graphics().p("AsIMJQlBlBgBnIQABnHFBlBQFBlCHHAAQHIAAFCFCQFAFBAAHHQAAHIlAFBQlCFCnIAAQnHAAlBlCg");
	var mask_graphics_16 = new cjs.Graphics().p("AtVNXQlhliAAn1QAAn0FhlhQFglhH1AAQH1AAFhFhQFhFhAAH0QAAH1lhFiQlhFgn1AAQn1AAlglgg");
	var mask_graphics_17 = new cjs.Graphics().p("AuROSQl6l6AAoYQAAoXF6l6QF6l5IXAAQIYAAF6F5QF6F6gBIXQABIYl6F6Ql6F5oYAAQoXAAl6l5g");
	var mask_graphics_18 = new cjs.Graphics().p("Au7O9QmLmMAAoxQAAowGLmLQGLmMIwAAQIxAAGMGMQGKGLAAIwQAAIxmKGMQmMGLoxAAQowAAmLmLg");
	var mask_graphics_19 = new cjs.Graphics().p("AvVPWQmWmWAApAQAAo/GWmWQGWmWI/AAQJAAAGWGWQGWGWAAI/QAAJAmWGWQmWGWpAAAQo/AAmWmWg");
	var mask_graphics_20 = new cjs.Graphics().p("AvdPfQmamaAApFQAApEGamZQGZmaJEAAQJFAAGaGaQGZGZAAJEQAAJFmZGaQmaGZpFAAQpEAAmZmZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:28.1,y:103.5}).wait(1).to({graphics:mask_graphics_11,x:55.7,y:112}).wait(1).to({graphics:mask_graphics_12,x:80.4,y:119.7}).wait(1).to({graphics:mask_graphics_13,x:102.1,y:126.5}).wait(1).to({graphics:mask_graphics_14,x:121,y:132.3}).wait(1).to({graphics:mask_graphics_15,x:137,y:137.3}).wait(1).to({graphics:mask_graphics_16,x:150.1,y:141.4}).wait(1).to({graphics:mask_graphics_17,x:160.3,y:144.5}).wait(1).to({graphics:mask_graphics_18,x:167.5,y:146.8}).wait(1).to({graphics:mask_graphics_19,x:171.9,y:148.1}).wait(1).to({graphics:mask_graphics_20,x:173.3,y:148.6}).wait(41));

	// Calque 6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F44336").ss(15,1,1).p("AjLjAIjwCuAkDDBIi4jTIN3Bj");
	this.shape_12.setTransform(224.8,139.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#4CAF50").ss(15,1,1).p("AkDDBIi4jTAjLjAIjwCuIN3Bj");
	this.shape_13.setTransform(224.8,139.4);

	this.shape_12.mask = this.shape_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},20).to({state:[{t:this.shape_13}]},14).wait(27));

	// Calque 5
	this.instance = new lib.Symbole1();
	this.instance.setTransform(188,135,1,1,2.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(27));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.setTransform(30.4,103.7,0.152,0.152);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,x:189,y:150,alpha:1},10,cjs.Ease.get(1)).to({_off:true},14).wait(27));

	// Calque 7
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(3.4,1,1).p("ADCAAQAABQg4A5Qg6A6hQAAQhQAAg5g6Qg5g5AAhQQAAhQA5g4QA5g6BQAAQBQAAA6A6QA4A4AABQg");
	this.shape_14.setTransform(28.1,103.5);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(10).to({_off:false},0).wait(51));

	// Calque 1
	this.instance_2 = new lib.Melzi1();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175,150,400,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;