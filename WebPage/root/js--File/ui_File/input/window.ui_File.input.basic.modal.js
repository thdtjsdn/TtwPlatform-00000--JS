//----------------------------------------------------------------------------------------------------;
var fileNm = "js--File/ui_File/input/window.ui_File.input.basic.modal.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * sign in UI 화면에 필요한 리소스를 서버에 요청 후 View와 Controller를 생성하여 반환하고 화면에 View를 표출한다.
 * 이미 한번 생성되어있으면 존재하는 객체를 반환한다.
 * arguments의 옵션을 통해 View를 표출하지 않고 객체만 반환 받는게 가능하다.
 *
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.ui_File.input.basic.modal = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.ui_File.input.basic.modal():{Array}----------" );

	var host = window.apis.url.getServerURLByServers( "SYS0015_WebServer" );

	var p = {
		//url : "./ui/smt_ui/File/Input/smt_ui-File-Input-"
		url : host + "/ui/smt_ui/File/Input/smt_ui-File-Input-"
		, nm : "Basic"
		//, css_url : "./css_ui/"
		//, css_url : host + "/css_ui/"
		, css_front_nm : "div-smt_ui-File-Input-"
		, key : "smt_ui$File-Basic"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.apis.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.apis.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.apis.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.apis.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.apis.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.apis.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	window.TtwLog.timeStamp( "---- [ E ] - window.ui_File.input.basic.modal():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;