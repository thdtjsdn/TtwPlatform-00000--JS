//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.util.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis.util;

window.apis.util = window.apis.util || {};

//--------------------------------------------------window.apis.util.i***;

/**
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} cssURL CSS File URL
 */
window.apis.util.importCSSToHead = SUtilTemplateHTML.addCSS__URLToHead;

/**
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} cssURL0 CSS File URL
 * @param {String} cssURL1 CSS File URL
 * @param {String} cssURL2 CSS File URL
 * @param {String} cssURLs ....
 * @example
 * <code>
	window.apis.util.importCSSsToHead( "http://localhost/0.css", "http://localhost/1.css", "http://localhost/2.css" );
 * </code>
 */
window.apis.util.importCSSsToHead = function(){ var f = window.apis.util.importCSSToHead; var a = arguments; var i=0, iLen=a.length; for( ; i<iLen; ++i ) f( a[ i ] ); };

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.apis.util.importHTML=SUtilTemplateHTML.addHTML__URLToElID;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.apis.util.importHTML__Background = function( url, targetElementID )
{
	//return SUtilTemplateHTML.addHTML__URLToElID( url, "div_0__Background" );
	return SUtilTemplateHTML.addHTML__URLToElID( url, window.apis.STATIC.CONST.ROOT_DIV.ID_BACKGROUND );
};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.apis.util.importHTML_Cache=SUtilTemplateHTML.addHTML__URLToElID_Cache;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.apis.util.importHTMLJS=SUtilTemplateHTML.addHTMLJS__URL_Return;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @return {*}
 */
window.apis.util.importHTMLJS__Background = function( urlHTML, urlJS, targetElementID )
{
	//return SUtilTemplateHTML.addHTMLJS__URL_Return( urlHTML, urlJS, "div_0__Background" );
	return SUtilTemplateHTML.addHTMLJS__URL_Return( urlHTML, urlJS, window.apis.STATIC.CONST.ROOT_DIV.ID_BACKGROUND );
};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * window.apis.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.apis.util.importHTMLJS__And_Add_b2link_STATIC_UI=function(i,n,_,d){var t=SUtilTemplateHTML.addHTMLJS__URL_Return(n,_,d);return window.apis.ui.staticUIMap_Add(i,t),t};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.apis.util.importHTMLJSCSS=SUtilTemplateHTML.addHTMLJSCSS__URL_Return;

/**
 * *.html을 불러와서 "div_0__Background"( window.apis.STATIC.CONST.ROOT_DIV.EL_BACKGROUND )에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @return {*}
 */
window.apis.util.importHTMLJSCSS__Background = function( urlHTML, urlJS, urlCSS, targetElementID )
{
	//return SUtilTemplateHTML.addHTMLJSCSS__URL_Return( urlHTML, urlJS, urlCSS, "div_0__Background" );
	return SUtilTemplateHTML.addHTMLJSCSS__URL_Return( urlHTML, urlJS, urlCSS, window.apis.STATIC.CONST.ROOT_DIV.ID_BACKGROUND );
};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * window.apis.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * css는 window.apis.STATIC.UI[ key ]에 보관하지 않는다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.apis.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI=function(i,n,_,d,t){var S=SUtilTemplateHTML.addHTMLJSCSS__URL_Return(n,_,d,t);return window.apis.ui.staticUIMap_Add(i,S),S};

/**
 * HTML URL로 HTML Text를 가져온다.
 * <include-html> 메카니즘을 완성시켜준다.
 *
 * PHP, JSP, ASP, Include 메카니즘 지원 가능. 현재는 미지원
 *
 * @function
 * @param {String} url
 * @return {String} HTML Text
 */
window.apis.util.importHTMLText = function( url ){ return STtwUtilString.includeHTML_Recursion( window.apis.xhr.reqSync_String( url ) ) };

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.apis.util.importHTMLToEl=SUtilTemplateHTML.addHTML__URLToEl;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.apis.util.importHTMLToEl_Cache=SUtilTemplateHTML.addHTML__URLToEl_Cache;

/**
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
 * <code>
	(function( url, parameters ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} url
 * @param {*} param0
 * @param {*} param1
 * @param {*} param2
 * @param {*} param3
 * @param {*} ...
 * @return {*}
 */
window.apis.util.importJS=function(t){var i=SUtilTemplateHTML.addJS__URL(t,arguments);return i};

/**
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
 * <code>
	(function( url, parameters ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} url
 * @param {*} param0
 * @param {*} param1
 * @param {*} param2
 * @param {*} param3
 * @param {*} ...
 * @return {*}
 */
!function(){var t={};window.apis.util.importJS__Reuse=function(r){if(t.hasOwnProperty(r))return t[r]?t[r]:null;try{var n=SUtilTemplateHTML.addJS__URL(r,arguments)}catch(e){throw e}return t[r]=n,n}}();

/**
 * *.js 경로를 <SCRIPT> 형태로 <HEAD>에 삽입한다.
 *
 * @function
 * @param {String} url "http://localhost/b.js"
 * @param {String} cbComplete function(){};
 */
window.apis.util.importJSToHead = SUtilTemplateHTML.addJS__URLToHead;

/**
 * *.js 파일들의 경로를 <SCRIPT> 형태로 <HEAD>에 삽입한다.
 *
 * @function
 * @param {String} url0 "http://localhost/a.js"
 * @param {String} url1 "http://localhost/b.js"
 * @param {String} url2 "http://localhost/c.js"
 * @param {String} url3 ...
 * @param {String} cbComplete function(){}; 완료시점을 알고 싶을 시 마지막 파라메터에 콜백함수를 넣는다. 넣지 않아도 정상 구동됨
 * @example
 * <code>
	window.apis.util.importJSsToHead(
		"http://localhost/a.js"
		, "http://localhost/b.js"
		, "http://localhost/c.js"
		, function(){ debugger; }
	);
 * </code>
 */
window.apis.util.importJSsToHead = function()
{
	var f = window.apis.util.importJSToHead;
	var a = arguments;
	var i=0, iLen=a.length-2;
	for( ; i<iLen; ++i ) f( a[ i ] );
	var last = a[ i + 1 ];
	if( "function" == typeof( last ) ) f( a[ i ], a[ i + 1 ] );
	else
	{
		f( a[ i ] );
		f( a[ i + 1 ] );
	}
};

//--------------------------------------------------window.apis.util.i***;

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.util;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;