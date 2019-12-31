//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.ui_resource.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.ui_resource;

window.apis.ui_resource = window.apis.ui_resource || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.ui_resource;


//----------------------------------------------------------------------------------------------------window.apis.ui_reousrce.a***;

/**
 * ***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.apis.ui_resource.applyParentheses_LocaleLabel=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),window.apis.html.applyParentheses(n,window.apis.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.apis.ui_resource.applyParentheses_LocaleLabel_Children=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(n,window.apis.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.locale.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.apis.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode=function(e,r){r.__originalInnerHTML_Locale||(r.__originalInnerHTML_Locale=r.innerHTML);try{var i=e.replace("{{locale}}",window.apis.STATIC.CONFIG.URL.UI.LOCALE),n=window.apis.xhr.reqSync_JSON(i);SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(r,n)}catch(l){window.b2link_ui.message.error("window.apis.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode Error : "+l),window.b2link_ui.message.error(i+" 파일을 만들어야 함."),window.b2link_ui.message.error("./ui_include/li/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-th/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-td/에서 {{}} 구문 파일 설정 하기.")}};

/**
 * url에서 .js를 .json으로 변경 후 ***.local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @return {Object}
 */
//window.apis.ui_resource.reqSync_JSON_HTMLLocaleLabel=function(r){r=r.replace(".js",".locale."+window.apis.STATIC.CONFIG.URL.UI.LOCALE+".json");var n;try{n=window.apis.xhr.reqSync_JSON(r)}catch(e){window.TtwLog.error("window.apis.ui_resource.reqSync_JSON_HTMLLocaleLabel Error : "+e),n=null}return n};
!function(){var r={};window.apis.ui_resource.reqSync_JSON_HTMLLocaleLabel=function(n){if(r[n])return r[n];n=n.replace(".js",".locale."+window.apis.STATIC.CONFIG.URL.UI.LOCALE+".json");var e;try{r[n]=e=window.apis.xhr.reqSync_JSON(n)}catch(o){window.TtwLog.error("window.apis.ui_resource.reqSync_JSON_HTMLLocaleLabel Error : "+o),e=null}return e},window.apis.ui_resource.reqSync_JSON_HTMLLocaleLabel._clear=function(){r={}}}();

/**
 * url에서 .js를 .json으로 변경 후 ***. 'type' .local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @param {String} type "alert", "confirm", "label", "message", "tooltip"
 * @return {Object}
 */
/*/
window.apis.ui_resource.reqSync_JSON_Locale=function(e,n){e=e.replace(".js","."+n+".locale."+window.apis.STATIC.CONFIG.URL.UI.LOCALE+".json");var r;try{r=window.apis.xhr.reqSync_JSON(e)}catch(o){window.TtwLog.error("window.apis.ui_resource.reqSync_JSON_Locale "+n+"Error : "+o),r=null}return r};
window.apis.ui_resource.reqSync_JSON_Locale.alert=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"alert")};
window.apis.ui_resource.reqSync_JSON_Locale.confirm=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"confirm")};
window.apis.ui_resource.reqSync_JSON_Locale.label=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"label")};
window.apis.ui_resource.reqSync_JSON_Locale.message=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"message")};
window.apis.ui_resource.reqSync_JSON_Locale.tooltip=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"tooltip")};
/*/
!function(){var e={};window.apis.ui_resource.reqSync_JSON_Locale=function(n,r){if(e[n])return e[n];n=n.replace(".js","."+r+".locale."+window.apis.STATIC.CONFIG.URL.UI.LOCALE+".json");var o;try{e[n]=o=window.apis.xhr.reqSync_JSON(n)}catch(i){window.TtwLog.error("window.apis.ui_resource.reqSync_JSON_Locale "+r+"Error : "+i),o=null}return o}
,window.apis.ui_resource.reqSync_JSON_Locale._clear=function(){e={}}
,window.apis.ui_resource.reqSync_JSON_Locale.alert=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"alert")}
,window.apis.ui_resource.reqSync_JSON_Locale.confirm=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"confirm")}
,window.apis.ui_resource.reqSync_JSON_Locale.label=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"label")}
,window.apis.ui_resource.reqSync_JSON_Locale.message=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"message")}
,window.apis.ui_resource.reqSync_JSON_Locale.tooltip=function(e){return window.apis.ui_resource.reqSync_JSON_Locale(e,"tooltip")}}();
//*/

//----------------------------------------------------------------------------------------------------window.apis.ui_reousrce.a***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;