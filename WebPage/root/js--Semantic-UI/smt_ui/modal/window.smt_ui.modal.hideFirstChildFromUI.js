//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.hideFirstChildFromUI.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _store = {};

	/**
	 * Semantic UI Modal Visible - hide From UI Array
	 * @function
	 * @param {Array} a [ {HTMLElement}, {HTMLElement's Controller} ]
	 */
	window.smt_ui.modal.hideFirstChildFromUI = function( a )
	{
		window.Rh2Log.timeStamp( "---- [ S ] - window.smt_ui.modal.hideFirstChildFromUI():void----------" );

		var el = a[ 0 ];
		var elc = a[ 1 ];
		var url = elc.__url;

		if( -1 == el.className.indexOf( "modal" ) )
		{
			window.TtwLog.warn( "Semantic-UI Modal 객체가 아니다" );
			return null;
		}

		var t;
		if( _store[ url ] ) t = _store[ url ];
		//확인하기 - 20180205_1630 - 유선아 확인하기 - id 고려는??;
		else t = _store[ url ] =  $( el ).find( ".ui.modal :first" );

		if( !t[ 0 ] )
		{
			window.b2link_ui.message.alert( el.classList[ 0 ] + " Modal 객체가 없다 - 호출 로직 확인 바람." );
			debugger;
		}

		t.modal( "hide" );

		var i=0, iLen=t.length;
		for( ; i<iLen; ++i ) window.b2link.element.removeChildFromParentElement( t[ i ] );

		delete _store[ url ];

		window.Rh2Log.warn( url + "( " + window.b2link.element.getID_Or_ClassName( el ) + ") 의 자식 중 .ui .modal 클래스를 가진 첫번째 객체를 hide 시킴." );

		window.Rh2Log.timeStamp( "---- [ E ] - window.smt_ui.modal.hideFirstChildFromUI():void----------" );
	};
	window.smt_ui.modal.hideFirstChildFromUI._clear = function(){ _store = {}; };
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;