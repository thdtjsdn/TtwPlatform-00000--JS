//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.console.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.console;

window.apis.console = window.apis.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.console;


//----------------------------------------------------------------------------------------------------window.apis.console.g***;

/**
 * Browser Memory 정보를 반환한다.
 * @function
 * @return {MemoryInfo}
 */
window.apis.console.getMemory=function(){return console.memory};

//----------------------------------------------------------------------------------------------------window.apis.console.g***;


//----------------------------------------------------------------------------------------------------window.apis.console.n***;

/**
 * Log를 Name과 {*}로 발생시킨다.
 * Name으로 Console 창에 경계선을 그어준다.
 * @function
 * @param {String} name
 * @param {*} t
 */
window.apis.console.nameAndObject=function(n,o){window.TtwLog.timeStamp("---- [ S ] - window.apis.console.nameAndObject():void----------"),window.TtwLog.timeStamp("---- [ E ] - window.apis.console.nameAndObject():void----------")};

//----------------------------------------------------------------------------------------------------window.apis.console.n***;


//----------------------------------------------------------------------------------------------------window.apis.console.o***;

/**
 * 사용금지 - 2017.01.05
 * @function
 * @param {Object} t
 */
//window.apis.console.objInfo=function(o){window.TtwLog.timeStamp("---- [ S ] - window.apis.console.objInfo():void----------"),o.__status(),window.TtwLog.timeStamp("---- [ E ] - window.apis.console.objInfo():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.apis.console.objStyle_BottomLeftRightTop=function(o){window.TtwLog.timeStamp("---- [ S ] - window.apis.console.objStyle_BottomLeftRightTop():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.apis.console.objStyle_BottomLeftRightTop():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.apis.console.objStyle_LeftTopRightBottom=function(o){window.TtwLog.timeStamp("---- [ S ] - window.apis.console.objStyle_LeftTopRightBottom():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.apis.console.objStyle_LeftTopRightBottom():void----------")};

//----------------------------------------------------------------------------------------------------window.apis.console.o***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;