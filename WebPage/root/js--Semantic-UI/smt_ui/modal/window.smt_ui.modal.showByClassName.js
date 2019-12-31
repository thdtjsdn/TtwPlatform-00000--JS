//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.showByClassName.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _store = {};

	/**
	 * Semantic UI Modal Visible - show By ClassName
	 * @function
	 * @param {String} className
	 * @param {Object} o modal options
	 * <code>
	 	{
			"allowMultiple" : true,//멀티모달 허용 - default : true;
			, "closable" : false//모달 밖 클릭시 안닫힘 - default : true;
			, ...
	 	}
	 * </code>
	 */
	window.smt_ui.modal.showByClassName = function( className, o )
	{
		window.Rh2Log.timeStamp( "---- [ S ] - window.smt_ui.modal.showByClassName():void----------" );

		var t = $( "." + className );

		if( !t[ 0 ] )
		{
			window.b2link_ui.message.alert( className + " Modal 객체가 없다 - 호출 로직 확인 바람." );
			debugger;
		}

		if( o ) t.modal( o ).modal( "show" );
		else t.modal( "show" );

		window.Rh2Log.warn( className + "를 show 시킴." );

		/*///2.3.0;
		el.style.left = "0px";
		//*/

		window.Rh2Log.timeStamp( "---- [ E ] - window.smt_ui.modal.showByClassName():void----------" );
	};
	window.smt_ui.modal.showByClassName._clear = function(){ _store = {}; };
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;