//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.apis_service.common._fn_res.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.apis_service.common._fn_res = function( result, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis_service.common._fn_res():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.apis_service.common._fn_res - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.apis_service.common._fn_res - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis_service.common._fn_res():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;