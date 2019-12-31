//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--MongoDB/service_mongodb/_remove/window.service_mongodb._remove.remove.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * remove 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
		db : ""
		, col : ""
		, t : {}
		, justOne : {Boolean}
	}
 * </code>
 * @param {Function} cbFunction function( result ){};
 */
window.service_mongodb._remove.remove = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_mongodb._remove.remove():void----------" );

	window.service_base.common._fn_req(
		window.b2link.url.getServerURLByServers( window.service_mongodb.CONST.SERVER_NAME )
			+ "_remove/remove?data="
			+ window.b2link.uri.getURIReplaceSharp__JSON( d )
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_mongodb._remove.remove():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;