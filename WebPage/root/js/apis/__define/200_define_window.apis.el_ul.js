//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.el_ul.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.el_ul;

window.apis.el_ul = window.apis.el_ul || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.el_ul;


//----------------------------------------------------------------------------------------------------window.apis.el_ul.g;

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "LI"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLLIElement} li
 */
window.apis.el_ul.getLIFromMouseClickEventTarget=function(e){return"LI"==e.tagName?e:window.apis.el_ul.getLIFromMouseClickEventTarget(e.parentElement)};

//----------------------------------------------------------------------------------------------------window.apis.el_ul.g;


//----------------------------------------------------------------------------------------------------window.apis.el_ul.p;

/**
 * ul.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.apis.el_ul.push_child=function(r,i){try{var l=window.apis.html.createHTMLElement_LI(SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i));r.appendChild(l)}catch(n){window.TtwLog.error("window.apis.el_ul.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.apis.el_ul.p;


//----------------------------------------------------------------------------------------------------window.apis.el_ul.u;

/**
 * ul.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.apis.el_ul.unshift_child=function(n,r){try{n.innerHTML=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r)+n.innerHTML}catch(i){window.TtwLog.error("window.apis.el_ul.unshift_child Error : "+i)}};

//----------------------------------------------------------------------------------------------------window.apis.el_ul.u;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;