//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_base/__define/200_define_window.service_base.common.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_base.common;

window.service_base.common = window.service_base.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_base.common;

//--------------------------------------------------[ S ] - SYNC;
/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req=function(e,i){e+=window.b2link.session.getSession__URI(),++n,e+="&nCached="+n,window.service_base.common._fn_res(SUtilXMLHttpReqGet.reqSyncReturn(e,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.service_base.common._fn_req__locale_label=function(n,l,o){n+=window.b2link.session.getSession__URI(),++e,n+="&nCached="+e,window.service_base.common._fn_res__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,l,o)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req_for_string_result=function(e,i){e+=window.b2link.session.getSession__URI(),++n,e+="&nCached="+n,window.service_base.common._fn_res_for_string_result(SUtilXMLHttpReqGet.reqSyncReturn(e,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 문자열을 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.service_base.common._fn_req_for_string_result__locale_label=function(n,_,l){n+=window.b2link.session.getSession__URI(),++e,n+="&nCached="+e,window.service_base.common._fn_res_for_string_result__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,_,l)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req_POST=function(e,i,s,o){var r=window.b2link.session.getSession();i.Expires=r.Expires,i.mid=r.mid,i.sid=r.sid,++n,e+="nCached="+n,window.service_base.common._fn_res_POST(SUtilXMLHttpReqPost.reqSync__paramsObj(e,i,s).responseText,o)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {ArrayBuffer} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req_POST__ArrayBuffer=function(e,r,_,i){e+=window.b2link.session.getSession__URI(),++n,e+="nCached="+n;var o=SUtilXMLHttpReqPost.reqSyncReturn__paramsStr(e,r,_);window.b2link_service.common._fn_res_POST(o.responseText,i),o=null}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청 XMLHTTPRequest 객체를 재사용한다.
 *
 * @function
 * @param {XMLHTTPRequest} xhr
 * @param {String} url Server URL
 * @param {ArrayBuffer} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.service_base.common._fn_req_POST__ArrayBuffer__Ref=function(n,_,i,o,r){_+=window.b2link.session.getSession__URI(),++e,_+="nCached="+e,SUtilXMLHttpReqPost.reqSyncReturn__paramsStr__Ref(n,_,i,o),window.b2link_service.common._fn_res_POST(n.responseText,r)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.service_base.common._fn_req_POST__Str=function(n,i,s,r){var t=window.b2link.session.getSession();i.Expires=t.Expires,i.mid=t.mid,i.sid=t.sid,++e,n+="nCached="+e;var o=STtwUtilXMLHttpReqPost.reqSyncReturn__paramsStr(n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),JSON.stringify(i).replace(/\\"/gi,'"'),{"Content-type":"text/plain"}).responseText;window.service_base.common._fn_res_POST(o,r)}}();
//--------------------------------------------------[ E ] - SYNC;





//--------------------------------------------------[ S ] - ASYNC;
/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Function} cbError Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.service_base.common._fn_reqAsync=function(n,o,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,STtwUtilXMLHttpReqGet.req(n,{onerror:function(e){i&&i(e.target.responseText)},onloadend:function(e){window.service_base.common._fn_res(e.target.responseText,o)}})}}();
//--------------------------------------------------[ E ] - ASYNC;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;