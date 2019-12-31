//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_base/common/window.service_base.common._fn_res_for_string_result__locale_label.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
window.service_base.common._fn_res_for_string_result__locale_label = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res_for_string_result__locale_label():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	var resStr = window.b2link.string.applyParentheses( result, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url ) );

	if( resStr )
	{
		try{ cbFunction( resStr ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_res_for_string_result__locale_label - cbFunction( resStr ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( result ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_res_for_string_result__locale_label - cbFunction( result ); -  Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res_for_string_result__locale_label():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;