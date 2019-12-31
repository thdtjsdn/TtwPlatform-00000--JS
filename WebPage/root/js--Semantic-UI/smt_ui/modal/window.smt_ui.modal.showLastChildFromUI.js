//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.showLastChildFromUI.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _store = {};

	/**
	 * Semantic UI Modal Visible - show From UI Array
	 * @function
	 * @param {Array} a [ {HTMLElement}, {HTMLElement's Controller} ]
	 * @param {Object} o modal options
	 * <code>
	 	{
			"allowMultiple" : true,//멀티모달 허용 - default : true;
			, "closable" : false//모달 밖 클릭시 안닫힘 - default : true;
			, ...
	 	}
	 * </code>
	 */
	window.smt_ui.modal.showLastChildFromUI = function( a, o )
	{
		window.Rh2Log.timeStamp( "---- [ S ] - window.smt_ui.modal.showLastChildFromUI():void----------" );

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
		else t = _store[ url ] =  $( el ).find( ".ui.modal :last" );

		if( !t[ 0 ] )
		{
			window.b2link_ui.message.alert( el.classList[ 0 ] + " Modal 객체가 없다 - 호출 로직 확인 바람." );
			debugger;
		}

		if( o ) t.modal( o ).modal( "show" );
		else t.modal( "show" );

		window.Rh2Log.warn( url + "( " + window.b2link.element.getID_Or_ClassName( el ) + ") 의 자식 중 .ui .modal 클래스를 가진 마지막 객체를 show 시킴." );

		window.Rh2Log.timeStamp( "---- [ E ] - window.smt_ui.modal.showLastChildFromUI():void----------" );
	};
	window.smt_ui.modal.showLastChildFromUI._clear = function(){ _store = {}; };
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;