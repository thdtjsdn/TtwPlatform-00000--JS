//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_window.apis.location.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis.location;

window.apis.location = window.apis.location || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.location;

/**
 * window.location 에서 Parameter를 추출한다.
 * http://localhost?api=window.ui_member.public.forgotPassword&params=[1,2]
 * @function
 * @return {Object}
 * <code>
	{
		api : ""
		, params : ""//JSONArray 타입의 문자열
	}
 * </code>
 */
//window.apis.location.get__api_params=function(){var a={api:SUtilLocation.getParameter__Name("api"),params:SUtilLocation.getParameter__Name("params")};return window.__defineGetter__("POPUP-URL-PARAMETER",function(){return a}),a};

/**
 * window.location 에서 Parameter를 추출한다.
 * http://localhost?api=window.ui_member.public.forgotPassword&params=[1,2]
 * @function
 * @return {Object}
 * <code>
	{
		api : ""
		, params : ""//JSONArray 타입의 문자열
		, SCODE : ""//시스템 코드;
	}
 * </code>
 */
window.apis.location.get__api_params_SCODE=function(){var a={api:SUtilLocation.getParameter__Name("api"),params:SUtilLocation.getParameter__Name("params"),SCODE:SUtilLocation.getParameter__Name("SCODE")};return window.__defineGetter__("POPUP-URL-PARAMETER",function(){return a}),a};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;