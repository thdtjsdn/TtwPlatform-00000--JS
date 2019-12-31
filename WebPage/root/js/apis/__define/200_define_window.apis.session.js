//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.session.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.session;

window.apis.session = window.apis.session || {};

//--------------------------------------------------window.apis.session.g***;

/**
 * Session 정보 Object를 반환한다.
 * @function
 * @return {Object} { "sid" : "", "Expires" : "", "mid" : "" }
 */
//(function(){var _a=["Expires","sid","mid"];window.apis.session.getSession=function(){for(var e,i=window.sessionStorage,n={},s=0,t=_a.length;t>s;++s)e=_a[s],n[e]=i.getItem(e),n[e]||delete n[e],""==n[e]&&delete n[e];return n};})();
(function(){var e=["Expires","sid","mid"],n=window.apis.STATIC.CONFIG.URL;window.apis.session.getSession=function(){for(var i,o=window.sessionStorage,s={},t=0,d=e.length;d>t;++t)i=e[t],s[i]=o.getItem(i),s[i]||delete s[i],""==s[i]&&delete s[i];return s.SCODE=n.SCODE,s}})();

/**
 * sid 문자열만 반환한다.
 * @function
 * @return {String}
 */
window.apis.session.getSession__sid=function(){return window.sessionStorage.getItem("sid")};

/**
 * URI용 Session 문자열을 반환한다.
 * @function
 * @return {String} &sid=asdasdasd&Expires=asdasdasd&SCODE=asdasdasd&mid=asdasdasd
 */
//window.apis.session.getSession__URI=function(){var n="",i=window.apis.session.getSession();for(var s in i)n+="&"+s+"="+i[s];return n};
window.apis.session.getSession__URI=function(){var i=window.apis.session.getSession();return"&sid="+i.sid+"&mid="+i.mid+"&d_ex="+i.Expires+"&SCODE="+i.SCODE};

//--------------------------------------------------window.apis.session.g***;


//--------------------------------------------------window.apis.session.r***;

/**
 * @function
 */
!function(){var e=["Expires","sid","mid"];window.apis.session.removeSession=function(){for(var i=window.sessionStorage,n=0,o=e.length;o>n;++n)i.removeItem(e[n])}}();

//--------------------------------------------------window.apis.session.r***;


//--------------------------------------------------window.apis.session.s***;

/**
 * @function
 * @param {Object} d data { "Expires" : "", "sid" : "", "mid" : mid }
 */
window.apis.session.setSession=function(s){var i=window.sessionStorage;s.sid&&i.setItem("sid",s.sid),s.Expires&&i.setItem("Expires",s.Expires),s.mid&&i.setItem("mid",s.mid)};

/**
 * window.apis.session.sessionEventListeners.js
 * Session 관련 이벤트 처리
 * 브라우저 창 종료전 이벤트 처리
 * f5 리프레쉬 키 처리
 * @function
 */
!function(){var e=function(e){window.apis.session.removeSession(),window.service_member.session.destroy_session()},n=function(n){window.removeEventListener("beforeunload",e,!1)},o=function(n){116==n.keyCode&&window.removeEventListener("beforeunload",e,!1),n.ctrlKey&&(82==n.keyCode&&window.removeEventListener("beforeunload",e,!1),116==n.keyCode&&window.removeEventListener("beforeunload",e,!1)),n.metaKey&&(82==n.keyCode&&window.removeEventListener("beforeunload",e,!1),116==n.keyCode&&window.removeEventListener("beforeunload",e,!1))};window.apis.session.addEvent=function(){window.addEventListener("beforeunload",e,!1,0,!0),window.addEventListener("blur",n,!1,0,!0),window.addEventListener("keydown",o,!1,0,!0)},window.apis.session.removeEvent=function(){window.removeEventListener("beforeunload",e,!1),window.removeEventListener("blur",n,!1),window.removeEventListener("keydown",o,!1)},window.apis.session.addEvent()}();

//--------------------------------------------------window.apis.session.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.apis.session;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;