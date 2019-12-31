//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Source/service__source/uncompress/window.service__source.uncompress.json.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * JavaScript Source를 Compress 한다.
 * @function
 * @param {String} d javascript source
 * <code>
	{
	}
 * </code>
 * @param {Function} cbFunction function( data ){};
 */
window.service__source.uncompress.json = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service__source.uncompress.json():void----------" );

	//var host = window.b2link.url.getServerURL_APIServer_Self();
	//var host = window.b2link.url.getServerURL_APIServer_SCODE( "SYS0015" );
	var host = window.b2link.url.getServerURL_WebServer_Self();
	//var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
	//var host = "http://localhost:30000";

	debugger;

	var _url = host + "/_source/uncompress/json";

	//HTTP POST로 요청하기;
	window.b2link.xhr.req_POST_Str( _url, d, window.service__source.CONST.HEADER_REQ.TEXT_PLAIN
		, {
			//onabort : function( e ){ cbFunction( e.target.responseText ); }
			onerror : function( e ){ cbFunction( e.target.responseText ); }
			//, onload : function( e ){ cbFunction( e.target.responseText ); }
			, onloadend : function( e ){ cbFunction( e.target.responseText ); }
			//, onstart : function( e ){ cbFunction( e.target.responseText ); }
			//, onprogress : function( e ){ cbFunction( e.target.responseText ); }
			//, onreadystatechange : function( e ){ cbFunction( e.target.responseText ); }
			//, ontimeout : function( e ){ cbFunction( e.target.responseText ); }
		}
	);

	//window.TtwLog.timeStamp( "---- [ E ] - window.service__source.uncompress.json():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;