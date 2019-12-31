//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--MongoDB/service_mongodb/_delete/window.service_mongodb._delete.deleteOne.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * deleteOne 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
		db : ""
		, col : ""
		, filter : {}
		, options : {}
	}
 * </code>
 * @param {Function} cbFunction function( result ){};
 */
window.service_mongodb.delete.deleteOne = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_mongodb.delete.deleteOne():void----------" );

	window.service_base.common._fn_req(
		window.b2link.url.getServerURLByServers( window.service_mongodb.CONST.SERVER_NAME )
			+ "_delete/deleteOne?data="
			+ window.b2link.uri.getURIReplaceSharp__JSON( d )
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_mongodb.delete.deleteOne():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;