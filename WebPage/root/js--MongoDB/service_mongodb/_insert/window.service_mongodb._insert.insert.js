//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--MongoDB/service_mongodb/_insert/window.service_mongodb._insert.insert.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * insert 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
		db : ""
		, col : ""
		, obj : {}
		, options : {}
		, _allow_dot : {Boolean}
	}
 * </code>
 * @param {Function} cbFunction function( result ){};
 */
window.service_mongodb._insert.insert = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_mongodb._insert.insert():void----------" );

	window.service_base.common._fn_req(
		window.b2link.url.getServerURLByServers( window.service_mongodb.CONST.SERVER_NAME )
			+ "_insert/insert?data="
			+ window.b2link.uri.getURIReplaceSharp__JSON( d )
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_mongodb._insert.insert():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;