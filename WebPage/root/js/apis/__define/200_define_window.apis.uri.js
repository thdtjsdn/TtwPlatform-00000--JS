//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.uri.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.uri;

window.apis.uri = window.apis.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.apis.uri.decodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.decodeURI(i)),n[i]},window.apis.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.apis.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.decodeURIComponent(o)),n[o]},window.apis.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.apis.uri.encodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.encodeURI(i)),n[i]},window.apis.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.apis.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.encodeURIComponent(o)),n[o]},window.apis.uri.encodeURIComponent._clear=function(){n={}}}();

//----------------------------------------------------------------------------------------------------window.apis.uri.g***;

/**
 * Object를 URI Paramter 형식의 문자열로 바꿔서 Return 한다.
 * @function
 * @param {Object} data { a:1, b:2, ... }
 * @return {String} &a=1&b=2....
 */
window.apis.uri.getURIFromObject=function(r){var n="";for(var i in r)n+="&"+i+"="+r[i];return n};

/**
 * @function
 * @param {String} s 문자열
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 * +를 !MTg3!로 변경
 */
//window.apis.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};
//window.apis.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!")};
window.apis.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!").replace( /%/gi, "!Mzc=!" )};

/**
 * @function
 * @param {Object} data
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 * +를 !MTg3!로 변경
 */
//window.apis.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};
//window.apis.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!")};
window.apis.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!").replace( /%/gi, "!Mzc=!" )};

//----------------------------------------------------------------------------------------------------window.apis.uri.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;