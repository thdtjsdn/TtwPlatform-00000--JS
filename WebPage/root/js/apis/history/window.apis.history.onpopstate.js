//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/history/window.apis.history.onpopstate.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	window._$TATIC_ONPOPSTATE = window._$TATIC_ONPOPSTATE || {
		  SYS0000 : function( e ){}
		, SYS0010 : function( e ){}
		, SYS0020 : function( e ){}
		, SYS0030 : function( e ){}
		, SYS0040 : function( e ){}
		, SYS0050 : function( e ){}
		, SYS0060 : function( e ){}
		, SYS0070 : function( e ){}
		, SYS0080 : function( e ){}
		, SYS0090 : function( e ){}
		, SYS0100 : function( e ){}
		, SYS0110 : function( e ){}
		, SYS0120 : function( e ){}
		, SYS0130 : function( e ){}
		, SYS0140 : function( e ){}
		, SYS0150 : function( e ){}
	};

	/**
	 * State 추가
	 * @function
	 * @param {PopStateEvent} event
	 * @example
	 * <code>
		window.apis.history.pushState( {a:0}, "asd0", "asd0.html" );
		window.apis.history.pushState( {a:1}, "asd1", "asd1.html" );
	 * </code>
	 */
	window.apis.history.onpopstate = function( e )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.apis.history.onpopstate():void----------" );

		if( "popstate" != e.type ){
			window.TtwLog.error( "[ ERROR ] - 잘못된 이벤트로 인하여 호출 됨" );
			return;
		}

		var b = true;
		if( !e.state.SCODE ) b = false;
		if( !e.state.api ) b = false;
		if( !e.state.params ) b = false;

		if( !b )
		{
			window.TtwLog.error( "[ ERROR ] - B2Ker기반의 State Object에는 'SCODE', 'api', 'params' 프로퍼티가 필수 값이다." );
			return;
		}

		window.TtwLog.log( e.state );

		window._$TATIC_ONPOPSTATE[ e.state.SCODE ]( e.state );

		//window.TtwLog.timeStamp( "---- [ E ] - window.apis.history.onpopstate():void----------" );
	};

	if( !window.onpopstate )
	{
		window.onpopstate = window.apis.history.onpopstate;

		window.TtwLog.log( "[ MESSAGE ] - window.onpopstate에 window.apis.history.onpopstate 적용완료" );
		window.TtwLog.log( "[ MESSAGE ] - window._$TATIC_ONPOPSTATE[ 'SCODE' ] 설정이 필요함." );
	}
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;