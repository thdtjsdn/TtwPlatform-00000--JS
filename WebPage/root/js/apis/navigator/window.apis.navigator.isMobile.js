//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/navigator/window.apis.navigator.isMobile.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 모바일 장치의 접속인지 확인한다.
 * @function
 * @return {Boolean}
 */
window.apis.navigator.isMobile = function()
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.navigator.isMobile():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.navigator.isMobile():{Boolean}----------" );

	return window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android|Windows Phone|IEMobile|BlackBerry|Mobile Safari|Opera Mobi)/) ? true : false;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;