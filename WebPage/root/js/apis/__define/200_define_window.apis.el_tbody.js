//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.el_tbody.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.el_tbody;

window.apis.el_tbody = window.apis.el_tbody || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.el_tbody;


//----------------------------------------------------------------------------------------------------window.apis.el_tbody.c;



//----------------------------------------------------------------------------------------------------window.apis.el_tbody.c;


//----------------------------------------------------------------------------------------------------window.apis.el_tbody.g;

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.apis.el_tbody.getTBodyFromMouseClickEventTarget=function(e){return"TBODY"==e.tagName?e:window.apis.el_tbody.getTBodyFromMouseClickEventTarget(e.parentElement)};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.apis.el_tbody.getTBodyFromTR=function(e){return"TBODY"==e.tagName?e:window.apis.el_tbody.getTBodyFromTR(e.parentElement)};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.apis.el_tbody.getTD__FirstTRFirstTD=function(i){return i.children[0].children[0]};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.apis.el_tbody.getTD__LastTRFirstTD=function(n){return n.children[n.children.length-1].children[0]};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.apis.el_tbody.getTD_innerHTML__FirstTRFirstTD=function(i){return window.apis.el_tbody.getTD__FirstTRFirstTD(i).innerHTML};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.apis.el_tbody.getTD_innerHTML__LastTRFirstTD=function(n){return window.apis.el_tbody.getTD__LastTRFirstTD(n).innerHTML};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.apis.el_tbody.getTD_innerText__FirstTRFirstTD=function(t){return window.apis.el_tbody.getTD__FirstTRFirstTD(t).innerText};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.apis.el_tbody.getTD_innerText__LastTRFirstTD=function(t){return window.apis.el_tbody.getTD__LastTRFirstTD(t).innerText};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "LI"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLLIElement} li
 */
window.apis.el_tbody.getTDFromMouseClickEventTarget=function(e){return"TD"==e.tagName?e:window.apis.el_tbody.getTDFromMouseClickEventTarget(e.parentElement)};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.apis.el_tbody.getTRFromMouseClickEventTarget=function(e){return"TR"==e.tagName?e:window.apis.el_tbody.getTRFromMouseClickEventTarget(e.parentElement)};

//----------------------------------------------------------------------------------------------------window.apis.el_tbody.g;


//----------------------------------------------------------------------------------------------------window.apis.el_tbody.p;

/**
 * tbody.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Object} d [ {}, {}, ... ]
 */
window.apis.el_tbody.push_child=function(r,i){try{r.innerHTML+=SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i)}catch(n){window.TtwLog.error("window.apis.el_tbody.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.apis.el_tbody.p;


//----------------------------------------------------------------------------------------------------window.apis.el_tbody.u;

/**
 * tbody.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.apis.el_tbody.unshift_child=function(n,r){try{n.innerHTML=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r)+n.innerHTML}catch(i){window.TtwLog.error("window.apis.el_tbody.unshift_child Error : "+i)}};

//----------------------------------------------------------------------------------------------------window.apis.el_tbody.u;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;