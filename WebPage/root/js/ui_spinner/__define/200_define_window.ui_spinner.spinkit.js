//----------------------------------------------------------------------------------------------------;
var fileNm = "js/ui_spinner/__define/200_define_window.ui_spinner.spinkit.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner.spinkit;

window.ui_spinner.spinkit = window.ui_spinner.spinkit || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner.spinkit;

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
!function(){var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),n=window.b2link.xhr.reqSync_String,e=window.b2link.html.createHTMLElement,t=window.ui_spinner.spinkit,o=i+"/ui/Spinner/spinkit/1-rotating-plane.html";t.el=null,t.timeHide=700,t.timeout=-1;

/**
 * CSS3 기반의 Spinner Hide API
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 */
window.ui_spinner.spinkit.hide=function(){var i=window.ui_spinner.spinkit;i.el||(i.el=e(n(o))),window.b2link.common.clearTimeout(i.timeout),i.timeout=window.b2link.common.setTimeout(function(){window.b2link.element.removeChild(window.document.body,i.el),i.el.style.display="none"},i.timeHide)},window.ui_spinner.addHideFunction(window.ui_spinner.spinkit.hide);

/**
 * CSS3 파일 기반의 Spinner Show API
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 */
window.ui_spinner.spinkit.show=function(){var i=window.ui_spinner.spinkit;i.el||(i.el=e(n(o))),window.b2link.common.clearTimeout(i.timeout),i.el.style.display="",window.b2link.element.appendChild(window.document.body,i.el);var t=i.el,l=i.el.children[0];t.style.bottom="0px",t.style.top="0px",window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(l),t.style.top=l.style.top,t.style.bottom="",l.style.left="0px",l.style.top="0px"};

/**
 * @function
 * @param {HTMLElement} el
 */
window.ui_spinner.spinkit.setElement=function(i){return"DIV"!=i.tagName?void window.b2link_ui.message.error("DIV만 가능"):void(t.el=i)};

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
window.ui_spinner.spinkit.setMode=function(o){t.el=e(n(i+"/ui/Spinner/spinkit/"+o+".html"))};

/**
 * @function
 * @param {Number} n 1000이 1초
 */
window.ui_spinner.spinkit.setTime_Hide=function(i){t.timeHide=i}
}();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;