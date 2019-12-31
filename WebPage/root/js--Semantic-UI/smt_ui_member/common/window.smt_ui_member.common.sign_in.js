//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui_member/common/window.smt_ui_member.common.sign_in.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
window.smt_ui_member.common.sign_in = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui_member.common.sign_in():{Array}----------" );

	var host = window.b2link.url.getServerURLByServers( "SYS0015_WebServer" );

	var p = {
		url : host + "/ui/member/common/"
		, nm : "sign_in"
		, css_url : host + "/css_ui/"
		, css_front_nm : "div-member-common-"
		, key : "member-common$sign_in"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	var el = o[ 0 ];//HTMLElement;
	var elC = o[ 1 ];//HTMLElement's Controller;

	if( elC.evt_Complete__SignIn )
	{
		window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui_member.common.sign_in():{Array}----------if( elC.evt_Complete__SignIn )" );
		return o;
	}

	elC.evt_Complete__SignIn = window.smt_ui_member.common.sign_in._evt_Complete__SignIn;

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui_member.common.sign_in():{Array}----------return o;" );
	return o;
};

/**
 * @function
 * @param {} result
 */
window.smt_ui_member.common.sign_in._evt_Complete__SignIn = function( result )
{
	window.TtwLog.timeStamp( "[ S ] - window.smt_ui_member.common.sign_in._evt_Complete__SignIn():void----------" );

	if( window.b2link.response.getResultStatus( result ) )
	{
		//window.b2link_ui_member.member_basic.getAllList();
		//window.b2link_ui_member.member_basic.getAllList__nm();
	}
	else window.b2link.log.error__Signin_failure();

	window.TtwLog.timeStamp( "[ E ] - window.smt_ui_member.common.sign_in._evt_Complete__SignIn():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;