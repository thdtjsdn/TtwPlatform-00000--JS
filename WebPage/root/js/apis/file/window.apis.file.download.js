//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/file/window.apis.file.download.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();

	/**
	 * 파일 다운로드
	 * @function
	 * @param {String} url
	 */
	window.apis.file.download = function( url )
	{
		//window.Rh2Log.timeStamp( "---- [ S ] - window.apis.file.download():void----------" );

		url = url
			+ window.b2link_url_member.member_session.getParam( window.apis.session.getSession() )
			+ "&nCached=" + ( ++_date );

		window.open( window.apis.uri.encodeURI( url ) );

		//window.Rh2Log.timeStamp( "---- [ E ] - window.apis.file.download():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;