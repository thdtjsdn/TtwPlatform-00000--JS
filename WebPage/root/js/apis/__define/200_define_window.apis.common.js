//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.common.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.common;

window.apis.common = window.apis.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.common;


//----------------------------------------------------------------------------------------------------window.apis.common.c***;

/**
 * Interval을 제거한다.
 * @function
 * @param {Number} n
 */
window.apis.common.clearInterval=function(n){clearInterval(n)};

/**
 * Interval을 제거한다.
 * 대상 HTMLElement에서 window.apis.event.INTERVAL_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.apis.common.clearInterval_dispatchEvent=function(n,e){clearTimeout(n),e&&window.apis.event.dispatchCustomEvent(e,window.apis.event.INTERVAL_END,n)};

/**
 * Timeout을 제거한다.
 * @function
 * @param {Number} n
 */
window.apis.common.clearTimeout=function(o){clearTimeout(o)};

/**
 * Timeout을 제거한다.
 * 대상 HTMLElement에서 window.apis.event.TIMEOUT_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.apis.common.clearTimeout_dispatchEvent=function(n,i){clearTimeout(n),i&&window.apis.event.dispatchCustomEvent(i,window.apis.event.TIMEOUT_END,n)};

//----------------------------------------------------------------------------------------------------window.apis.common.c***;

/**
 * "window.ui_member.public.forgotPassword" 같은 문자열 API를 호출하다.
 * "window.ui_member.public.forgotPassword"은 무조건 {Function} 이여아한다.
 * @function
 * @param {String} api "window.ui_member.public.forgotPassword"와 같은 api 명
 * @param {Array|String} function( a, b ){}  에서 파라메터를 배열로 [ a, b ]로 만들어서 넘긴다. 또는 JSONArray 형태로 "[ a의 값, b의 값 ]" 형태로 넘긴다.
 * @return {*}
 */
window.apis.common.execStringAPI=function(n,r){if(0==n.indexOf("window.")&&(n=n.replace("window.","")),r)try{"string"==typeof r&&(r=JSON.parse(r))}catch(o){return window.TtwLog.error("window.apis.common.execStringAPI Error : "+o),null}else r=null;for(var i=n.split("."),e=window,w=0,t=i.length;t>w;++w)e=e[i[w]];return e.apply(window,r)};

//----------------------------------------------------------------------------------------------------window.apis.common.s***;

/**
 * Interval을 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.apis.common.setInterval=function(n,t){return setInterval(n,t)};

/**
 * Interval을 구동한다.
 * 대상 HTMLElement에서 window.apis.event.INTERVAL_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t
 * @return {Number}
 */
window.apis.common.setInterval_dispatchEvent=function(n,t,e){var i=setInterval(n,t);return e&&window.apis.event.dispatchCustomEvent(e,window.apis.event.INTERVAL_START,i),i};

/**
 * Timeout를 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.apis.common.setTimeout=function(n,o){return setTimeout(n,o)};

/**
 * Timeout를 구동한다.
 * 대상 HTMLElement에서 window.apis.event.TIMEOUT_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t targetElement
 */
window.apis.common.setTimeout_dispatchEvent=function(n,t,e){var i=setTimeout(n,t);return e&&window.apis.event.dispatchCustomEvent(e,window.apis.event.TIMEOUT_START,i),i};

//----------------------------------------------------------------------------------------------------window.apis.common.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;