//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_base/common/window.service_base.common._fn_res_POST.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.service_base.common._fn_res_POST = function( result, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res_POST():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res_POST - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res_POST - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res_POST():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;