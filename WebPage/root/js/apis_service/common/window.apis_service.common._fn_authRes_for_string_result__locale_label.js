//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.apis_service.common._fn_authRes_for_string_result__locale_label.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
window.apis_service.common._fn_authRes_for_string_result__locale_label = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis_service.common._fn_authRes_for_string_result__locale_label():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.apis_service.common._fn_authRes_for_string_result__locale_label - var r = JSON.parse( result ); -  Error : " + e );
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

	var resStr = window.b2link.string.applyParentheses( result, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url ) );

	if( resStr )
	{
		try{ cbFunction( resStr ); }
		catch( e )
		{
			window.TtwLog.error( "window.apis_service.common._fn_authRes_for_string_result__locale_label - cbFunction( resStr ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( result ); }
		catch( e )
		{
			window.TtwLog.error( "window.apis_service.common._fn_authRes_for_string_result__locale_label - cbFunction( result ); -  Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis_service.common._fn_authRes_for_string_result__locale_label():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;