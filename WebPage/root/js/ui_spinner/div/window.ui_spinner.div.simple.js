//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/ui_spinner/div/window.ui_spinner.div.simple.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

window.ui_spinner.div.simple = window.ui_spinner.div.simple || {};

//----------------------------------------------------------------------------------------------------;

(function(){

	var t = window.ui_spinner.div.simple;

		/**
		 * @property {HTMLElement}
		 */
		t.el = null;

		/**
		 * @property {Number}
		 */
		t.time = 700;

		/**
		 * @property {Number}
		 */
		t.timeout = -1;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * GIF 파일 기반의 Spinner Hide API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.div.simple.hide = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.div.simple.hide():void----------" );

		window.b2link.common.clearTimeout( t.timeout );
		t.timeout = window.b2link.common.setTimeout( function(){
			t.el.style.display = "none";
		}, t.time );

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.div.simple.hide():void----------" );
	};
	window.ui_spinner.addHideFunction( window.ui_spinner.div.simple.hide );

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.div.simple.show = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.div.simple.show():void----------" );

		window.b2link.common.clearTimeout( t.timeout );
		t.el.style.display = "";

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.div.simple.show():void----------" );
	};

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @function
	 * @param {HTMLElement} el
	 */
	window.ui_spinner.div.simple.setElement = function( el )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.div.simple.setElement():void----------" );

		if( "DIV" != el.tagName )
		{
			window.b2link_ui.message.error( "DIV만 가능" );
			return;
		}

		t.el = el;

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.div.simple.setElement():void----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;