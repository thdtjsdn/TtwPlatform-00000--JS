//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.url.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.url;

window.apis.url = window.apis.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.url;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
window.apis.url.getServerURL_APIServer_SCODE=function(e){return window.apis.url.getServerURLByServers(e+"_APIServer")};

/**
 * @function
 * @return {String}
 */
window.apis.url.getServerURL_APIServer_Self=function(){return window.apis.url.getServerURLByServers(window.apis.STATIC.CONFIG.URL.SCODE+"_APIServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
window.apis.url.getServerURL_ScrapServer_SCODE=function(r){return window.apis.url.getServerURLByServers(r+"_ScrapServer")};

/**
 * @function
 * @return {String}
 */
window.apis.url.getServerURL_ScrapServer_Self=function(){return window.apis.url.getServerURLByServers(window.apis.STATIC.CONFIG.URL.SCODE+"_ScrapServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
window.apis.url.getServerURL_WebServer_SCODE=function(e){return window.apis.url.getServerURLByServers(e+"_WebServer")};

/**
 * @function
 * @return {String}
 */
window.apis.url.getServerURL_WebServer_Self=function(){return window.apis.url.getServerURLByServers(window.apis.STATIC.CONFIG.URL.SCODE+"_WebServer")};

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;