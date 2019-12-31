//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--MongoDB/service_mongodb/_insert/window.service_mongodb._insert.insertMany.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * insertMany 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
		db : ""
		, col : ""
		, documents : []
		, options : {}
	}
 * </code>
 * @param {Function} cbFunction function( result ){};
 */
window.service_mongodb._insert.insertMany = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_mongodb._insert.insertMany():void----------" );

	window.service_base.common._fn_req(
		window.b2link.url.getServerURLByServers( window.service_mongodb.CONST.SERVER_NAME )
			+ "_insert/insertMany?data="
			+ window.b2link.uri.getURIReplaceSharp__JSON( d )
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_mongodb._insert.insertMany():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;