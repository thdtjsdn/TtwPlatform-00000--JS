//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.html.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.html;

window.apis.html = window.apis.html || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.html;


//----------------------------------------------------------------------------------------------------window.apis.html.a***;

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyBrace=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyBraceStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.apis.html.applyBrace__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var i=SUtilString.applyBraceStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyBrace_children=function(n,r){for(var i,e=SUtilString.applyBraceStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){i=l[_],i.__originalInnerHTML||(i.__originalInnerHTML=i.innerHTML);var o=e(i.__originalInnerHTML,r);o&&(i.innerHTML=o)}return n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * __originalInnerHTML은 무시하고 현재 innerHTML로 갱신한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyBrace_children__innerHTML=function(r,n){for(var i,e=SUtilString.applyBraceStrFromObj__NV_NA,o=r.children,l=0,_=o.length;_>l;++l){i=o[l],i.__originalInnerHTML=i.innerHTML;try{var a=e(i.__originalInnerHTML,n)}catch(t){window.TtwLog.error("window.apis.html.applyBrace_children__innerHTML Error : "+t),window.TtwLog.error("io.__originalInnerHTML에 잘못 정의된 property name이 존재해서 발생함")}a&&(i.innerHTML=a)}return r};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyBrackets=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyBracketsStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.apis.html.applyBrackets__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var i=SUtilString.applyBracketsStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyBrackets_children=function(n,r){for(var i,e=SUtilString.applyBracketsStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){i=l[_],i.__originalInnerHTML||(i.__originalInnerHTML=i.innerHTML);var t=e(i.__originalInnerHTML,r);t&&(i.innerHTML=t)}return n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * __originalInnerHTML은 무시하고 현재 innerHTML로 갱신한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyBrackets_children__innerHTML=function(r,n){for(var i,e=SUtilString.applyBracketsStrFromObj__NV_NA,o=r.children,t=0,l=o.length;l>t;++t){i=o[t],i.__originalInnerHTML=i.innerHTML;try{var _=e(i.__originalInnerHTML,n)}catch(a){window.TtwLog.error("window.apis.html.applyBrackets_children__innerHTML Error : "+a),window.TtwLog.error("io.__originalInnerHTML에 잘못 정의된 property name이 존재해서 발생함")}_&&(i.innerHTML=_)}return r};

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyParentheses=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyParenthesesStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.apis.html.applyParentheses__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var e=SUtilString.applyParenthesesStrFromObj__NV_NA(n.__originalInnerHTML,r);return e&&(n.innerHTML=e),n};

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.apis.html.applyParentheses_children=function(n,r){for(var e,i=SUtilString.applyParenthesesStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){e=l[_],e.__originalInnerHTML||(e.__originalInnerHTML=e.innerHTML);var t=i(e.__originalInnerHTML,r);t&&(e.innerHTML=t)}return n};

//----------------------------------------------------------------------------------------------------window.apis.html.a***;


//----------------------------------------------------------------------------------------------------window.apis.html.c***;

/**
 * @function
 * @param {HTMLElement} html
 * @return {HTMLElement}
 */
window.apis.html.createHTMLElement = SUtilTemplateHTML.createHTML;
window.apis.html.createHTMLElement_LI = SUtilTemplateHTML.createHTML_LI;
window.apis.html.createHTMLElement_TBODY = SUtilTemplateHTML.createHTML_TBODY;
window.apis.html.createHTMLElement_THEAD = SUtilTemplateHTML.createHTML_THEAD;
window.apis.html.createHTMLElement_TR = SUtilTemplateHTML.createHTML_TR;

window.apis.html.createHTMLElement__URL=function(n){return window.apis.html.createHTMLElement(window.apis.xhr.reqSync_String(n))};
window.apis.html.createHTMLElement__URL_LI=function(n){return window.apis.html.createHTMLElement__URL_LI(window.apis.xhr.reqSync_String(n))};
window.apis.html.createHTMLElement__URL_TBODY=function(n){return window.apis.html.createHTMLElement__URL_TBODY(window.apis.xhr.reqSync_String(n))};
window.apis.html.createHTMLElement__URL_THEAD=function(n){return window.apis.html.createHTMLElement__URL_THEAD(window.apis.xhr.reqSync_String(n))};
window.apis.html.createHTMLElement__URL_TR=function(n){return window.apis.html.createHTMLElement__URL_TR(window.apis.xhr.reqSync_String(n))};

!function(){var n={},e={},t={},_={},i={};
window.apis.html.createHTMLElement__URL_Cache=function(e){return n[e]||(n[e]=window.apis.xhr.reqSync_String(e)),window.apis.html.createHTMLElement(n[e])},
window.apis.html.createHTMLElement__URL_Cache.clear=function(){n={}},
window.apis.html.createHTMLElement__URL_Cache_LI=function(e){return n[e]||(n[e]=window.apis.xhr.reqSync_String(e)),window.apis.html.createHTMLElement__URL_Cache_LI(t[e])},
window.apis.html.createHTMLElement__URL_Cache_LI.clear=function(){e={}},
window.apis.html.createHTMLElement__URL_Cache_TBODY=function(e){return n[e]||(n[e]=window.apis.xhr.reqSync_String(e)),window.apis.html.createHTMLElement__URL_Cache_TBODY(_[e])},
window.apis.html.createHTMLElement__URL_Cache_TBODY.clear=function(){t={}},
window.apis.html.createHTMLElement__URL_Cache_THEAD=function(t){return n[t]||(n[t]=window.apis.xhr.reqSync_String(t)),window.apis.html.createHTMLElement__URL_Cache_THEAD(e[t])},
window.apis.html.createHTMLElement__URL_Cache_THEAD.clear=function(){_={}},
window.apis.html.createHTMLElement__URL_Cache_TR=function(e){return n[e]||(n[e]=window.apis.xhr.reqSync_String(e)),window.apis.html.createHTMLElement__URL_Cache_TR(i[e])},
window.apis.html.createHTMLElement__URL_Cache_TR.clear=function(){i={}}}();

//----------------------------------------------------------------------------------------------------window.apis.html.c***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;