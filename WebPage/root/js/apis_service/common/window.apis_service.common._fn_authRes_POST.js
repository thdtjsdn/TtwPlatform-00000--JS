//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.apis_service.common._fn_authRes_POST.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제 function( data ){};
 */
window.apis_service.common._fn_authRes_POST = function( result, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis_service.common._fn_authRes_POST():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.apis_service.common._fn_authRes_POST - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.apis_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.apis_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.apis_service.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.apis_service.common._fn_authRes_POST - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis_service.common._fn_authRes_POST():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;