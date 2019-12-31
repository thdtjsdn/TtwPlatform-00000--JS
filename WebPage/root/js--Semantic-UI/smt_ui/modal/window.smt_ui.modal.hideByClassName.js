//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.hideByClassName.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _store = {};

	/**
	 * Semantic UI Modal Visible - hide By ClassName
	 * @function
	 * @param {Array} a [ {HTMLElement}, {HTMLElement's Controller} ]
	 */
	window.smt_ui.modal.hideByClassName = function( className )
	{
		window.Rh2Log.timeStamp( "---- [ S ] - window.smt_ui.modal.hideByClassName():void----------" );

		/*/
		if( -1 == className.indexOf( "modal" ) )
		{
			window.TtwLog.warn( "Semantic-UI Modal 객체가 아니다" );
			return null;
		}
		//*/

		var t;
		if( _store[ className ] ) t = _store[ className ];
		//확인하기 - 20180205_1630 - 유선아 확인하기 - id 고려는??;
		else t = _store[ className ] =  $( "." + className );

		if( !t[ 0 ] )
		{
			window.b2link_ui.message.alert( className + " Modal 객체가 없다 - 호출 로직 확인 바람." );
			debugger;
		}

		t.modal( "hide" );

		var i=0, iLen=t.length;
		for( ; i<iLen; ++i ) window.b2link.element.removeChildFromParentElement( t[ i ] );

		delete _store[ className ];

		window.Rh2Log.warn( className + "를 hide 시킴." );

		window.Rh2Log.timeStamp( "---- [ E ] - window.smt_ui.modal.hideByClassName():void----------" );
	};
	window.smt_ui.modal.hideByClassName._clear = function(){ _store = {}; };
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;