(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 305,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ZOffsetConnectHTML_atlas_.png?1471937109451", id:"ZOffsetConnectHTML_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"ZOffsetConnectHTML_atlas_", frames: [[317,0,88,88],[0,0,315,195]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["ZOffsetConnectHTML_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["ZOffsetConnectHTML_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(63,63,63,0.592)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(0.4,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(183,183,183,0.831)").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(0.5,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0E0E0").s().p("AgBADIAAgBIAAgEIAAgBQAFgDgCAIQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAgAAAgCIAAABQAAACAAACQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAIAAAAg");
	this.shape_2.setTransform(1.9,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DFDFDF").s().p("AAAADQACgDgDAAIAAAAIAAgCQAEgDgBAFIgBAEIgBAAIAAgBgAAAgBIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAABg");
	this.shape_3.setTransform(4.2,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDDDDD").s().p("AAIgCIAAgBQAEgCAAAGIgCADQABgFgDgBgAgLgDQACACABADIAEgGQgBAEgCAEIgBAAQgCgEgBgDg");
	this.shape_4.setTransform(2,40);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#777B7C").s().p("AAAAEIAAgIIAAAJg");
	this.shape_5.setTransform(5,36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#86898B").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(5.6,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A8ABAC").s().p("AAAADIAAgBIAAgCIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAAAQAAABAAACIAAABg");
	this.shape_7.setTransform(5.6,36.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#848788").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(5.3,35.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#888C8D").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(5.2,35.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BCBDBF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(5.3,35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B6B7B8").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(5.2,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C8CACB").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(5.7,33.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1D3D3").s().p("AAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(5.5,33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CFD1D1").s().p("AAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(5.6,33.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B8E8F").s().p("AAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(2.7,35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A7AAAB").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_16.setTransform(2.9,35.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#878B8C").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_17.setTransform(3.3,35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1D2D2").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_18.setTransform(3,34.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDFDFD").s().p("AgMALIAAgBIAAgJIACgGIABAAIADgEIAAAAIAAAAIABAAIABgBIABAAIABAAIAAAAIAEAAIABAAIAAAAIABAAIABABIAAAAIABAAIAAAAIABABIAAAAIACACIABAAIAAABIABABIAAAAIAAABIAAABIABAAIAAABIAAABIABAAIAAAKIAAABIgBAAIgMAAIgMAAg");
	this.shape_19.setTransform(3.7,36.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BEC0C0").s().p("AAAgIIAAAAIAAABIAAAAIAAARIAAgSg");
	this.shape_20.setTransform(1.6,37.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CFD0D1").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_21.setTransform(1.6,36);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#636769").s().p("AAAALIAAAAIAAgRIAAAAIAAgCIAAgBIAAgBIAAAAIAAAVIAAAAg");
	this.shape_22.setTransform(1.7,37.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#929495").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(1.7,35.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#929496").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_24.setTransform(2.3,36.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#888B8D").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_25.setTransform(2.3,36);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9DADB").s().p("AgBAKIAAgKIAAAAIAAAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIABAAIAAAAIAAgBIAAAAIABAAIAAAAIgCADIAAABIgBAFIAAAKIAAAAg");
	this.shape_26.setTransform(2.6,36.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BCBDBE").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_27.setTransform(2,35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B2B3B5").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_28.setTransform(2,35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C0C1C1").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_29.setTransform(1.9,35.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8B8BA").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_30.setTransform(1.8,35.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4F5455").s().p("AATATIglAAIAAAAIAAgVIAAgBIAAAAIAEgIIAAAAIADgEIAAAAIAFgCIAAgBQAHAAAHABIABAAIAAABIABAAIAAAAIABAAIAAABIABAAIABACIABAAIAAACIABAAIAAAAIAAABIABABIAAAAIAAABIACACIAAABIABACIAAABIAAABIAAABIAAAAIAAACIAAAAIAAARIAAAAgAgNAAIAAABIAAAKIAAABQANAAAMgBIABAAIAAgLIAAAAIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIgBgBIAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIAAgBIgBAAIAAAAIAAgBIgCAAIgBAAIAAgBQgDgBgCABIAAAAIgCAAIAAABIAAAAIgBAAIAAAAIgBAAIAAABIAAAAIAAAAIgBAAIAAABIAAAAIgBAAIgBAAIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAABIAAABIAAAAIgBAAIAAAAg");
	this.shape_31.setTransform(3.7,36.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BFC1C1").s().p("AANAFIgBgBIABAAIAAABIAAABIAAgBgAgMgEIAAAAIAAgBIABAAIAAABIgBAAIAAAAg");
	this.shape_32.setTransform(3.5,35.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D7172").s().p("AgNAHIABAAIgBABIAAgBgAgMAFIAAAAIAAgBIAAAAIAAgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIAAgBIAAAAIABgBIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAgBIABAAIAAgBQAAABAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBQAAABAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAAAIAAAAIABgBIAAAAIAAAAIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIAAAAIABAAQAEgCAGACIABAAIAAAAIABAAIAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIABAAIAAAAIgBAAQgHgCgHABIAAABIgEACIgBAAIgDADIAAAAIgDAGg");
	this.shape_33.setTransform(3.1,35.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B9BCBD").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_34.setTransform(2.1,34.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEC49B").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_35.setTransform(1.7,31.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#696D70").s().p("AgBAAIAAAAIAAgBQABgBACADIAAAAIgBABIgCgCg");
	this.shape_36.setTransform(5.3,33.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A3AAAB").s().p("AgCABIAEgCIABAAIAAAAIAAABIAAABIAAAAIAAAAIgDABIgCgBg");
	this.shape_37.setTransform(4.7,33.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0C5C6").s().p("AgDABIAHgDIAAAAIgBAAIAAABIgBAAIgEACQACACADgCIAAAAIAAABIAAAAIgDABQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBgBAAAAg");
	this.shape_38.setTransform(4.7,33.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#808385").s().p("AAAAAIAAAAIAAAAg");
	this.shape_39.setTransform(3.2,29.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D4D6D7").s().p("AAAAAIAAAAIAAAAIABAAIAAAAIgBAAIAAAAIAAAAg");
	this.shape_40.setTransform(3.2,29.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A9ABAB").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_41.setTransform(2.6,28.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8E9192").s().p("AAAAAIAAAAIAAAAg");
	this.shape_42.setTransform(2.6,28.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9B9D9E").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_43.setTransform(2.7,28);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8E9292").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_44.setTransform(4.2,29.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9DA0A1").s().p("AAHAiIAAAAIABACIAAAAIAAABIgBgDgAgBAfIgBAAIAAgBIABABIAAAAgAgGgjIgBAAIAAgBIABAAIAAAAIAAABg");
	this.shape_45.setTransform(4.7,32.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCDCE").s().p("AAIAmIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABgAgGgkIgBAAIAAgBIABAAIAAAAIAAABg");
	this.shape_46.setTransform(4.7,32.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A6A9AA").s().p("AAKABIAAAAIAAAAIAAABgAgJAAIAAgBIAAAAIAAABg");
	this.shape_47.setTransform(4,28.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#979B9C").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_48.setTransform(2.1,28.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B9BBBD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(1.7,27.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7D8182").s().p("AAAAHIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgCIAAgGIAAAAQAAAGAAAGIAAABg");
	this.shape_50.setTransform(1.7,27.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D5D7D7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_51.setTransform(2.3,26.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ACADAF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_52.setTransform(2.5,25.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#949698").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_53.setTransform(2.4,25.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CBCCCD").s().p("AgCALIAAgBIABAAIAAABIAAAAgAACAHIAAgBIABABgAACgKIAAAAIAAAAg");
	this.shape_54.setTransform(2.2,27);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CECFD0").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_55.setTransform(2.4,26);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9C9E9F").s().p("AAAAxIAAAAIAAABgAAAgwIAAgBIAAAAIAAAAIAAABg");
	this.shape_56.setTransform(2.4,30.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#707476").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_57.setTransform(1.6,26.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C7C8CA").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_58.setTransform(1.7,25.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AEB1B1").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_59.setTransform(1.8,25.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8B8F8F").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(2.2,25.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C4C6C6").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_61.setTransform(4.8,27.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A2A5A6").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_62.setTransform(4.8,27.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C8C9C9").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_63.setTransform(4.7,27.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#959999").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_64.setTransform(4.9,27.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CBCCCC").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_65.setTransform(4.9,27.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9B9E9F").s().p("AAAACIAAgBIAAgDIAAAAIAAABQAAABAAADg");
	this.shape_66.setTransform(5,26.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C3C4C4").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAABIAAAAIAAAAg");
	this.shape_67.setTransform(5,26.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D2D3D4").s().p("AgMALIAAgBIAAAAIAAABgAAMgKIAAAAIAAAAIABAAIAAAAg");
	this.shape_68.setTransform(3,26.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A1A4A6").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_69.setTransform(4.4,25.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A2A5A7").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_70.setTransform(4.8,24.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FD9255").s().p("AABASIgUgKIAAgIIACAAIAAAAIAlgSQABAEgBAEIAAABQABALgBAMIgBAAIgFgDIgBAAIAAgRIgBAAIgVAJIARAKIABAAIAAABIgBAAIgHAFg");
	this.shape_71.setTransform(3.6,31.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#989B9C").s().p("AAIAtIAAAAIgBAAIAAgBIACABIAAAAgAAOgQIAAgBIABgBIABAAIAAABIgBAAIgBABgAAQgSIAAgBIABgBIABAAIAAABIgBAAIAAABgAgQgrIAAAAIAAgBIAAAAIAAABIAAAAg");
	this.shape_72.setTransform(3.4,30.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8B8E90").s().p("AAOALIAAgBIABAAIAAABgAgOgIIAAgBIAAgBIABAAIAAABIAAABg");
	this.shape_73.setTransform(3.8,27.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#858889").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_74.setTransform(5.4,28);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#ADADAE").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_75.setTransform(7.4,28.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#919292").s().p("AAAAAIABAAIgBAAg");
	this.shape_76.setTransform(6.9,28.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B9B9BA").s().p("AAEAAIgBAAIAAAAIgBAAIgFAAIAAAAQADAAAEAAIAAAAIAAABg");
	this.shape_77.setTransform(7.8,28.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#737374").s().p("AAAACIgCAAIAAAAIAAgBIgDAAIAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAEAAIAAAAIAAgBIAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAAAIAAABIAGAAIgGAAIAAAAIAAAAIgFAAIAEACIABgBIAGgBIABAAIAAABIAAAAIgHAAIAAAAIAAABIAAAAg");
	this.shape_78.setTransform(7.5,28.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A4A5A5").s().p("AAAAAIAAAAIAAAAg");
	this.shape_79.setTransform(7.2,27.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7A7B7C").s().p("AAEAAIgHAAIAAAAIAAAAIAAAAIAHAAIAAAAIAAAAg");
	this.shape_80.setTransform(6.6,27.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D4D4D4").s().p("AAEAAIgBAAIgGAAIAAAAIAHAAIAAAAIAAAAg");
	this.shape_81.setTransform(6.7,27.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BBBCBC").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_82.setTransform(7.5,27.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CECFCF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_83.setTransform(7.4,27.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C2C2C2").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_84.setTransform(7.2,27.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A0A0A1").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_85.setTransform(7.5,27.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9B9B9C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_86.setTransform(7.5,26.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C0C0C0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_87.setTransform(7.5,26.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#ABABAB").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_88.setTransform(7.3,26.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AAAAAB").s().p("AAAADIAAAAIAAAAIAAAAIAAABgAAAgBIAAgCIAAABIAAABg");
	this.shape_89.setTransform(7.2,27.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#979898").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_90.setTransform(7.3,26.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AEAFB0").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_91.setTransform(5.5,27.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#828688").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_92.setTransform(5.5,27.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D5D6D6").s().p("AAAABIAAgBIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_93.setTransform(5.7,26.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#808485").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_94.setTransform(5.6,26.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#919496").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_95.setTransform(5.5,25.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C6C8C9").s().p("AAJAPIgBAAIAAAAIABgBIABAAIAAABIAAAAgAgRgDIAAgBIAAgBIABAAIAAABIAAABgAASgNIAAgBIAAAAIAAABIAAABg");
	this.shape_96.setTransform(3.4,26.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A9A9A9").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_97.setTransform(7.5,26.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#858686").s().p("AAAAAIAAAAIAAAAg");
	this.shape_98.setTransform(7.2,26.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C4C4C5").s().p("AAAACIAAgBIAAAAIAAABgAAAAAIAAgCIAAAAIAAACg");
	this.shape_99.setTransform(7.2,26.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CFCFCF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_100.setTransform(7.1,26.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9D9E9F").s().p("AAAAAIAAAAIAAAAg");
	this.shape_101.setTransform(7.5,25.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CDCECD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_102.setTransform(7.4,25.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7D7E7F").s().p("AAAAAIAAAAIAAAAg");
	this.shape_103.setTransform(6.4,24.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#939394").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_104.setTransform(7.4,25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AFAFB0").s().p("AACAAQgCAAgCAAIAAAAQACAAADAAg");
	this.shape_105.setTransform(6.9,25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C1C1C1").s().p("AAEAAIgBAAQgDAAgCAAIgBAAIAAAAQADAAAEAAg");
	this.shape_106.setTransform(7.9,27.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A3A4A4").s().p("AAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_107.setTransform(8.3,27.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#777778").s().p("AAAAFIAAAAIgJgBIAAAAIAAgBIABAAQADABAFAAIAJgBIgJAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIABAAIABAAIAAAAQAFgBACABIABAAIAAACIAAAAIgBAAIgBAAIgFAAIAGgBQgFgBgEACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABAAIAAAAIAAAAIAAAAIAAAAIAAABIAAAAIABABIAAAAIABAAIAGAAIABAAIAAABQgDACgFAAIgCAAg");
	this.shape_108.setTransform(7.2,27.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D1D1D1").s().p("AgCAGIgEAAIABAAIADAAIAAAAgAgCADIAAgBIAAAAIAAABgAAGgFIgGAAIAAAAIABAAIAFAAIABAAIAAAAg");
	this.shape_109.setTransform(7.5,28.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D9D9DA").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_110.setTransform(8.2,27.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CDCECE").s().p("AgCAEIAAgCIAAABIAAABgAACgDIAAAAIABAAIAAAAIgBAAg");
	this.shape_111.setTransform(7.7,27.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C2C2C3").s().p("AgBAAIABAAIAAAAIABAAIAAAAIABAAIAAAAIgCAAIgBAAg");
	this.shape_112.setTransform(7.7,27);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A5A5A5").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_113.setTransform(7.9,26.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#ACACAD").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_114.setTransform(7.8,26.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B9BABA").s().p("AAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_115.setTransform(8,26.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AAAAAA").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_116.setTransform(8.2,26.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B1B2B2").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_117.setTransform(8.3,26.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B5B5B6").s().p("AgDALQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgBQAFAAAEgCQgDADgEgBIAAAAIAAABgAABgKIAAAAIACAAIAAAAIAAAAIgCABg");
	this.shape_118.setTransform(7.7,27.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#656667").s().p("AAAAFIAAAAIAAAAIgBgBIgBAAIAAAAIgBgBIAAAAIgBgBIAAgBIAAgBIAAAAIAAAAIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIABAAIABgBIAAAAQAAADAAACIAAABIAAAAIABAAIAAAAIABAAIAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAgBIgBgBIAAgBIACAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIgBAAIAAABgAgDAAIABAAIABACIABAAIAAgBIAAAAIAAgCIAAAAIgBAAIAAAAIgBAAIAAABIAAAAIAAAAIgBAAIAAAAg");
	this.shape_119.setTransform(7.7,26.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C6C6C7").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_120.setTransform(7.6,25.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#5D5E5F").s().p("AAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_121.setTransform(8.1,24.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7F8080").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_122.setTransform(8.2,24.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B0B1B1").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_123.setTransform(8.3,24.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A8A9A9").s().p("AgHADIgBgCIABAAIAAABIABAAIAAABgAAIgBIAAgBIABAAIAAABg");
	this.shape_124.setTransform(7.1,24.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BABABA").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_125.setTransform(8.1,24.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#88898A").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_126.setTransform(8.2,22.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B8B9B9").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_127.setTransform(8.1,22.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8A8B8B").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_128.setTransform(8.1,22.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#888889").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_129.setTransform(8.2,22.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C4C5C5").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_130.setTransform(8.2,22.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CCCCCC").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_131.setTransform(8.2,22.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B7B8B8").s().p("AAAABIAAAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABg");
	this.shape_132.setTransform(8.1,22.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#515253").s().p("AgCAIIAEAAIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgCAAIgCgBgAgCgIIAEAAIABAAIgDABIgCgBg");
	this.shape_133.setTransform(7.6,22.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CFCFD0").s().p("AgDAbIAAgBIAAAAIAAABgAADgIIABAAIAAABgAADgZIAAgBIABABg");
	this.shape_134.setTransform(7.6,24.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#AFB0B0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_135.setTransform(8.3,22.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#757677").s().p("AAAABIAAAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAgBAAIAAAAIAAABIAAAAg");
	this.shape_136.setTransform(6.3,24.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B4B4B5").s().p("AgCAAIABAAQABAAADABIgBAAQgDAAgBgBg");
	this.shape_137.setTransform(7.6,24.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7E7F80").s().p("AAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_138.setTransform(7.2,24.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#505152").s().p("AgDAgIADgBIAAAAIACABIAGAAIABAAIAAAAIgJABIAAABIgDgCgAgJAaIAJAAIAAAAIAAAAIAJAAIgJABQgFAAgEgBgAAAAUQAEgCAFABIgGABIgBAAIAAABIgBAAIgBAAIAAAAIAAABIAAgCgAAAgJIAAgBIAHABIgEABIgDgBgAAJgNIAAgBIAAgBIABADIgBgBgAAJgeIAAgCIAAgBIABADIgBAAg");
	this.shape_139.setTransform(7.2,25.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D7D7D7").s().p("AAAABIAAgBIAAAAIAAAAIAAABg");
	this.shape_140.setTransform(7.1,24.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#AEAFAF").s().p("AgCAAIABAAIAAAAIABAAIADAAIAAAAIAAAAIAAAAIgDAAIgCAAg");
	this.shape_141.setTransform(6.8,24.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D9D9D9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_142.setTransform(6.6,24.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#757576").s().p("AABAEIgFAAIAAgBIAAgBIAFAAIAAgBIABAAIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAgBIAAAAIgBAAIAAAAIgFgBIAAAAIAAgBIAAAAQACACACgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAIACAAIAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAABIAAAAIAAACIAAAAIAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIAAAAIgBAAIAAABgAgEADQAEACACgCIgGAAgAAEAAIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAABg");
	this.shape_143.setTransform(7.7,23.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#838484").s().p("AAEAAIgCAAIAAAAIgFAAIAAAAIAAAAIAAAAIAFAAIABAAIABAAIAAAAg");
	this.shape_144.setTransform(7.6,23.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#BCBCBD").s().p("AgHACIAAAAIAAADIAAABIAAgEgAABgFIAIABIAAAAIgBAAIgCABIgFgCg");
	this.shape_145.setTransform(7,24.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#BFBFBF").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_146.setTransform(6.3,24.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A2A4A6").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_147.setTransform(5.3,23.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B9BBBB").s().p("AgRA9IAAgBIABAAIAAAAIAAABIgBAAgAgGAxIAAAAIABAAIAAAAgAAQg7IAAgBIABAAIAAAAIAAABIgBAAg");
	this.shape_148.setTransform(3.6,29.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C2C4C5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_149.setTransform(5.5,22.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#8C8E90").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_150.setTransform(5.5,22.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#939697").s().p("AgOAXIAAgBIAAAAIAAABIAAAAgAAPgVIAAgBIAAAAIAAABg");
	this.shape_151.setTransform(3.9,25);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#8F9293").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_152.setTransform(5.6,22.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#8F8F90").s().p("AgCAAIAFAAIgFAAg");
	this.shape_153.setTransform(7.8,23.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D3D3D3").s().p("AgDAdIAGAAIgGAAgAADgcIgBAAIgFAAIAAAAIAHAAIAAAAg");
	this.shape_154.setTransform(7.8,25.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B4B5B5").s().p("AABAQIAAgBIABABIgBAAgAgCgNIAAAAIAFAAIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIAAAAQAAABAAAAQABABgBAAQAAAAAAAAQAAAAgBAAIgHABIABgBgAgFgMIAAgBIABABg");
	this.shape_155.setTransform(7.7,24.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#919192").s().p("AAAAAIABAAIAAAAIAAAAIgBAAIAAAAg");
	this.shape_156.setTransform(6.9,23.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CBCBCB").s().p("AAAAYIAAgCIAAAAIAAAAIAAABIAAABgAAAgWIAAgBIAAAAIAAAAIAAABg");
	this.shape_157.setTransform(7.1,25.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#ABACAC").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAABg");
	this.shape_158.setTransform(7.4,22.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#7C7D7E").s().p("AACAAIgBAAIgCAAIAAAAIADAAIAAAAIAAAAg");
	this.shape_159.setTransform(7.7,22.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#525354").s().p("AACAAIgDAAIAAAAIgCAAIAAAAQAEAAADAAIAAAAIAAAAIAAAAIgBAAIAAAAg");
	this.shape_160.setTransform(7.7,22.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#808182").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_161.setTransform(7.3,22.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C3C3C3").s().p("AgBAcIAAgCQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAABIABAAIgCAAIAAABIAAAAIAAABIAAABIgBgBgAgBgcIABAAIAAADIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAIAAABIgBAAIgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAgBg");
	this.shape_162.setTransform(6.9,25.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D5D5D5").s().p("AAGAZIgGAAIAAgBIAHAAIAAABgAgCgGIAAAAIAAgCIAAAAIAAACIAAAAgAgDgXIgCAAIgBAAIAAgBIADAAIABAAIAAABg");
	this.shape_163.setTransform(7.5,25.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#5F6061").s().p("AgCACIgBgBIAAAAIgDAAIAAgBIAAAAIAAAAIAAAAIADAAIAAAAIABAAIAAgBIAAAAIAAAAIABAAIABABIAAAAIAFAAIABAAIAAAAIABAAIAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAIgFAAIAAAAIAAAAIgBABIAAAAIgBAAg");
	this.shape_164.setTransform(7.5,23);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#959596").s().p("AAAAdIAAAAIAAgBIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABgAAAgZIAAgDIAAAAIAAAAIAAABIAAAAIAAABIAAABg");
	this.shape_165.setTransform(6.8,25.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BDBDBE").s().p("AAAAcQgFABgCgCIAIABIAAAAIAAABIAAAAIAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAgAABgLIAHAAIAAAAIAAABIgHAAgAABgcIAHAAIAAAAIAAAAIgHABg");
	this.shape_166.setTransform(7,25.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#747576").s().p("AgEAEIAAgBIAAgBIAFAAIAAgBIABAAIAAAAIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBgBIAAAAIgFgBIAAgBIAAAAQADACACgCIACAAIAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAABIAAACIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAgBQgEACgEgBIAAABgAAEAAIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAABg");
	this.shape_167.setTransform(7.7,22.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D7D7D8").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_168.setTransform(7.1,21.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A9AAAA").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_169.setTransform(7.5,21.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#B7B7B7").s().p("AACAeIAAAAQAAgEgBgDIABAAQABACgBAFIAAAAgAAAgbIgCAAIAAAAIAAgCIACABIAAABIAAAAg");
	this.shape_170.setTransform(7.5,23.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7F8081").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIABAAIAAABIAAAAg");
	this.shape_171.setTransform(7.3,20.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C7C7C7").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_172.setTransform(7.1,21);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BBBBBB").s().p("AADAdIAAAAIABAAIAAAAIgBAAgAgCgbIAAgBIAAAAIAAAAIAAABg");
	this.shape_173.setTransform(7.5,23.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C6C6C6").s().p("AAAAhIAAAAIABAAIAAAAgAAAgfIAAgBIAAAAIAAABg");
	this.shape_174.setTransform(7.3,23.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#979798").s().p("AAAAfIAAAAIAAgBIAAAAIAAABIAAAAgAAAgWIAAgCIAAAAIAAABIAAABgAAAgcIAAgBIAAgBIAAAAIAAABIAAABg");
	this.shape_175.setTransform(7.1,23.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgbBeIAAAAQAEgCgBAGQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgBgDAAgEgAgEBfIAAgBQADgBgCADIgBABIAAgCgAAbhjIAAAAIAAgBIABACIgBgBg");
	this.shape_176.setTransform(4.6,30.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#949495").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_177.setTransform(7.3,20.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#929697").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_178.setTransform(5.4,20.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C2C3C3").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_179.setTransform(7.4,20.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#9E9E9F").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_180.setTransform(7.4,19.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C7C7C8").s().p("AAAAgIAAgDIAAAAIAAABIAAABIAAABgAAAgcIAAgDIAAAAIAAABIAAACIAAAAg");
	this.shape_181.setTransform(7.1,23.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A3A3A4").s().p("AAAAfIAAgBIAAAAIAAAAIAAABIAAAAgAAAgSIAAgBIAAgBIAAACgAAAgdIAAgBIAAAAIAAAAIAAAAIAAABg");
	this.shape_182.setTransform(7.1,23.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#7D7E7E").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_183.setTransform(7.2,20);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#C4C4C4").s().p("AAAAeIAAAAIAAABgAAAgdIAAgBIAAAAIAAAAIAAAAIAAABg");
	this.shape_184.setTransform(7.3,22.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B6B6B7").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_185.setTransform(7.2,19.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CECECF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_186.setTransform(7.1,20);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#9B9C9C").s().p("AAAADQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABIAAgBgAAAgCIAAgBIAAAAIAAAAIAAABIAAAAg");
	this.shape_187.setTransform(7.5,20.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CDCDCD").s().p("AACAeIAAAAIAAABIAAABIAAgCgAgBgeIAAAAIAAAAIABAAIAAAAg");
	this.shape_188.setTransform(7.6,22.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B3B3B4").s().p("AgEAAIAAAAIAJAAIAAAAIgFAAIgEAAg");
	this.shape_189.setTransform(7.7,21.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#999A9A").s().p("AAAASIAAgBIAAAAIAAABgAAAgPIAAgBIAAAAIAAABg");
	this.shape_190.setTransform(8.3,23.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#606162").s().p("AgEACIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAgBAAIABAAIAAAAIABAAIAAAAIABAAIAFABIAAAAIAAABIgFABIgEgBg");
	this.shape_191.setTransform(7.7,21.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B6B7B7").s().p("AADAAIAAAAIgFAAIAAAAIAFAAIAAAAg");
	this.shape_192.setTransform(7.9,21.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#848586").s().p("AAEAAIgCAAIAAAAIgFAAIAAAAIAAAAIAAAAIAFAAIAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAg");
	this.shape_193.setTransform(7.6,21.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D5D5D6").s().p("AACAAIgEAAIAAAAIAFAAIAAAAg");
	this.shape_194.setTransform(7.6,21.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A7A7A8").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_195.setTransform(8.1,20.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#BEBEBE").s().p("AgCABIAAAAIAAgBIAAgBIACABIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABAAIABAAIAAAAQgDAAgCAAIAAAAIAAABIAAAAg");
	this.shape_196.setTransform(7.7,20.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#909091").s().p("AAAAAIAAAAIABAAIgBAAIAAAAg");
	this.shape_197.setTransform(7.7,20.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D1D1D2").s().p("AAAACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAgBIAAAAIABAAIAAACIAAABIgBAAIAAAAIAAAAg");
	this.shape_198.setTransform(7.5,20.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#8E8E8F").s().p("AAAABIAAgCIAAADg");
	this.shape_199.setTransform(7.6,20.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A4A5A6").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_200.setTransform(8,20.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D6D6D6").s().p("AgKAmIABAAIAAABIAAABIgBgCgAACAZIgBgCIAAgBIAAgBIAAAAIAAAAIABAAIABAAIAAAAIAAADIAAABIAAAAgAAKAZIAAgBIAAgDQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABgAAKAAIAAgCQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAAAgAAAgDIAAgCIAAAAIAAABIAAABgAAGgFIgGAAIAAgBIAHAAIAAABgAAAgMIAAgBIABAAIABAAIAEAAIABAAIAAAAIgHAAIAAABgAAAgOIAAgBIAAAAIAAABIAAAAgAAKgQIAAgBIAAgDQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABgAAAgVIAAgBIAAAAIAAABgAAKgjIAAAAIAAgBIAAgDQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAg");
	this.shape_201.setTransform(7.2,24.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#BBBBBC").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_202.setTransform(8.3,20.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#9F9FA0").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_203.setTransform(8.3,20.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#B3B4B4").s().p("AgEAnIAAgBIAAgBIAAACIAAAAgAAEgmIABABIAAABIgBgCg");
	this.shape_204.setTransform(7.7,23.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#A1A1A2").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_205.setTransform(8.1,19.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C9C9CA").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_206.setTransform(8.2,19.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#B8B8B8").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_207.setTransform(8,19.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B7B7B8").s().p("AAAACIAAAAIAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIAAAAQACABgCACg");
	this.shape_208.setTransform(8,20.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D0D0D0").s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_209.setTransform(7.9,19.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B1B1B1").s().p("AAAgBIAAAAQAAACABABQgBAAAAgDg");
	this.shape_210.setTransform(7.8,20.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#616263").s().p("AACAFIgBAAIgBAAIAAAAIAAAAIgCgBIgBAAIgBgCIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAAAIABAAIABAAIAAgBIAAAAIAAACIAAABQAAADABAAIABAAIAAAAIABAAQABgCgDgCIAAgBIACAAIAAAAIABABIAAAAIABACIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAABIAAAAIgBAAIgBAAIAAABgAgDABIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAAAAIAAgDIAAAAIgCAAIAAABIAAAAIAAAAIgBAAIAAABg");
	this.shape_211.setTransform(7.7,20.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BABABB").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAABg");
	this.shape_212.setTransform(7.8,19.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CACACA").s().p("AADArIAAgBIAAgBIABAAIAAABIAAABgAgFAJIABAAIABAAIAAABIgBAAIAAAAIgBgBgAAFgpIgBAAIAAgBIABAAIABAAIAAABg");
	this.shape_213.setTransform(7,24);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#A8A9AA").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_214.setTransform(7.7,19.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#85888A").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_215.setTransform(4.5,24.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B3B6B7").s().p("AAAAAIAAAAIAAAAIAAAAIABAAg");
	this.shape_216.setTransform(4.4,24.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D7D8D8").s().p("AgGAMIgBAAIAAgBIACABgAAHgLIABAAIAAABIgBAAg");
	this.shape_217.setTransform(4.9,23.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#838688").s().p("AAABAIAAAAIAAAAgAgFg0IAAAAIABAAIAAAAgAAFg+IAAgBIABAAIAAABg");
	this.shape_218.setTransform(4.8,29.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A1A4A5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_219.setTransform(4.8,23.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#868A8B").s().p("AAAA2IAAgBIAAAAIAAABgAAAg0IAAAAIAAgBIAAAAIAAABg");
	this.shape_220.setTransform(4.7,29.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A5A7A8").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_221.setTransform(4.4,23.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CDCFD0").s().p("AAPARIAAgBIAAgBIABAAIAAABIAAABgAgPAAIAAAAIABAAIAAAAgAAKgQIABAAIgBABg");
	this.shape_222.setTransform(3.4,25.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#848889").s().p("AAAAaIAAgBIAAAAIAAABgAAAgZIAAAAIABAAIAAAAg");
	this.shape_223.setTransform(4.4,26.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#989C9C").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_224.setTransform(5.1,23.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#9EA1A2").s().p("AgBA6IgGAAIAAgBQADgBAEABIAAABgAAHg4IAAAAIAAgBIABAAIAAAAIgBABg");
	this.shape_225.setTransform(4.2,29.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#8A8D8E").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_226.setTransform(3.5,24.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#B1B4B4").s().p("AAAAKIAAgTIAAAAIAAAAIAAATIAAAAg");
	this.shape_227.setTransform(3.4,25.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C1C4C4").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_228.setTransform(3,23.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A3A5A7").s().p("AgDAAIgBAAIAAAAIAAAAIAIAAIABAAIAAAAIgBAAIgHAAg");
	this.shape_229.setTransform(3.7,24);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#D2D3D5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_230.setTransform(2.8,23.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#86898A").s().p("AgLAFIAAgBIABAAIAAABgAALgCIAAgBIAAgBIABAAIAAABIAAABg");
	this.shape_231.setTransform(4.5,22.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#8B8F90").s().p("AgEA8IgBAAIAAAAIABAAIAAAAgAAFAAIgBAAIAAAAIABAAIABAAIAAAAgAgFg7IABAAIAAAAg");
	this.shape_232.setTransform(3.5,29.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#8A8E8F").s().p("AAGAHIABAAIAAAAIAAABIAAAAIgBAAIAAgBgAgGgHIAAAAIAAAAIABAAg");
	this.shape_233.setTransform(3.5,23.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#A6A9A9").s().p("AgCAAIAFAAIABAAIgGAAg");
	this.shape_234.setTransform(3.7,23.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#909294").s().p("AAAAAIAAAAIAAAAg");
	this.shape_235.setTransform(4.9,22.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#9DA0A0").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_236.setTransform(5,22.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#848789").s().p("AAAAAIAAAAIAAAAg");
	this.shape_237.setTransform(5,22);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#9FA2A3").s().p("AgKApIgBAAIgBAAIAAgBIACABIAAAAgAAHgdIAAAAIAAgCIAAAAIAAABIAAABIAAAAgAAMgoIABAAIAAACIAAAAIAAABIgBgDg");
	this.shape_238.setTransform(4.3,25);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B2B4B5").s().p("AANBJIgCgDIACACIABABgAgBAJIgDgBIAAAAIADAAIAAAAIAAABgAgNgmQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBIADACIAAABgAAQhHIAAgBIAAABIAAAAIAAABIAAgBg");
	this.shape_239.setTransform(3.7,27.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#9FA1A3").s().p("AAIAYIAAAAIABAAIAAAAIgBABgAgTAHIAAAAIAAgBIAAgBIABAAIAAACIAAAAgAATAFIAAAAIAAgCIAAAAIABABIAAABIAAAAgAgPgWIAAgBIAAgBIABABIAAABg");
	this.shape_240.setTransform(3.6,25.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#BFC1C2").s().p("AABA6IAAgBIABAAIAAAAIAAAAIAAABIgBAAgAgBg3IAAgCIAAABIABAAIAAAAIAAABg");
	this.shape_241.setTransform(2.1,28.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#929597").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_242.setTransform(2.4,22.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#CCCDCD").s().p("AgbAJIAAgBIABABIAAAAgAAcgHIgBgBIAAAAIABAAIAAABg");
	this.shape_243.setTransform(4.7,22);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C7C9CA").s().p("AAAAaIAAgBIAAAAIAAAAIAAABIAAAAgAAAgYIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAg");
	this.shape_244.setTransform(1.7,25.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#BABDBD").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_245.setTransform(1.6,22.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#787C7D").s().p("AAQBTIAAAAIAAgRIABAAIAAARIAAAAgAgQhOIAAgEIABAAIAAADIAAABg");
	this.shape_246.setTransform(3.9,29.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D0D1D2").s().p("AAQA9IABAAIAAAAIgBAAIAAAAgAgHgjIABAAIAAABgAgNgvIAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgBgBIAAAAIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIAAgEIAAAAIABAAQAAAHADAFIAAAAIAAABg");
	this.shape_247.setTransform(4,27.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#7A7E7F").s().p("AABAIIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAgIIABAAQgBAJADAHIAAAAg");
	this.shape_248.setTransform(1.8,22.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D5D6D7").s().p("AgMAVIAAAAIAAAAIAAAIIAAgIgAAFAZIAAAAIAEAAIABAAIAAAAIAAAAIgCAAIgDAAgAANgBIABAAIgBAAgAgMgcIAAAAIAAAAIAAAIIAAgIg");
	this.shape_249.setTransform(2.9,24.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#9D9FA1").s().p("AASBGIABAAIAAABIAAAAIgBgBgAgShFIAAAAIAAgBIABAAIAAABIAAAAg");
	this.shape_250.setTransform(3.5,28.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#747879").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_251.setTransform(1.6,21.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#A0A2A3").s().p("AADAnIgBgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAgAgDglIAAgBIAAAAIABAAIAAABIAAAAg");
	this.shape_252.setTransform(2,24.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#8D9091").s().p("AANAkIAAgBIABAAIAAAAIAAABIgBAAgAgNgjIAAgBIAAAAIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_253.setTransform(3.1,24.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#CCCECF").s().p("AARBJIAAgBIABABIAAAAgAgOAHIAAgBIABAAIAAABIAAAAIgBAAgAASAAIAAAAIAAAAIAAABgAgRhHIAAgBIAAAAIAAABg");
	this.shape_254.setTransform(3.6,27.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#CBCBCC").s().p("AAPAaIAAAAIABAAIAAABIgBgBgAgPgZIAAgBIABAAIAAABg");
	this.shape_255.setTransform(3.3,23.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#9B9E9E").s().p("AgHAqIAAgBIAAAAIABABgAASAfIAAgBIAAAAIAAAAIAAABgAgRgpIAAAAIAAABIAAAAg");
	this.shape_256.setTransform(3.6,24.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#C8CBCB").s().p("AASALIAAAAIAAABIAAAAgAgRgKIAAgBIABAAIAAABg");
	this.shape_257.setTransform(3.7,21.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#8C9091").s().p("AACAlIABAAIgBABgAgJAlIAAAAIAAABgAAOALIAAAAIAAAAIAAABIAAgBgAACgMIAAgBIABAAIAAABIgBAAgAgLgOIgBgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAgAgNglIAAAAIAAABg");
	this.shape_258.setTransform(4,24.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#9C9FA0").s().p("AACAPIgBAAIgBAAIAAgBIACABIAAAAgAgBgOIAAAAIAAABg");
	this.shape_259.setTransform(2.7,22.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#8C8F91").s().p("AgDAZIAAAAIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAAEAAIgBgBIABAAIAAABgAgCgZIAAAAIABAAIAAAAIgBABg");
	this.shape_260.setTransform(2.2,22.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C1C2C4").s().p("AARABIAAAAIAAgBIABABIAAAAgAgRAAIAAAAIABAAIAAAAIAAAAIAAAAg");
	this.shape_261.setTransform(3.7,20.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#97999B").s().p("AgQAbIAAAAIAAABIAAAAgAgJAaIgBgBIABAAIAAAAIAAAAIAAABgAARgaIABAAIAAABIgBgBgAgOgbIAAAAIABAAIAAAAIgBABg");
	this.shape_262.setTransform(3.5,22.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#B7B9B9").s().p("AAABSIAAgCIAAAAIAAAAIAAAAIAAACgAAAgQIAAgBIAAAAIAAAAIAAAAIAAABgAAAhAIAAgBIAAgBIAAAAIAAABIAAABgAAAhQIAAgBIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_263.setTransform(2.3,28);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#A5A8A9").s().p("AAPAaIAAAAIAAABIAAgBgAgOgaIAAAAIAAAAIABAAIAAAAIgBABg");
	this.shape_264.setTransform(3.7,22.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#888A8C").s().p("AgNAaIAAgBIAAgBIABAAIAAABIAAABgAANgRIAAgBIAAgBIAAgBIAAADgAgMgYIAAgBIAAAAIAAABg");
	this.shape_265.setTransform(3.7,23.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#8D9092").s().p("AgMAFIAAgCIAAABIAAABgAANgCIAAAAIAAgCIAAACIAAAAg");
	this.shape_266.setTransform(3.7,21.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#96989A").s().p("AgEAVIAAgBQABAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAIAAABIAAAAIgBAAIgBAAIAAAAgAAEgUIAAAAIABAAg");
	this.shape_267.setTransform(4.5,23.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#949798").s().p("AAHBLIAAAAIABAAIAAAAgAgNgCIgBgBIABAAIAAAAIAAABIAAAAgAAIgTIAAgBIABABgAAHgXIgBAAIAAAAIAAgBIABABIAAAAgAAIhFIAAgBIABABgAAOhLIAAAAIABABIAAABIAAABIgBgDg");
	this.shape_268.setTransform(4,28.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#919495").s().p("AAGBKIAAgCIAAABIABAAIAAABgAAKAAIAAAAIAAAAIABAAIAAAAIAAAAgAgEhIIgGAAIAAgBQADgBADACg");
	this.shape_269.setTransform(4.5,27.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#A0A3A4").s().p("AgMBWIAAgBIAAgKIABAAIAAAKIAAAAQALABANgBIgSABIgHAAgAAFg4IAAAAIABAAIAAAAIgBAAgAAFhVIgBAAIABAAIAAAAg");
	this.shape_270.setTransform(3.6,28.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#8E9193").s().p("AAHAsIAAgBIABAAIAAABgAANATIAAgBIAAAAIAAgBIAAACIAAAAgAgNggIAAgBIABAAIAAABgAAFgqIgBAAIAAgBIABABIAAAAg");
	this.shape_271.setTransform(3.7,24.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#9A9D9E").s().p("AAMBMIgCgCQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAIAAAAIgBAAgAgBgtIAAAAIABAAIAAAAgAANhFIAAgBIABAAIAAABgAgNhLIAAAAIAAgBIABAAIAAABIAAAAg");
	this.shape_272.setTransform(3.4,27.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#909394").s().p("AAIAoIAAgBIABAAIABAAIgCABgAgMglIAAgBIAAAAIAAAAIABAAIAAAAIgBACgAANgnIgBAAIABAAIAAAAg");
	this.shape_273.setTransform(3.1,24.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#9EA1A3").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_274.setTransform(2.8,20.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#9C9EA0").s().p("AAAAOIAAAAIAAAAIAAAAgAAAgMIAAAAIAAAAIAAAAgAAAgNIAAAAIABAAIAAAAIgBAAg");
	this.shape_275.setTransform(3,21.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FEFEFE").s().p("AgIAKIgBAAQgDgFAAgGQABgFADgDIABgBIAEgCIAAgBQAGAAAEACIAAAAIACADIABAAQAFAIgFAJIAAABIgCABIAAABIgEABIAAABIgEAAQgFAAgDgEg");
	this.shape_276.setTransform(3.6,21.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DADBDC").s().p("AgDAPIAAgBIgBAAIgBAAIAAAAIgBAAIAAgBIAAAAIgBAAIAAAAIAAgBIgBAAIAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgBIAAAAQAEAFAJgBIAAgBIADgBIAAgBIACgBIAAgBQAGgJgGgIIAAAAIgCgDIgBAAQgEgCgFAAIAAABIgFACIAAABQgDADgBAFIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIABAAIAAAAIAAgBIACgBIAAgBIABAAIAAAAIABgBIAAAAIAAAAIABAAIAAgBIABAAIAAAAIABAAIABAAIAAAAIAEAAIABAAIAAAAIABAAIAAAAIABABIAAAAIABAAIABABIAAAAIADACIAAAAIAAACIABAAIAAABIABAAIAAABIAAABIAAAAIAAAAIAAABIABAAIAAABIAAABIAAABIAAAAIAAAAIAAAAIAAABIAAAAIAAABIAAABIAAAAIAAABIgBAAIAAABIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAAAIAAABIgBAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIAAAAIgBAAIgBABIAAAAIgBAAIAAABIgBAAIAAAAIAAAAIgBAAIgFABg");
	this.shape_277.setTransform(3.7,21.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#878B8D").s().p("AAKAOIAAgBIAAAAIAAABgAgIgNIgBAAIAAAAIABAAIAAAAIAAAAg");
	this.shape_278.setTransform(4.3,21.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#BEC0C1").s().p("AAPAnIAAgBIAAAAIAAABQABAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAgAAOgJIAAgBIABAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAgAgOgmIgBAAIAAgBIABAAIAAABg");
	this.shape_279.setTransform(4.1,23.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#95989A").s().p("AAKAoIAAgBIABAAIAAAAIAAAAIgBABgAgKgnIAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_280.setTransform(3.7,23.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#909395").s().p("AAKAnIAAgBIABAAIAAAAIgBABgAgKgmIABAAIAAAAIABAAIAAAAIgCABg");
	this.shape_281.setTransform(3.9,23.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#CED0D0").s().p("AAOAvIAAAAIABAAIAAAAIAAAAgAgMAqIAAgBIABAAIAAABIAAABIgBgBgAgOgfIAAAAIAAgBIAAAAIAAABIAAAAgAAAguIAAAAIAAAAIAAgBIABABg");
	this.shape_282.setTransform(3.2,24.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#C9CACB").s().p("AANBQIAAgBIAAABIAAAAgAAAAQIAAgBIABAAIABAAIAAABIgCAAgAgDgcIgCAAIgBAAIAAAAIADAAIAAAAIAAAAgAgMhPIAAAAIABAAIAAAAg");
	this.shape_283.setTransform(4.2,27.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#979A9B").s().p("AAPAdIAAAAIAAAAIAAABIAAgBgAAIABIABAAIAAABIgBAAgAgOgBIAAgCIABABIAAABgAgIgcIAAgBIABAAIAAABIgBAAg");
	this.shape_284.setTransform(3.8,22.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#929596").s().p("AAPBSIAAAAIAAgBIABABgAgHBOIABAAIAAAAIAAAAIgBABgAgPgRIAAgBIABAAIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAgGgmIAAAAIAAAAIABAAgAAKguIABAAIABAAIAAAAIgCABgAgChRIAAAAIABAAIABAAIAAAAIgCAAg");
	this.shape_285.setTransform(3.3,27.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#999C9D").s().p("AgRBRIAAgBIABAAIAAABgAAOhPIAAAAIADAEIAAAAIgDgEgAgKhPIABAAIAAgBIABAAIgBABIgBAAg");
	this.shape_286.setTransform(3.5,27.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#959899").s().p("AgCBOIAAgBIABAAIAAABgAAMAQIAAAAIAAAAIABAAIAAgBIAAABIAAAAgAgNAKIAAgBIAAAAIAAgBIABABIAAABgAgOAIIAAgBIAAAAIAAgBIABABIAAABgAgIgjIAAgBIgBAAIABAAIABABgAAPg+IgBgCIABABIAAABgAALhMIgBgBIABAAIAAABg");
	this.shape_287.setTransform(3.3,27.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#969999").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_288.setTransform(4.7,19.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B9BCBC").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_289.setTransform(4.9,19.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#A8AAAB").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_290.setTransform(4.8,19.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#B5B7B8").s().p("AADAAIgFAAIAFAAg");
	this.shape_291.setTransform(3.7,19.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#505557").s().p("AgEAWIgBAAIAAAAIgCgBIAAAAIgBgBIgBAAIAAAAIgBAAIAAgBIgBAAIgBgBIAAAAIgCgCIAAgBIgBgBIAAAAIAAgBQgEgGAAgJQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIAAgBIAAgBIAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIABAAIAAgBIABgBIAAgBIABgBIAAAAIAAgBIAAAAIAAAAIABgBIAAAAIABgBIAAAAIABgBIAAAAIAAgBIABAAIABgBIAAAAIABAAIAAgBIABAAIAAAAIACgBIAAAAIABAAIAAgBIACAAIAAAAIABAAIAAAAIAFAAIABAAIAAAAIABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIAAAAIABAAIAAAAIABABIAAAAIABAAIAAAAIABABIABAAIAAABIAAAAIAEAEIAAABIABAAIAAABIAAAAIABABIAAABIABACIAAAAIABADIAAACIAAAAIAAAGIAAABIgBAAIAAABIAAAAIAAABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIAAABIAAAAIgBAAIgBABIAAAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIgBABIgBAAIAAAAIAAAAIgFAAIgEAAgAgNACIABAAIAAABIAAAAIAAACIAAAAIAAABIABAAIAAABIAAABIABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIABAAIAAABIABAAIAAABIABAAIAAABIABAAIAAAAIAAAAIABABIABAAIAAAAIABABIABAAIAAAAIAAAAIAGgBIABAAIABAAIAAAAIABAAIAAgBIABAAIAAgBIAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAAAIABAAIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAAAIgBgBIAAgBIgBgBIAAAAIgCgCIAAgBIgBAAIgBAAIAAgBIgBAAIgBAAIgBAAQgDgCgBABIgBAAIgBAAIAAABIAAAAIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIAAABIgBAAIAAAAIgBABIgBABIgBAAIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAABIAAAAIgBAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIgBAAIAAACg");
	this.shape_292.setTransform(3.6,21.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#898C8E").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_293.setTransform(4.1,19.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#ABADAE").s().p("AgMBUIAAAAIAAgBIAAgBIAAAAIAAACIAAAAgAALhTIAAAAIADABIgBAAIgBAAIgBgBg");
	this.shape_294.setTransform(3,27.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#A9ABAC").s().p("AALA0IAAAAIABAAIAAAAIAAAAgAgLgzIABAAIAAAAIAAABQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_295.setTransform(4.1,23);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#AEB0B0").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_296.setTransform(3.2,17.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#B0B3B4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_297.setTransform(3.5,17.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#B6B8B9").s().p("AANA/IAAgBIABAAIgBABgAgNA7IAAAAIAAgBIABABIAAAAIAAABIgBgBgAALAMIAAgBIABAAIAAAAIgBABgAgNgXIAAgBIABgBIABAAIAAABIAAAAIgBABgAAAg9IgCgBIACAAIAAABg");
	this.shape_298.setTransform(3.4,22.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#ACAEAF").s().p("AAMBbIAAgBIAAAAIABAAIAAABgAAIBZQgGgCgEACIAAgBQAFgBAGACgAgKAAIgBAAIgBAAIABAAIABAAIAAAAgAAAhYIAAAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_299.setTransform(3.3,25.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#ACAFB0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_300.setTransform(2.9,16.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#B8BABB").s().p("AgFA4IAAAAIABAAgAgHAgIAAAAIgBgBIAAAAIACAAIAAABgAAIAXIgDAAIAAgBIADAAIAAAAIAAABgAgDg0IAAgBIABAAIgBABgAgBg2IAAgBIABAAIAAABg");
	this.shape_301.setTransform(3.2,22.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#BABCBD").s().p("AAOAyIgBgBIAAgBIACABIAAABgAgIgdIABAAIAAAAIAAAAIgBABgAgMgvIgCgBIACABIABAAg");
	this.shape_302.setTransform(4,20.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#BABBBD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_303.setTransform(4.5,16.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#AAACAD").s().p("AADBZIAAgBIAAAAIABABgAgBAaIAAgBIABAAIAAABIgBAAgAACABIgCgBIAAAAIACAAIAAAAIAAABgAgDhXIABgBIABAAIgCABg");
	this.shape_304.setTransform(4.4,25.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#A6A8A9").s().p("AAFAXIAAgBIAAAAIAAABIAAAAIAAAAgAgEgWIAAAAIAAgBIABAAIgBABg");
	this.shape_305.setTransform(4.5,19.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#BDBFBF").s().p("AgGBSIAAAAIABAAIgBAAgAAGAeIAAAAIABAAIAAAAIAAAAIgBAAgAASAUIAAAAIABAAIAAgBIAAAAIAAABIgBABgAgQgeIAAgBIABAAIAAABgAgRhJQgBgEAAgEIABAAIAAAHIAAABg");
	this.shape_306.setTransform(3.5,26.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#8F9193").s().p("AgTBlIAAAAIAAgTIAAAAIAAATIAAAAgAATgJIAAAAIAAgDQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABgAALg2IABAAIgBAAgAgMhGIABAAIAAAAIgBABgAgThkIAAAAIAAAHIAAgHg");
	this.shape_307.setTransform(3.7,28);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#AFB1B2").s().p("AAPAuIgBgCIAAAAIABABIABABIAAAAgAgPgdIABAAIAAgBIABAAIAAABIgCAAgAgFgsIgBgBIABABIAAAAg");
	this.shape_308.setTransform(3.6,20.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#C3C5C5").s().p("AgIAHIAAAAIAAgBIABAAIAAABgAAIABIABAAIAAAAIgBABgAAAgGIAAAAIAAABg");
	this.shape_309.setTransform(3,16.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#AFB2B3").s().p("AgDAGIAAgBIAAAAIABAAIAAAAIgBABIAAAAgAADgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIgBgBg");
	this.shape_310.setTransform(2.6,16.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#ABACAD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_311.setTransform(2.6,17);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#C3C4C5").s().p("AAAAAIAAAAIAAAAIAAAAIABAAg");
	this.shape_312.setTransform(2.3,15.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#B6B9BA").s().p("AAAAAIAAAAIAAAAIABAAg");
	this.shape_313.setTransform(1.9,15.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#4C5153").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_314.setTransform(1.7,14.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#959799").s().p("AgHBDIgBgBIABAAIAAAAIAAABIAAAAgAAQAyIgBAAIAAgBIAAAAIABABIAAAAgAgDAdIgBAAIgBAAIAAgBIACABIAAAAgAgOg6IAAAAIgBgBIAAAAIAAgIIAAAAIABAIIABABg");
	this.shape_315.setTransform(3.3,20.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#C1C2C3").s().p("AAMBpIAAgBIAAAAIAAABgAACBoIABAAIAAAAIgBABgAgLhoIABAAIAAAAIgBAAIAAAIIAAgIg");
	this.shape_316.setTransform(2.8,24.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#B1B3B4").s().p("AgIA9IAAAAIAAgBIAAABIAAAAgAgIgjIAAgBIAAAAIABAAIAAABIgBAAIAAAAgAAJg6IgCgCIAAAAIACABIAAABg");
	this.shape_317.setTransform(2.6,21.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#C4C6C7").s().p("AgJBjIABAAIgBAAgAAJgBIAAAAIABAAgAgFhiIgBAAIABAAg");
	this.shape_318.setTransform(4,25.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#B5B8B8").s().p("AAAAAIAAAAIAAAAg");
	this.shape_319.setTransform(4.2,12.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#CDCECF").s().p("AADBNIgDAAIAAAAIADAAIAAAAIAAAAgAgJAxIAAgBIABABgAAJhLIAAgBIABAAIAAABg");
	this.shape_320.setTransform(3.5,20.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#C1C3C3").s().p("AgOBHQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIAAABIgBgCgAgNAWIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAgAAAgzIAAgBIAAgBIAAAAIAAABIAAAAIAAAAIAAABgAAOhHIAAAAIAAgBIABABIAAAAg");
	this.shape_321.setTransform(3.1,20.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#D3D4D5").s().p("AgBA0IAAAAIABAAIAAAAgAANgrIAAgBIAAgGQABADgBAEgAgNgzIAAAAIAZAAIgZAAg");
	this.shape_322.setTransform(4.3,23);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#B0B3B3").s().p("AgBA7IAAAAQAAgGAAgGIAAgBIAAAAIAAABQABAHgBAFgAgMg5IAAgBIAZAAIABAAIAAAAIgZAAIgBAAIAAABg");
	this.shape_323.setTransform(4.3,20.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D4D5D7").s().p("AAAADIAAgBIAAgDIAAgBQAAACAAADg");
	this.shape_324.setTransform(5.7,14.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#515658").s().p("AACBLIgEAAIAAAAIgBgBIgDAAIAAAAIgBgBIgBAAIgBgBIAAAAIAAAAIgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAgBIAAAAIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBQgCgGAAgIQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIAAgBIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAAAIABgBIAAAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIABgBIAAAAIAAgBIAAAAIABAAIABABIABAAIAAAAIABAAIAAABIABAAIAAABIABAAIAAABIAAAAIgBAAIAAABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAAAIAAABIAAABIAAABIAAABIAAAGIAAABIAAABIAAAAIAAABIABAAIAAABIAAACIABAAIAAAAIAAACIABAAIAAAAIAAAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABAAIAAAAIABABIAAAAIABABIAAAAIAAAAIACAAIAAABIACAAIABAAIABAAIABAAIABAAIAAAAIACgBIABAAIABgBIAAAAIAAAAIABgBIABAAIAAgBIABAAIAAgBIAAAAIABgBIAAgBIABgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBQABgDAAgDIAAAAIAAgBIgBgCIAAAAIAAgCIgBAAIAAgBIAAgBIgBgBIAAAAIAAgBIgBAAIAAgBIgCgBIAAAAIAAgBIgCAAIAAAAIAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAABIAAABQABAGgBAGIAAAAIgBAAIgCAAIAAAAIgBgVIABAAIAAAAIAAAAIAAAAIADAAIABAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAIABABIABAAIAAAAIABAAIABABIAAAAIACACIABAAIAAAAIACACIAAAAIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAABIAAACIAAAAIABABIAAABIAAACIAAAAIAAADIAAABIAAADIAAABIgBAAIAAABIAAAAIAAAAIAAABIAAABIAAAAIgBAAIAAABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIgBAAIAAABIAAAAIgBABIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIgBAAIAAAAIgBAAIAAABIAAAAIgBAAIgBAAIAAAAIAAAAIgBAAIAAABgAATgdIAAAAIglAAIAAgBIAAgHIAAAAIAAAAIAAgBIABAAIAAgBIABAAIAAgBIACAAIAAgBIAAAAIAAAAIABAAIAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgBIABAAIAAAAIAAgBIABAAIAAgBIABAAIABAAIAAgBIAAAAIABgBIAAAAIAAAAIABAAIABgBIABgBIABgBIABgBIAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIgCAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAgBIAAAAIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgCgBIgBgBIAAAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCgCIgBgCIAAgBIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAAgFIAlAAIAAAAIABAAIAAAGIAAABIgBAAIgZAAIAAABIAAAAIABABIABABIAAAAIACABIAAABIACACIAAAAIAAACIABAAIACACIAAAAIABABIAAAAIADADIABAAIAAABIgBAAIAAAAIAAABIgBAAIAAAAIAAABIgBAAIAAAAIAAABIgBAAIgBAAIAAABIAAAAIgBAAIAAABIAAAAIAAAAIgBAAIgBABIAAAAIAAAAIAAABIAAABIAAAAIAAABIgCABIAAAAIgBAAIgBABIAAAAIgBABIAAAAIgBABIAAAAIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAZAAIABAAIAAABIAAAGIAAABIAAAAg");
	this.shape_325.setTransform(3.6,21.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#6A6E70").s().p("AgSgCIAlAAIAAAAIAAAAIglAAIAAADIAAABIAAABIAAgFg");
	this.shape_326.setTransform(3.6,14.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#9B9D9F").s().p("AASBiIgBAAIgBgBIgBAAIgCgBIAAAAIAAgBQAEADACgCIAAAAQgCgFgEAAIAAAAIAAgBIABAAIAEACIAAAAIAAAAIABABIAAAAIAAAAIABABIAAABIAAACIAAAAIgBAAIAAABgAALgNIAAAAIAAABIAAABgAAThgIAAgBIgmAAIAAAAIAmAAIAAAAIAAABg");
	this.shape_327.setTransform(3.7,23.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#A0A2A4").s().p("AgEBIIAAAAIAAgBIABAAIAAABIgBAAgAAEhHIAAAAIABAAIAAAAg");
	this.shape_328.setTransform(5.1,20.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#A5A7A9").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_329.setTransform(5.2,12.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#C1C3C4").s().p("AgLBuIAAAAIABAAIgBAAgAgPARIgBAAIAAAAIAAAAIACAAIAAAAgAAQhtIAAAAIABABIAAAAIgBgBg");
	this.shape_330.setTransform(3.6,23.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#B6B8B8").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_331.setTransform(5.5,12.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#D4D5D6").s().p("AATCSIAAAAIAAgQQABAIAAAIgAgTgvIAlAAIABAAIgTAAIgTAAgAAThjIAAgBIAAgHQABADAAAFgAAThxIAAAAIAAggQABAPAAARg");
	this.shape_332.setTransform(3.7,23.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#B3B5B5").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_333.setTransform(5.3,12);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#AEB0B1").s().p("AAMCIIgBgDIABAAIAAACIAAABgAAGg8IAAAAIAAgBIABAAIAAABIgBAAgAgOhHIAAAAIgBgBIACABIAAAAgAAPiHIAAAAIABAAIAAAAIgBAAg");
	this.shape_334.setTransform(3.7,22.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#C0C2C3").s().p("AgSCHIAAgBIAAgBIABAAIAAABIAAABgAgJB5IAAgBIABAAIgBABgAAIB3IAAAAIABABIAAAAIgBAAIAAgBgAgSgsIAAgBIABAAIABAAIAAAAIgBABgAAGg5IABAAIAAAAIABAAIAAAAIgCABgAARiFIABAAIABAAIAAAAIgCABg");
	this.shape_335.setTransform(3.6,22.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#BDBEBF").s().p("AgMBxIAAgBIAAAAIAAABIAAAAgAANhvQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIACAAIAAABg");
	this.shape_336.setTransform(3.4,23.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#BEBFC1").s().p("AAHADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIACABgAgFgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIACAAIAAABg");
	this.shape_337.setTransform(3.3,12.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BBBDBE").s().p("AgJBZIAAgBIAGAAIABAAIABAAIAAABIgIAAgAANBGIAAAAIAAgEIAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIAAgCIAAAAIAAABQACAFgCAFgAALA2IAAgBIAAAAIABABIAAAAgAACgGIAAAAIgBAAIAAgBIACABgAgMhXIgBgBIACABIAAAAg");
	this.shape_338.setTransform(4.3,20.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#C8CACA").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_339.setTransform(2.8,11.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#ACAFAF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_340.setTransform(2.7,11.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#C9CACA").s().p("AAJBHIgBAAIABAAIAAAAIAAAAgAgHAMIgBAAIAAgBIABAAIAAABgAgIhFIAAgBIAAAAIAAAAIABABg");
	this.shape_341.setTransform(3.5,18.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#BCBEBE").s().p("AAKBEIgBAAIgBAAIAAAAIACAAgAgJgIIAAAAIAAgBIABAAIAAABIgBAAIAAAAgAgJhDIACAAIAAAAIAAAAIgCABg");
	this.shape_342.setTransform(3.7,17.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#C2C4C4").s().p("AADAGIgBgBIAAAAIACAAIAAABgAgDgEIAAgBIABAAIABAAIAAABIgCAAg");
	this.shape_343.setTransform(3.7,11.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#ABAEAF").s().p("AADAFIAAAAIAAAAgAgCgEIAAAAIABAAIAAAAg");
	this.shape_344.setTransform(3.6,11.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#ADAFB0").s().p("AgLB5IAAAAIAAAAIAAABgAAMBwIgBAAIABAAIAAAAgAAAh4IAAgBIAAAAIAAABIAAAAg");
	this.shape_345.setTransform(3.1,23);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#ADB0B1").s().p("AAMBgIAAAAIAAAAIAAAAIAAABgAgMhUIAAAAIACAAIgBAAgAgJhVIAAAAIAAAAIAAAAgAALhgIAAAAIAAABg");
	this.shape_346.setTransform(4,18.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BFC0C1").s().p("AgKBkIgBgBIABAAIAAABgAgLAvIAAAAIAAAAIAAAAgAAAhGIAAAAIAAAAgAgJhPIAAgBIABAAIAAABIgBAAgAgHhQIAAgBIACAAIAAABIgCAAgAgMhWIAAAAIABAAIAAAAgAgKhXIAAAAIABAAIgBAAgAgJhYIAAAAIABAAIAAAAIgBAAgAANhjIAAAAIAAABg");
	this.shape_347.setTransform(3.9,19);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#AEB1B2").s().p("AAAAFIAAgBIAAAAIAAABgAAAgDIAAAAIABAAIAAAAIgBAAg");
	this.shape_348.setTransform(3,10.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#B4B6B7").s().p("AAMBDIAAAAIAAAAgAAQA6IAAAAIAAAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAgAgPAuIAAAAIAAAAIAAAAIAAABgAgHAAIABAAIAAAAIAAAAIgBAAgAAAgFIgBgCIABACIAAAAgAgIgNIgBgBIABAAIABABgAgChCIAAAAIABAAIgBABg");
	this.shape_349.setTransform(4,16.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#CACCCC").s().p("AAHB7IAAgBIABABgAAFBEIAAAAIABAAIAAAAIAAAAIgBAAgAgPAzIAAAAIAAgBIAAgBIAAgGIAAAAQAAAFABADIAAAAgAAQgMIAAAAIAAgBIAAABIAAAAgAgDh5IAAgBIABAAIAAABg");
	this.shape_350.setTransform(3.9,22.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#CACBCC").s().p("AgKBeIAAAAIABAAIAAAAgAAQBZIAAgBIAAAAIAAABIAAABgAgTBCIAAgBIAAgBIABAAIAAABIAAABgAARAJIAAAAIAAgBIAAABIAAAAgAATg6IABAAIAAABIgBAAIAAgBgAAGhAIgBgBIABAAIAAABgAgHhHIABAAIAAABIgBgBgAgEhdIAAgBIABAAIAAABg");
	this.shape_351.setTransform(3.6,19.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#C6C7C8").s().p("AgGAtIAAAAIABAAIAAAAgAAAgeIgBgBIABAAIAAABgAAFgsIABAAIABAAIAAAAIgCABg");
	this.shape_352.setTransform(3.6,14.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#BCBEBF").s().p("AAIA/IAAgBIABAAIAAAAIABAAIAAAAIgCACgAgJg6IACgBIABAAIAAABIgDAAgAAAg/IAAAAIAAAAIAAAAIAAABg");
	this.shape_353.setTransform(4.5,16.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#B0B2B3").s().p("AAFCCIgBgBIABABIAAAAIAAABIAAgBgAALgUIgBAAIABAAIABAAIAAAAgAgKhtIAAAAIAAAAIAAAAgAAAiCIAAAAIAAABg");
	this.shape_354.setTransform(4.3,22.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C0C1C2").s().p("AgPA3IAAAAIAAgBIAAAAIAAABIAAAAgAAPg2IAAAAIABAAIAAAAg");
	this.shape_355.setTransform(3.2,15.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#ADB0B0").s().p("AgLBcIgBAAIAAAAIABAAIAAABIAAgBgAgLBHIAAgBIAAgBIABAAIAAABIAAABgAAChKIABAAIAAAAgAAMhbIAAgBIABAAIgBABg");
	this.shape_356.setTransform(3.5,19.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#BBBDBD").s().p("AAEBEIABgBIABAAIAAAAIAAAAIgCABgAAAguQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAABIAAAAgAAGg1QABgIgCgGIAAAAIABAAQACACgBAEIAAANIAAAAIgBgFgAgFgxQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIACABIAAAAgAABhBIACgBIAAAAIAAABIgCAAg");
	this.shape_357.setTransform(4.3,16.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#C6C8C8").s().p("AALBOIAAgBIABAAIAAABgAgTA8IAAgBIABAAIAAABgAATAQIAAgBIAAgBIAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABgAAMhAIgBAAIABAAIAAAAgAgBhHIgBAAIABAAIAAAAgAgQhNIABAAIAAAAIgBAAg");
	this.shape_358.setTransform(3.7,19.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#C8C9CA").s().p("AgRCDIAAAAIAAgCIABAAIAAACIAAAAgAgEA5IAAAAIACAAIAAAAgAARhaIABAAIAAAAIgBAAIAAAAgAAChiIABABIAAAAIgBAAIAAgBgAAQhjIgBgBIABABgAgKhoIgBAAIACAAIAAAAgAAIiCIAAAAIABAAIAAAAg");
	this.shape_359.setTransform(3.5,22.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#B7B9BA").s().p("AgNAaIAAAAIAAAAIABAAIAAAAIgBAAgAAOgLIAAAAIAAgBIABABgAAAgSIAAAAIAAgBIAAABgAAKgVIACAAIAAABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAgAgNgZIgBAAIAAAAIABAAIAAABIAAgBg");
	this.shape_360.setTransform(3.7,14.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#ABAEAE").s().p("AgKB8IAAAAIABAAIgBAAgAASABIAAAAIAAgGIABAAIAAAAIAAABQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAAAIAAABIAAAAgAgDheIgBgBIABABgAAGhhIAAAAIAAAAIAAAAgAgShkIAAgBIABAAIAAABgAAAhyIAAAAIABAAIAAAAIgBAAgAAAh6IABAAIgBAAgAACh7IABAAIgBAAg");
	this.shape_361.setTransform(3.8,22);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#BEBFC0").s().p("AASATIgBgBIACABIAAAAgAAKAPIAAgBIABABgAgDAIIAAAAIABAAgAAIAFIABAAIAAABIgBgBgAgRABIgBAAIABAAIAAAAgAADgJIAAgBIABAAIAAABIgBAAgAABgRIABAAIgBABgAADgSIABAAIgBABg");
	this.shape_362.setTransform(3.6,11.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#B3B6B6").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_363.setTransform(1.7,11.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#B9BBBC").s().p("AgGBVIgBgBIABABIAAAAgAgKAoIAAgBIAAAAIABABIAAAAIgBAAgAgSAeIAAgBIABAAIAAABgAAShKIAAAAIAAAAIABAAIAAABgAgJhTIAAgBIABAAIAAAAIAAAAIgBAAIAAABIAAAAg");
	this.shape_364.setTransform(3.6,19.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#CACBCB").s().p("AgTBcIAAAAIAAAAIAAAAgAAXAuIgBAAIAAAAIAAgBIAHAAIABAAIAAAAIgGAAIAAABgAgdhbIAAAAIABAAIAAAAg");
	this.shape_365.setTransform(4.9,19.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#919395").s().p("AAAAEIAAgBIAAgGIAAAAIAAAGIAAABg");
	this.shape_366.setTransform(1.6,11.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#4D5254").s().p("AASAWIgjgSQgBgDAAgCIAAgBIAlgSQABAPgCANIgBAAQgEgCABgGIAAgLIgBABIgBgBIAAABIgBAAIAAAAIgBAAQgKAFgLAFIAAAAQAHAFAHADIAQAIIAAABQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAg");
	this.shape_367.setTransform(3.6,11.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#C0C2C2").s().p("AAPBLIAAgBIABAAIAAABIAAAAgAgPhKIABAAIAAAAIAAAIIgBgIg");
	this.shape_368.setTransform(3.2,18.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#BABCBC").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_369.setTransform(1.6,10.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#8E9293").s().p("AATBUIAAAAIAAgBIAAAAIAAABIAAAAgAgMBRIAAgBIAAABIAAAAgAgQA9IAAAAIAAAAIAAAAIAAABgAgFALIAAgBIABAAIAAABIgBAAgAgShTIAAgBIAAAAIABAAIAAABIgBAAg");
	this.shape_370.setTransform(3.6,19.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#BDBFC0").s().p("AAMCAIgBAAIABAAIAAAAIAAAAgAANBDIAAgBIABAAIAAABIgBAAgAgGgyIAAgBIABAAIgBABgAAEg0IABAAIAAABIgBAAgAABhqIgBgBIABAAIAAABgAgMhzIAAAAIAAgBIAAAAIAAABgAAGh1IAAAAIABAAIAAAAIgBAAgAAKh/IABAAIgBAAg");
	this.shape_371.setTransform(3.1,22.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#B5B6B8").s().p("AgIAAIAAAAIABAAIAAAAIgBAAgAAIAAIAAAAIABAAIAAAAIgBAAg");
	this.shape_372.setTransform(2.8,10.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#6F7375").s().p("AATAXIgDgBIAAAAIgBAAIgBgBIgBAAIgBgBIAAAAIgBAAIAAgBIgBgBIgBAAIAAAAIgBgBIgBAAIAAAAIgBgBIgBAAIgBAAIgCgBIgBgBIgBAAIAAAAIgBgBIgBAAIgBgBIgBAAIAAAAIgBgBIgBAAIAAAAIAAgBIgBAAIAAAAIgBgBIgBAAIAAAAIgCgBIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIAAAAIgBAAIAAgBIAAgGIAAAAIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIABAAIAAgBIABAAIABAAIAAgBIABAAIABgBIAAAAIABAAIAAgBIABAAIABAAIAAAAIABgBIAAAAIAAAAIABAAIAAgBIABAAIAAAAIABAAIABgBIAAAAIABAAIABAAIAAAAIAAgBIABAAIABgBIABAAIAAgBIABAAIABgBIABgBIABAAIACAAIAAgBIABAAIABgBIABAAIAAgBIABAAIABAAIAAgBIABAAIAAAAIABAAIAAAAIACgBIAAAAIABAAIABAAIAAAeIAAAAIgBABIAAgBIgBAAIgCAAIAAgBIgBAAIAAAAIgBgBIAAAAIgBAAIAAgBIABgKQABgFgDgBIACgBIAAALQgBAGAEACIABAAQACgNgBgPIglASIAAABQgBACABADIAkASIAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgBIgQgIQgHgDgIgFIAAAAQALgFALgFIAAABIAAAAIgCAAIAAABIgBAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIAAAAIgBABIAAAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAAAIAAAAIAAABIgBAAIgCAAIAAAAIAAAAIgBAAIAAAAIAAAAIABABIAAAAIABABIABAAQgBAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAAIABABIABAAIAAABIAAAAIABAAIAAAAIABAAIABABIABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAAAIABABIAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIAAAAIABAAIAAAAIABAAIABABIAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAAAIABABIABAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAABgBIAAAAIABABIAAAHIAAABg");
	this.shape_373.setTransform(3.7,11.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#C7C8C9").s().p("AgMBcIAAgBIAAgBIABABIAAABgAAMhbIABAAIgBABg");
	this.shape_374.setTransform(3.7,18.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#B3B5B6").s().p("AAIAjIgDgDIAEADIAAAAgAAOAFIAAgBIAAAAIABABgAAIACIgBgBIAAAAIABAAIAAABgAAAAAIAAgBIAAAAIAAABgAgFgDIAAgBIAAABgAgNgHIgBAAIAAgBIABABIAAAAIAAAAgAgOgUIAAgBIABAAIAAABIgBAAgAgMgVIAAgBIABAAIAAABIgBAAgAgKgWIAAgBIABAAIABAAIAAABIgCAAgAgCgaIAAgBIABAAIAAABIgBAAgAAAgbIAAAAIAAAAgAAJggIAAAAIABAAIAAAAIgBABgAALghIAAAAIABAAIgBABgAANgiIAAAAIABAAIgBABg");
	this.shape_375.setTransform(3.5,12.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#C9CBCB").s().p("AAQBcIAAgBIABAAIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAgAAQBKIAAAAIAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAgAAMgzIgBAAIABAAIAAAAgAgBg6IgBAAIABAAIAAAAgAgQhBIABAAIAAABIgBgBgAgQhPIAAAAIABAAIAAAAgAgOhQIAAAAIABAAIAAAAgAAGhaIAAgBIABAAIAAABgAAIhbIAAgBIABAAIAAABg");
	this.shape_376.setTransform(3.9,18.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(113,75,24,0.647)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_377.setTransform(0.1,0.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(55,36,11,0.431)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_378.setTransform(0.4,0);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(161,106,35,0.792)").s().p("AAAAAIAAAAIAAAAg");
	this.shape_379.setTransform(0.5,0);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#F1CC9C").s().p("AAIAEIAAgHIAAAAIAAAAQABADgBAEgAgHAEIAAgHIAAAHIAAAAg");
	this.shape_380.setTransform(3,3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FEFEFD").s().p("AAIAKIgGAAIAAgBQACgGgEAAQgCABACAGIgBAAIgFAAIAAgBIgBgJIAAAAIgDAAIAKgJQAHAGAEADIgBAAIgBAAIgBAAIAAAJIAAABg");
	this.shape_381.setTransform(3,2.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#EDC085").s().p("AAAAAIAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAg");
	this.shape_382.setTransform(20.2,2.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#E29A3A").s().p("AgBAAQABgCACACQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAg");
	this.shape_383.setTransform(19.4,2.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#F2D1A7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_384.setTransform(19.3,2.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FDF8F2").s().p("AAAAFIgBAAIAAAAIgCgCIAAAAIAAgCIAAgBIADAAIAAAAIAAAAIAAAAIACgBIAAAAIgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQgBAAgBAAQAAAAAAgBQgBAAAAgBIADgBIAAAAIAAAAIAAAAQAFABgCAFIAAABIABABIAAAAIgEABgAgBABQABAFACgFQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgBABg");
	this.shape_385.setTransform(19.4,2.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#F7E2C6").s().p("AAAABIAAgBIAAAAIAAAAIAAABg");
	this.shape_386.setTransform(18.9,2.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#F3D7B1").s().p("AACAAIgEAAIAAAAIAFAAg");
	this.shape_387.setTransform(17.9,1.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FCF6EE").s().p("AgEAHIAAgBIAAgMIAEAAIAAAAQAEABABAEIAAAAIAAACIAAABQgBAFgFAAIgDAAgAgCgEIAAAAIAAAIIAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAGgEgFgEIAAgBIgBgBIgCABg");
	this.shape_388.setTransform(18.2,2.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#ECBE82").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAg");
	this.shape_389.setTransform(22.1,2.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#F1D1A7").s().p("AAAgEIAAAAIAAAJIAAgJg");
	this.shape_390.setTransform(22.3,2.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E19632").s().p("AAAADQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgBIAAAAIAAAAIAAAAIAAAAIAAgBQADgEAAAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_391.setTransform(20.5,2.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FBF3E8").s().p("AgDAFIAAAAQADABACgCIAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgDgCABgDIAAAAQADgFADACIABAAQACAHgEAFIAAABIgCAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAACAAQAAgHgDAEIAAABIAAAAIgBAAIABABIAAABIgBAAIABAAIAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAgBQAAABABAAQAAgBABAAQAAAAAAAAQAAgBAAAAg");
	this.shape_392.setTransform(20.5,2.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#E7AB5D").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_393.setTransform(24.3,2.8);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#ECBB7B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_394.setTransform(24.5,2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#F6E1C6").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_395.setTransform(24.2,2.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FCF4EA").s().p("AgDAAIAFgCIgBAAQgBgCgCADIAAgBIAAgBIABgBIABAAIAAgBIAAAAQAGACgCAIIgCAAIgCABQgDAAAAgGgAgCACQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABgBQgBgCgCABIAAAAIAAAAIAAABg");
	this.shape_396.setTransform(24.6,2.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#EEC289").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_397.setTransform(23.9,2.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#EEC58F").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_398.setTransform(23,2.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#EDBF83").s().p("AARAAIgBAAIAAAAIABAAIAAAAgAgPAAIgCAAIAAAAIACAAIAAAAg");
	this.shape_399.setTransform(21.1,2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#F1D0A4").s().p("AAAAAIAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_400.setTransform(29.6,3.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E19634").s().p("AAZAAIABAAIAAAAIAAgBQAFgFABAGIAAACIgEABQgCAAgBgDgAgfAAIAAAAIAAAAIAAgBQAFgFABAGIgBACIgDABQgCAAAAgDg");
	this.shape_401.setTransform(24.6,2.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#F1CEA1").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_402.setTransform(26.7,2.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#EDC086").s().p("AAdAAIAAAAIAAAAIAAAAgAgcAAIAAAAIAAAAIAAAAg");
	this.shape_403.setTransform(24.3,2.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#EEC58E").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_404.setTransform(26.7,2.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FDF7EF").s().p("AAdgBIAAAAIAAADIAAAAIAAgDgAgcACIAAgDIAAAAIAAADIAAAAg");
	this.shape_405.setTransform(24.1,2.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E19532").s().p("AgrAEIAAAAIAAgIIAAAAQADgBADABIAAABQAEAEgGAEIgCABQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBgAAmAFQgBgFAAgEIADAAIAAAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIABAAIAAAAIAAABIgBAAIAAABIAAAAQAAADgEAAg");
	this.shape_406.setTransform(22.3,2.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#F4DAB7").s().p("AACAAIgDAAIAAAAIADAAIAAAAg");
	this.shape_407.setTransform(26.1,1.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#F1CEA0").s().p("AABAAIgBAAIAAAAIABAAIAAAAg");
	this.shape_408.setTransform(26.2,1.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FCF7EF").s().p("AgEAHIAAgBIAAgMIAEAAIAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQADAEgEAFIAAABQgCABgBAAIgEAAgAgCgEQAAAEABAFIABAAQACAAABgDIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAAAIAAgBQAAgBgBAAQAAgBAAgBQgBAAAAAAQgBAAAAAAIAAgBIgCAAg");
	this.shape_409.setTransform(26.3,2.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#ECBF82").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_410.setTransform(30.1,2.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#F5DAB8").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_411.setTransform(29.7,3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#F4DAB9").s().p("AAAgCQACACgBAEIgBABQABgFgBgCgAAAgCIAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAAAg");
	this.shape_412.setTransform(29.3,2.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FDF9F3").s().p("AgWAFQACgFgFgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAADgBADIgBAAIAAgGIAAAAIAAAAIgBgBQgBAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAFgDABIAAAAIAAgJQABABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAAAAIABAAIABAAQACACADgCIAAAAIABAAIABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIABABIAAAAIAAAAIAAAAQABAEgCACIAAABQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAgAAkAGIAAAAIgCAAIgBgBIAAAAIAAgBQABgFgDgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBIAAgBIADADIAAAAIAAABIAAABIAAAAIgCAAIABAGQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABgBIAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_413.setTransform(26.1,2.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#ECBC7E").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_414.setTransform(29.8,2.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FCF7F0").s().p("AAYACIAAgBIAAgCIAAgBIADgCIAAAAIACAAIAAAAQAEAAABAEIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAAQgDAEgCAAQgDAAgCgDgAAZAAQABAGAFgEIABgCQgCgGgEAFIAAABIgBAAgAghACIAAgBIAAgCIAAgBIADgCIAAAAIACAAIABAAQADAAAAAEIAAAAIAAABIAAAAQgCAEgCAAQgDAAgCgDgAggAAQABAGAFgEIABgCQgBgGgGAFIAAABIAAAAg");
	this.shape_415.setTransform(24.7,2.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#F5DEC0").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_416.setTransform(28.2,2.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FCF5EB").s().p("AgDABIAAgCIAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIAAAAIAAAAIAAAAIABAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIABABQgCgDgCAAIAAAAQgDADADADIAAAAIAAAAQABgBAAAAQABgBAAAAQABAAAAAAQAAABAAAAIAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAgCgEg");
	this.shape_417.setTransform(28.7,2.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#E19633").s().p("AAZABIAAgBIAAAAIAAAAIAAAAIAAgBQAEgEACAFIAAACIgDACQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBgBgAgfACIAAgBIAAAAQAEgBABACIgCABIgBAAIgCgBg");
	this.shape_418.setTransform(27.5,2.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#EDBF84").s().p("AAiAAIgBAAIAAAAIACAAIAAAAgAghAAIgBAAIAAAAIACAAIAAAAg");
	this.shape_419.setTransform(27,2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FCF4EB").s().p("AgCAEQgDgCABgDQABgDADAAIAAAAIAAAAIAAAAIABAAQAEABAAADIgCAEIAAAAIgDABIgCgBgAgCAAIAAAAIAAABQACAEACgDIAAgCQgCgFgCAEIAAABIAAAAIAAAAIAAAAg");
	this.shape_420.setTransform(30.4,2.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FEFBF8").s().p("AgBAFIAAgJQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAIABAAQgCABAAADQAAACAAADg");
	this.shape_421.setTransform(31.4,2.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#ECBD7F").s().p("AAxAAIgBAAIAAAAIACAAIAAAAgAAVAAIgBAAIAAAAIABAAIABAAgAAKAAIgCAAIAAAAIACAAIAAAAgAgvAAIgCAAIAAAAIACAAIAAAAg");
	this.shape_422.setTransform(26.6,2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(128,128,128,0.737)").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_423.setTransform(48.7,41.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(128,128,128,0.729)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_424.setTransform(49,40.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(148,148,148,0.765)").s().p("ADxABIAAgBIABAAIAAABIgBAAgADzAAIABAAIAAAAIgBAAgAjzAAIAAAAIABAAg");
	this.shape_425.setTransform(24.6,40.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(0,0,0,0.435)").s().p("AAACnIAAhXIAAhWIAAhYIAAhXIAAAAIAAAHIAAABIAABXIAABWIAABXIAABYIAAAHIAAgPg");
	this.shape_426.setTransform(0.1,22.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FEFBF7").s().p("AAAACIAAAAQgCAEgEABQABgEAEgDIgGgFIAAgBQAEgBACAEIABADQAEgFADgBIAAAAQAAAEgGACIAAAAQAFADABAEIAAAAQgEgBgDgEg");
	this.shape_427.setTransform(46.1,2.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(161,107,35,0.792)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_428.setTransform(49,0.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(113,74,24,0.643)").s().p("AAAAAIAAAAIAAAAg");
	this.shape_429.setTransform(48.7,0);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(225,149,49,0.996)").s().p("ADBAYIhYAAIhXAAIhWAAIhYAAIhXAAIAAAAIAAgIIAAgBIAAgiIAAAAIAAAAIAAgBIAAAAIACgCIAAAAIABAAIABgBIBYAAIBXAAIBWAAIBYAAIBXAAIArAAIABAAIAAABIABAAIAAAAIACACIAAABIAAAAIAAAAIAAAiIAAABIAAAIIAAAAIgzAAgAgsAIQADADAEgBIAAgBQAEgFgCgHIgBAAQgFgCgDAFIAAAAQgBADADADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQABAAAAAAQABAAAAAAQAAABAAAAIAAAAQgDACgEgBgAjUAJIAAAAIAGAAIAAAAQABgDAAgGIAAAAIABAAIABAAQgEgEgHgFIgMAJIADAAIAAAAIAAAJIABAAIAFAAIABAAQgCgFAEgBQAEAAgCAGgADXACQADAEAFABIAAAAQgCgEgEgDIAAAAQAFgCABgEIgBAAQgDABgEAFIgCgCQgDgFgDABIAAABIAGAFQgFAEgBADQAEgBAEgEgAABgBIABAAIgFACQABAIAEgDIACAAQACgHgGgCIAAAAIAAAAIAAAAIAAAAIgCACIAAAAIgBAAIAAABIABAAIAAAAIACgBIABAAgAAugCQACACAAAEIAAABIABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAgBIAAAAIABAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIgBgGIACAAIAAAAIABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAAAAIgDgDIAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAgAA1AAQgBAEADACQADABADgBIABgBIABgEQAAgDgEgBIAAAAIAAAAIgCAAIAAAAIAAAAQgDAAgBADgAg3AFIAAAAIACABIAAAAIABAAIAAAAIAGAAIAAgBIgBgBIAAAAQACgGgFgBIAAAAIgBAAIAAAAIgBAAIgDACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgDAAIAAAAIgBAAIAAAAIAAAAIgDABIAAABIAAAAIAAADgAAkADIAAAAQADAHAGgGIAAAAQgBgBAAAAQAAgBgBAAQAAAAgBABQAAAAgBABIgBABIgBAAQgDgFADgBIABAAQADgBACACIAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIAAAAIgBAAIgBAAIAAAAIgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAIAAABIAAAAIAAADgAAZADQAFAHAEgHIAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIAAAAQAAgDgEAAIAAAAIgCAAIAAAAIAAAAIgDACIAAABIgBAAIABADgAghADIABAAQAFAHAEgHIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAAAQgBgDgDAAIAAAAIgCAAIAAAAIAAAAIgDACIAAABIgBAAIAAADgAAMgHIAAANIAAAAQAGABADgCIAAAAQADgFgDgEQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAAAIgGAAgAhEgHIAAANIAAAAQAJACACgHIAAgBIAAgBIAAgBQgBgEgEgBIgGAAgAgHAFQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQACgCgBgEIAAAAIAAAAIAAgBIgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIAAAAIgCAAIAAAAIAAAAQgDACgCgCIAAAAIgCAAIAAAAIAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIAAAJIAAAAQADgCAAgEQAAAAAAAAQAAgBAAAAQABAAABAAQAAAAABAAIABABIAAAAIAAAAIAAAGIABAAQABgDAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAFAAgCAGgABBAGIABAAQABgDAAgDQABgCACgBIAAAAIAAAAIgCAAIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAJg");
	this.shape_430.setTransform(24.6,2.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(130,86,27,0.694)").s().p("AAAAAIAAAAIAAAAg");
	this.shape_431.setTransform(48.8,0.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(55,36,11,0.435)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_432.setTransform(49,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque 2
	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AjyDLIAAmVIHlAAIAAGVg");
	this.shape_433.setTransform(24.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_433).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.1,41.1);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.Bitmap3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315,195);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(18,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,13,88,88);


// stage content:
(lib.ZOffsetConnectHTML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBtIAAhMIg4AAIAAhcIA8AAIAAgxIBBAAIAADZg");
	this.shape.setTransform(100.4,52.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBjIAAg3Ig7AAIAAiOIB0AAIAAArIA1AAIAABgIg3AAIAAA6g");
	this.shape_1.setTransform(32.9,51.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0AYQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgpQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIBpAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAApQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_2.setTransform(98,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0AXQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgpQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIBpAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAApQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_3.setTransform(38.2,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdBDIAAiFIA7AAIAACFg");
	this.shape_4.setTransform(57.6,54.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJGDIAAsFIATAAIAAMFg");
	this.shape_5.setTransform(102.5,51.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJGDIAAsFIATAAIAAMFg");
	this.shape_6.setTransform(97.4,51.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlhAKIAAgTILDAAIAAATg");
	this.shape_7.setTransform(68.1,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlhAKIAAgTILDAAIAAATg");
	this.shape_8.setTransform(68.1,54);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJGDIAAsFIATAAIAAMFg");
	this.shape_9.setTransform(38.8,51.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJGDIAAsFIATAAIAAMFg");
	this.shape_10.setTransform(33.7,51.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjxANIAAgZIHjAAIAAAZg");
	this.shape_11.setTransform(68.2,81.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Al9BCIAAhhICIAAIAtgjIGPAAIAmAlICRAAIAABgg");
	this.shape_12.setTransform(68,90.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.8,1,1).p("AAXGjQhNAPhNgvQiahdAIk1QAFixBYhzQBQhpBsgJQBxgIBMBjQBVBwAADRAAVGBQg3grgghAQhAh/B9hj");
	this.shape_13.setTransform(28.7,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

	// Calque 1
	this.instance = new lib.Symbole2();
	this.instance.setTransform(242.5,55.8,1,1,0,0,0,24.6,20.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Mode Isolation
	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(241,61.9,0.39,0.388,0,0,0,156,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Calque 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkWD5IG5r+IJqFlIm8L+g");
	var mask_graphics_1 = new cjs.Graphics().p("AlOCKIIjq2IJSHUIolK2g");
	var mask_graphics_2 = new cjs.Graphics().p("AluAYIKBpgIImJDIqDJgg");
	var mask_graphics_3 = new cjs.Graphics().p("Al0hWILRn/IHlKsIrTH/g");
	var mask_graphics_4 = new cjs.Graphics().p("Alhi+IMUmTIGQMQIsVGTg");
	var mask_graphics_5 = new cjs.Graphics().p("AkzklINFkeIEpNpItFEeg");
	var mask_graphics_6 = new cjs.Graphics().p("AjrmJINliiICxO1ItmCig");
	var mask_graphics_7 = new cjs.Graphics().p("AiKnlIN0gjIAoPuIt0Ajg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai1HcIBtwTINwBcIhtQTg");
	var mask_graphics_9 = new cjs.Graphics().p("AkWGkIEMwhINaDaIkNQhg");
	var mask_graphics_10 = new cjs.Graphics().p("AluFjIGvwXIM0FSImyQXg");
	var mask_graphics_11 = new cjs.Graphics().p("AltF0IG9w5IM0FSInAQ5g");
	var mask_graphics_12 = new cjs.Graphics().p("AlsGEIHMxaIMzFTInNRag");
	var mask_graphics_13 = new cjs.Graphics().p("AlqGVIHZx8IMzFTInbR8g");
	var mask_graphics_14 = new cjs.Graphics().p("AlpGmIHnyeIMzFTInpSeg");
	var mask_graphics_15 = new cjs.Graphics().p("AloG3IH1zAIM0FTIn4TAg");
	var mask_graphics_16 = new cjs.Graphics().p("AlnHIIIEzhIMzFSIoFThg");
	var mask_graphics_17 = new cjs.Graphics().p("AllHZIIR0DIMzFSIoTUDg");
	var mask_graphics_18 = new cjs.Graphics().p("AlkHqIIf0lIMzFSIohUlg");
	var mask_graphics_19 = new cjs.Graphics().p("AljH6IIt1GIMzFTIovVGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:78.1,y:60.6}).wait(1).to({graphics:mask_graphics_1,x:80.7,y:60.7}).wait(1).to({graphics:mask_graphics_2,x:82.5,y:60.4}).wait(1).to({graphics:mask_graphics_3,x:83.5,y:59.4}).wait(1).to({graphics:mask_graphics_4,x:83.6,y:57.5}).wait(1).to({graphics:mask_graphics_5,x:82.8,y:55.6}).wait(1).to({graphics:mask_graphics_6,x:81.1,y:53.7}).wait(1).to({graphics:mask_graphics_7,x:78.6,y:51.9}).wait(1).to({graphics:mask_graphics_8,x:80.8,y:50}).wait(1).to({graphics:mask_graphics_9,x:84.8,y:48.1}).wait(1).to({graphics:mask_graphics_10,x:88.5,y:46.2}).wait(1).to({graphics:mask_graphics_11,x:90,y:44.6}).wait(1).to({graphics:mask_graphics_12,x:91.5,y:43}).wait(1).to({graphics:mask_graphics_13,x:93.1,y:41.3}).wait(1).to({graphics:mask_graphics_14,x:94.6,y:39.7}).wait(1).to({graphics:mask_graphics_15,x:96.1,y:38.1}).wait(1).to({graphics:mask_graphics_16,x:97.6,y:36.4}).wait(1).to({graphics:mask_graphics_17,x:99.2,y:34.8}).wait(1).to({graphics:mask_graphics_18,x:100.7,y:33.2}).wait(1).to({graphics:mask_graphics_19,x:102.2,y:31.6}).wait(21));

	// Calque 7
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2196F3").ss(4.2,0,1).p("AgrAAIBXAA");
	this.shape_14.setTransform(109.7,92.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2196F3").ss(4.2,1,1).p("AlaGkQA+gFAUg1QAKgagHhIQgLhcgFg0QgJheALhDQAJg4AfgzQAegyA2g4QBuhvBhgiQCpg7B7B1");
	this.shape_15.setTransform(148.9,50.6);

	this.shape_14.mask = this.shape_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(40));

	// Calque 5
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(142.3,16.7,0.39,0.388,88,0,0,47.5,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:62,regY:57,rotation:92.8,x:139.7,y:20.8},0).wait(1).to({rotation:97.5,x:142.8,y:19.1},0).wait(1).to({rotation:102.3,x:145.9,y:17.5},0).wait(1).to({rotation:107,x:149.2,y:16},0).wait(1).to({rotation:111.8,x:152.6,y:14.6},0).wait(1).to({rotation:116.6,x:156,y:13.4},0).wait(1).to({rotation:121.3,x:159.6,y:12.4},0).wait(1).to({rotation:126.1,x:163.2,y:11.7},0).wait(1).to({rotation:130.9,x:166.8,y:11.3},0).wait(1).to({rotation:135.6,x:170.4,y:11.4},0).wait(1).to({rotation:140.4,x:173.9,y:12.2},0).wait(1).to({rotation:145.1,x:176.9,y:13.3},0).wait(1).to({rotation:149.9,x:180.3,y:14.8},0).wait(1).to({rotation:154.7,x:183.6,y:16.4},0).wait(1).to({rotation:159.4,x:186.6,y:18.3},0).wait(1).to({rotation:164.2,x:189.1,y:20.5},0).wait(1).to({rotation:168.9,x:191.3,y:23.2},0).wait(1).to({rotation:173.7,x:193.8,y:25.9},0).wait(1).to({rotation:178.5,x:196.3,y:28.3},0).wait(1).to({x:196.2},0).wait(2).to({y:28.2},0).wait(3).to({x:196.1,y:28.1},0).wait(3).to({y:28},0).wait(1).to({x:196},0).wait(1).to({x:196.1},0).wait(1).to({y:28.1},0).wait(3).to({y:28.2},0).wait(1).to({x:196.2},0).wait(3).to({y:28.3},0).wait(1).to({x:196.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152.4,54.8,303.2,94.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;