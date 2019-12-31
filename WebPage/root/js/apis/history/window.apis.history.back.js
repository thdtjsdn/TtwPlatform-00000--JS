//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/history/window.apis.history.back.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 이전 페이지로 이동
 * @function
 */
window.apis.history.back = function()
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.history.back():void----------" );

	if( window.history.back ) window.history.back();
	else window.history.go( -1 );

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.history.back():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;