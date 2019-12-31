//----------------------------------------------------------------------------------------------------;
var fileNm = "js--MongoDB/service_mongodb/__define/100_define_window.service_mongodb.CONST.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_mongodb.CONST;

window.service_mongodb.CONST = window.service_mongodb.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_mongodb.CONST;

(function(){
	var _ = window.service_mongodb.CONST;

	/**
	 * window.b2link.url.getServerURLByServers의 Parameter 문자열
	 * @property {String}
	 */
	var SERVER_NAME = window.b2link.STATIC.CONFIG.URL.SCODE + "_APIServer";

	_.__defineGetter__( "SERVER_NAME", function(){ return SERVER_NAME; });
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;