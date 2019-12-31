//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/__define/200_define_window.apis.css.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis.css;

window.apis.css = window.apis.css || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.css;

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 */
window.apis.css.appendResetCSS=function(e,n){var i=window.apis.url.getServerURL_WebServer_SCODE("SYS0015"),t=i+"/libs/ResetCSS/"+e+"/"+e+".tcss",S=window.apis.xhr.reqSync_String(t),l=SUtilTemplateHTML.createHTML("<style>"+S+"</style>");window.document.head.appendChild(l)};

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 */
window.apis.css.appendResetCSS_Important=function(e,n){var t=window.apis.url.getServerURL_WebServer_SCODE("SYS0015"),i=t+"/libs/ResetCSS/"+e+"/"+e+"-important.tcss",r=window.apis.xhr.reqSync_String(i),S=SUtilTemplateHTML.createHTML("<style>"+r+"</style>");window.document.head.appendChild(S)};

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 * @return {String}
 */
window.apis.css.getResetCSS=function(e,r){var n=window.apis.url.getServerURL_WebServer_SCODE("SYS0015"),S=n+"/libs/ResetCSS/"+e+"/"+e+".tcss",i=window.apis.xhr.reqSync_String(S);return i.replace(/\<\!\=IDENTIFIER\=\!\>/gi,r)};

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 * @return {String}
 */
window.apis.css.getResetCSS_Important=function(e,r){var n=window.apis.url.getServerURL_WebServer_SCODE("SYS0015"),t=n+"/libs/ResetCSS/"+e+"/"+e+"-important.tcss",i=window.apis.xhr.reqSync_String(t);return i.replace(/\<\!\=IDENTIFIER\=\!\>/gi,r)};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;