//----------------------------------------------------------------------------------------------------;
var fileNm = "js--Semantic-UI/smt_ui/__define/000_define_window.smt_ui.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.smt_ui;

window.smt_ui = window.smt_ui || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.smt_ui;

/**
 * window.smt_ui*** 함수가 호출 될시에 arguments[ 0 ]을 가져와서 modal 여부를 판단한다.
 * data(arguments[ 0 ])가 없을시엔 기본 Flase를 반환한다.
 * @function
 * @param {Object} data
 * @return {Boolean}
 */
window.smt_ui.isModal_DefaultFalse = function( data )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.isModal():{Boolean}----------" );

	if( data )
		if( data.hasOwnProperty( "modal" ) ) return data.modal;

	return false;

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.isModal():{Boolean}----------" );
};

/**
 * window.smt_ui*** 함수가 호출 될시에 arguments[ 0 ]을 가져와서 modal 여부를 판단한다.
 * data(arguments[ 0 ])가 없을시엔 기본 True 반환한다.
 * @function
 * @param {Object} data
 * @return {Boolean}
 */
window.smt_ui.isModal_DefaultTrue = function( data )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.isModal():{Boolean}----------" );

	if( data )
		if( data.hasOwnProperty( "modal" ) ) return data.modal;

	return true;

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.isModal():{Boolean}----------" );
};

/**
 * @function
 * @param {Object} ui_data
 * <code>
	{
		//공통 URL;
		url : "./ui/file_upload/cs/"

		//공통 이름;
		, nm : "excel_upload"

		//CSS 파일이 존재하는 경로;
		, css_url : "./css_ui/"

		//CSS 파일과 내부 선언된 #이후의 공통 명명 HTML의 DIV id 값도 동일
		, css_front_nm : "div-fileUpload-cs-"

		//window.b2link.STATIC.UI.***에 존재하는 키값;
		, key : "div-fileUpload-cs$excel_upload"
	}
 * </code>
 *
 * @param {Object} ui_options
 * <code>
	{
		display : {Boolean}
		, left : {Number}
		, bottom : {Number}
		, right : {Number}
		, top : {Number}
	}
 * </code>
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.smt_ui.addUI__DefaultModalFalse = function( ui_data, ui_options )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.addUI__DefaultModalFalse():{Array}----------" );

	var o;
	if( window.smt_ui.isModal_DefaultFalse( ui_options ) )
	{
		//o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.addUI__DefaultModalFalse():{Array}----------return o;" );
	return o;
};

/**
 * @function
 * @param {Object} ui_data
 * <code>
	{
		//공통 URL;
		url : "./ui/file_upload/cs/"

		//공통 이름;
		, nm : "excel_upload"

		//CSS 파일이 존재하는 경로;
		, css_url : "./css_ui/"

		//CSS 파일과 내부 선언된 #이후의 공통 명명 HTML의 DIV id 값도 동일
		, css_front_nm : "div-fileUpload-cs-"

		//window.b2link.STATIC.UI.***에 존재하는 키값;
		, key : "div-fileUpload-cs$excel_upload"
	}
 * </code>
 *
 * @param {Object} ui_options
 * <code>
	{
		display : {Boolean}
		, left : {Number}
		, bottom : {Number}
		, right : {Number}
		, top : {Number}
	}
 * </code>
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.smt_ui.addUI__DefaultModalTrue = function( ui_data, ui_options )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.addUI__DefaultModalTrue():{Array}----------" );

	//o[ 0 ] : element, o[ 1 ] : element controller;
	var o;
	if( window.smt_ui.isModal_DefaultTrue( ui_options ) )
	{
		//o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.addUI__DefaultModalTrue():{Array}----------return o;" );
	return o;
};

/**
 * @function
 * @param {Object} ui_data
 * <code>
	{
		//공통 URL;
		url : "./ui/file_upload/cs/"

		//공통 이름;
		, nm : "excel_upload"

		//CSS 파일이 존재하는 경로;
		, css_url : "./css_ui/"

		//CSS 파일과 내부 선언된 #이후의 공통 명명 HTML의 DIV id 값도 동일
		, css_front_nm : "div-fileUpload-cs-"

		//window.b2link.STATIC.UI.***에 존재하는 키값;
		, key : "div-fileUpload-cs$excel_upload"
	}
 * </code>
 *
 * @param {Object} ui_options
 * <code>
	{
		display : {Boolean}
		, left : {Number}
		, bottom : {Number}
		, right : {Number}
		, top : {Number}
	}
 * </code>
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.smt_ui.addUI__DefaultModalFalse__NCSS = function( ui_data, ui_options )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.addUI__DefaultModalFalse__NCSS():{Array}----------" );

	var o;
	if( window.smt_ui.isModal_DefaultFalse( ui_options ) )
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		//o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS__CheckStaticUI( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.addUI__DefaultModalFalse__NCSS():{Array}----------return o;" );
	return o;
};

/**
 * @function
 * @param {Object} ui_data
 * <code>
	{
		//공통 URL;
		url : "./ui/file_upload/cs/"

		//공통 이름;
		, nm : "excel_upload"

		//CSS 파일이 존재하는 경로;
		, css_url : "./css_ui/"

		//CSS 파일과 내부 선언된 #이후의 공통 명명 HTML의 DIV id 값도 동일
		, css_front_nm : "div-fileUpload-cs-"

		//window.b2link.STATIC.UI.***에 존재하는 키값;
		, key : "div-fileUpload-cs$excel_upload"
	}
 * </code>
 *
 * @param {Object} ui_options
 * <code>
	{
		display : {Boolean}
		, left : {Number}
		, bottom : {Number}
		, right : {Number}
		, top : {Number}
	}
 * </code>
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.smt_ui.addUI__DefaultModalTrue__NCSS = function( ui_data, ui_options )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.addUI__DefaultModalTrue__NCSS():{Array}----------" );

	//o[ 0 ] : element, o[ 1 ] : element controller;
	var o;
	if( window.smt_ui.isModal_DefaultTrue( ui_options ) )
	{
		o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		//o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS__CheckStaticUI( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.addUI__DefaultModalTrue__NCSS():{Array}----------return o;" );
	return o;
};

//------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;