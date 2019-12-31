//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/history/window.apis.history.forward.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 이후 페이지로 이동
 * @function
 */
window.apis.history.forward = function()
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.history.forward():void----------" );

	if( window.history.forward ) window.history.forward();
	else window.history.go( 1 );

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.history.forward():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;