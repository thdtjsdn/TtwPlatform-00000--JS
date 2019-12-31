//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/ui_spinner/spinkit/window.ui_spinner.spinkit.API.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/

window.ui_spinner.spinkit.setTime_Hide( 2500 );

var a = [
	"1-rotating-plane"
	, "2-double-bounce"
	, "3-wave"
	, "4-wandering-cubes"
	, "5-pulse"
	, "6-chasing-dots"
	, "7-three-bounce"
	, "8-circle"
	, "9-cube-grid"
	, "10-fading-circle"
	, "11-folding-cube"
];

var p = {
	i : 0
	, iLen : a.length - 1
};

var _fn = function(){

	window.ui_spinner.spinkit.setMode( a[ p.i ] );

	window.ui_spinner.spinkit.show();

	window.ui_spinner.spinkit.hide();

	if( p.i < p.iLen ) ++p.i;
	else p.i = 0;

	setTimeout( _fn, 3000 );
};

setTimeout( _fn, 3000 );



window.ui_spinner.spinkit.hide();
window.ui_spinner.spinkit.show();

window.ui_spinner.spinkit.setMode( "1-rotating-plane" );
window.ui_spinner.spinkit.setMode( "2-double-bounce" );
window.ui_spinner.spinkit.setMode( "3-wave" );
window.ui_spinner.spinkit.setMode( "4-wandering-cubes" );
window.ui_spinner.spinkit.setMode( "5-pulse" );
window.ui_spinner.spinkit.setMode( "6-chasing-dots" );
window.ui_spinner.spinkit.setMode( "7-three-bounce" );
window.ui_spinner.spinkit.setMode( "8-circle" );
window.ui_spinner.spinkit.setMode( "9-cube-grid" );
window.ui_spinner.spinkit.setMode( "10-fading-circle" );
window.ui_spinner.spinkit.setMode( "11-folding-cube" );
//*/

(function(){

	var host = window.b2link.url.getServerURLByServers( "SYS0015_WebServer" );

	var f0 = window.b2link.xhr.reqSync_String;
	var f1 = window.b2link.html.createHTMLElement;

	var t = window.ui_spinner.spinkit;

	var url = host + "/ui/Spinner/spinkit/1-rotating-plane.html";
		/*/
		host + "/ui/Spinner/spinkit/1-rotating-plane.html"
		host + "/ui/Spinner/spinkit/2-double-bounce.html"
		host + "/ui/Spinner/spinkit/3-wave.html"
		host + "/ui/Spinner/spinkit/4-wandering-cubes.html"
		host + "/ui/Spinner/spinkit/5-pulse.html"
		host + "/ui/Spinner/spinkit/6-chasing-dots.html"
		host + "/ui/Spinner/spinkit/7-three-bounce.html"
		host + "/ui/Spinner/spinkit/8-circle.html"
		host + "/ui/Spinner/spinkit/9-cube-grid.html"
		host + "/ui/Spinner/spinkit/10-fading-circle.html"
		host + "/ui/Spinner/spinkit/11-folding-cube.html"
		//*/
		/**
		 * @property {HTMLElement}
		 */
		t.el = null;

		/**
		 * @property {Number}
		 */
		t.timeHide = 700;

		/**
		 * @property {Number}
		 */
		t.timeout = -1;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * CSS3 기반의 Spinner Hide API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.spinkit.hide = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.spinkit.hide():void----------" );

		var t = window.ui_spinner.spinkit;

		if( !t.el ) t.el = f1( f0( url ) );

		window.b2link.common.clearTimeout( t.timeout );
		t.timeout = window.b2link.common.setTimeout( function(){
			window.b2link.element.removeChild( window.document.body, t.el );
			t.el.style.display = "none";
		}, t.timeHide );

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.spinkit.hide():void----------" );
	};
	window.ui_spinner.addHideFunction( window.ui_spinner.spinkit.hide );

	/**
	 * CSS3 파일 기반의 Spinner Show API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.spinkit.show = function()
	{
		var t = window.ui_spinner.spinkit;

		if( !t.el ) t.el = f1( f0( url ) );

		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.spinkit.show():void----------" );

		window.b2link.common.clearTimeout( t.timeout );
		t.el.style.display = "";
		window.b2link.element.appendChild( window.document.body, t.el );

		var elP = t.el;
		var elC = t.el.children[ 0 ];

		elP.style.bottom = "0px";
		elP.style.top = "0px";
		window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( elC );
		//elP.style.left = elC.style.left;
		elP.style.top = elC.style.top;
		elP.style.bottom = "";
		elC.style.left = "0px";
		elC.style.top = "0px";

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.spinkit.show():void----------" );
	};

	/**
	 * @function
	 * @param {HTMLElement} el
	 */
	window.ui_spinner.spinkit.setElement = function( el )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.spinkit.setElement():void----------" );

		if( "DIV" != el.tagName )
		{
			window.b2link_ui.message.error( "DIV만 가능" );
			return;
		}

		t.el = el;

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.spinkit.setElement():void----------" );
	};

	/**
	 * @function
	 * @param {String} mode
	 * <code>
		"1-rotating-plane"
		"2-double-bounce"
		"3-wave"
		"4-wandering-cubes"
		"5-pulse"
		"6-chasing-dots"
		"7-three-bounce"
		"8-circle"
		"9-cube-grid"
		"10-fading-circle"
		"11-folding-cube"
	 * </code>
	 */
	window.ui_spinner.spinkit.setMode = function( mode ){ t.el = f1( f0( host + "/ui/Spinner/spinkit/" + mode + ".html" ) ); };

	/**
	 * @function
	 * @param {Number} n 1000이 1초
	 */
	window.ui_spinner.spinkit.setTime_Hide = function( n ){ t.timeHide = n; };

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;