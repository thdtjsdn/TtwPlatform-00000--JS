//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_base/common/window.service_base.common._fn_res_for_string_result.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.service_base.common._fn_res_for_string_result = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res_for_string_result():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	try{ cbFunction( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res_for_string_result - cbFunction( result ); -  Error : " + e );
		debugger;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res_for_string_result():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;