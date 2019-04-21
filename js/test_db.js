//测试数据构造
var test_dt = {
	planBatchDto : {
        finishNum : [0, 0, 0, 0, 0],
        unfinishNum : [0, 0, 0, 0, 0]
	},
	workCenterStatusDto : {
		jbRate : 0,
		rbRate : 0,
		ybRate : 0,
	},
	equEfficiencyDto : {
		lastYearEff : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		thisYearEff : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	realProductAmountDto : {
        catCigs : {
        	"一类烟":0,
            "二类烟":0
		}
	},
	yearPlanDto : {
		planAmount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		finishAmount : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	workCenterGroupDto : [

	]
	,
	flBaseGroupDto : {
		flBaseDtos : [

		]
	},
	leafCabGroupDto : {
		cabs : [

		]
	},
    gsCabGroupDto : {
        cabs : [

        ]
	},
	lineDto : {
		processes : [

		]
	},
	invDto : {
		flDto : {
			kilo : 0 ,
			packNum : 0,
			capacity : 0,
			ratio : 0
		},
		sxDto : {
            kilo : 0 ,
            packNum : 0,
            capacity : 0,
            ratio : 0
		},
		cpDto : {
			kilo : 0,
			packNum : 0,
			ratio : 0,
            capacity : 0
		},
		lbDto : {
			kilo : 0 ,
			packNum : 0,
			capacity : 0,
			ratio : 0
		},
		pfDto : {
            kilo : 0 ,
            packNum : 0,
            capacity : 0,
            ratio : 0
		}
	}
};

//机台对象
//clone对象 -> JSON.parse(JSON.stringify(obj));
var wObj = {};
var lDto = {};
lDto.workCenterCode = "";
//jjDto.matName = "81299黄鹤楼（硬红）GN1";
lDto.matName = "";
lDto.boxNum = 0;
lDto.status = 0;
lDto.lineStatus = 0;
var rDto = {};
rDto.workCenterCode = "";
//bzDto.matName = "81299黄鹤楼（硬红）GN1";
rDto.matName = "";
rDto.boxNum = 0;
rDto.status = 0;
rDto.lineStatus = 0;
wObj.jjDto = lDto;
wObj.bzDto = rDto;

//构造机台数据
var FIRST_COL_WORKCENTER = 13;
for(var i = 1 ; i <= FIRST_COL_WORKCENTER; i++){
    var newObj = JSON.parse(JSON.stringify(wObj));
    newObj.jjDto.workCenterCode = "JJY" + (i+100);
    newObj.bzDto.workCenterCode = "BZY" + (i+100);
    newObj.bzDto.status = 1;
    newObj.jjDto.status = 1;
    newObj.bzDto.boxNum = 2;
    newObj.jjDto.boxNum = 1;
    newObj.jjDto.matName = "81299黄鹤楼（硬红）GN1111111";
    newObj.bzDto.matName = "81299黄鹤楼（硬红）GN1111111";
    newObj.id = i+100;
    newObj.name = newObj.id+"R";
    test_dt.workCenterGroupDto.push(newObj);
}
var SECOND_COL_WORKCENTER = 13;
for(var i = 1 ; i <= SECOND_COL_WORKCENTER; i++){
	var newObj = JSON.parse(JSON.stringify(wObj));
    newObj.jjDto.workCenterCode = "JJY" +  (i+200);
    newObj.bzDto.workCenterCode = "BZY" + (i+200);
    newObj.bzDto.status = 3;
    newObj.jjDto.status = 3;
    newObj.bzDto.boxNum = "";
    newObj.jjDto.boxNum = "";
    newObj.id = i+200;
    newObj.name = newObj.id+"Y";
	test_dt.workCenterGroupDto.push(newObj);
}
var THIRD_COL_WORKCENTER = 14;
for(var i = 1 ; i <= THIRD_COL_WORKCENTER; i++){
    var newObj = JSON.parse(JSON.stringify(wObj));
    newObj.jjDto.workCenterCode = "JJY" + (i+300);
    newObj.bzDto.workCenterCode = "BZY" + (i+300);
    newObj.bzDto.status = 3;
    newObj.jjDto.status = 3;
    newObj.bzDto.boxNum = "";
    newObj.jjDto.boxNum = "";
    newObj.id = i+300;
    newObj.name = newObj.id+"Y";
    test_dt.workCenterGroupDto.push(newObj);
}
var FOURTH_COL_WORKCENTER = 4;
for(var i = 1 ; i <= FOURTH_COL_WORKCENTER; i++){
    var newObj = JSON.parse(JSON.stringify(wObj));
    newObj.jjDto.workCenterCode = "JJY" + (i+400);
    newObj.bzDto.workCenterCode = "BZY" + (i+400);
    newObj.bzDto.status = 2;
    newObj.jjDto.status = 1;
    newObj.bzDto.boxNum = 100;
    newObj.jjDto.boxNum = 120;
    newObj.id = i+400;
    newObj.name = newObj.id+"Y";
    newObj.jjDto.matName = "111111111";
    test_dt.workCenterGroupDto.push(newObj);
}
//构造辅料库数据
var FL_NUM = 15 + 13 + 18;
for(var i = 1 ; i <= 15; i++){
	var obj = {};
	obj.status = 3;
	obj.workCenterCode = "CXZ000".substring(0,"CXZ000".length-(i+"").length)+i;
	test_dt.flBaseGroupDto.flBaseDtos.push(obj);
}
for(var i = 1 ; i <= 13; i++){
    var obj = {};
    obj.status = 3;
    obj.workCenterCode = "FSZ000".substring(0,"FSZ000".length-(i+"").length)+i;
    test_dt.flBaseGroupDto.flBaseDtos.push(obj);
}
for(var i = 1 ; i <= 18; i++){
    var obj = {};
    obj.status = 3;
    obj.workCenterCode = "ZXR000".substring(0,"ZXR000".length-(i+"").length)+i;
    test_dt.flBaseGroupDto.flBaseDtos.push(obj);
}
//构造储叶柜
var CY_NUM = 18 + 6 + 3;
for(var i = 1 ; i <= CY_NUM; i++){
	var obj = {};
	obj.status = 0;
	obj.code = i;
	test_dt.leafCabGroupDto.cabs.push(obj);
}
//构造梗丝柜
var GS_NUM = 10 + 3 + 3;
for(var i = 1 ; i <= GS_NUM; i++){
    var obj = {};
    obj.status = 0;
    obj.code = i;
    test_dt.gsCabGroupDto.cabs.push(obj);
}
//构造生产线数据
var LINE_NUM = 18;
for(var i = 1 ; i <= LINE_NUM; i++){
	var obj = {};
	obj.status = 1;
    //obj.matName = "81299黄鹤楼（硬红）GN1";
    obj.matName = "";
	//obj.batch = "01052";
    obj.batch = "";
	test_dt.lineDto.processes.push(obj);
}
