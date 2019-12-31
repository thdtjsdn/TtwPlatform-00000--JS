//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--MongoDB/service_mongodb/_insert/window.service_mongodb._insert.insertOne.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * insertOne 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
		db : ""
		, col : ""
		, document : {}
		, options : {}
	}
 * </code>
 * @param {Function} cbFunction function( result ){};
 */
window.service_mongodb._insert.insertOne = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_mongodb._insert.insertOne():void----------" );

	window.service_base.common._fn_req(
		window.b2link.url.getServerURLByServers( window.service_mongodb.CONST.SERVER_NAME )
			+ "_insert/insertOne?data="
			+ window.b2link.uri.getURIReplaceSharp__JSON( d )
		, cbFunction
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_mongodb._insert.insertOne():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;