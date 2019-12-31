//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.el_div.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis.el_div;

window.apis.el_div = window.apis.el_div || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.el_div;


//----------------------------------------------------------------------------------------------------window.apis.el_div.c***;

/**
 * 받은 데이터를 div.children 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 children[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.apis.el_div.change_child=function(n,e){for(var i,l=window.apis.element.injectValueForListItemAndIDX,d=n.children,o=0,t=d.length>e.length?e.length:d.length;t>o;++o)if(i=d[o],dio=e[o],l(i,dio,o),dio){var r="";for(var h in dio)r+=dio[h];i.innerText=r}else i.innerText=""};

//----------------------------------------------------------------------------------------------------window.apis.el_div.c***;


//----------------------------------------------------------------------------------------------------window.apis.el_div.p***;

/**
 * div.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.apis.el_div.push_child=function(r,i){try{r.innerHTML+=SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i)}catch(n){window.TtwLog.error("window.apis.el_div.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.apis.el_div.p***;


//----------------------------------------------------------------------------------------------------window.apis.el_div.u***;

/**
 * div.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.apis.el_div.unshift_child=function(i,n){try{i.innerHTML=SUtilString.applyBraceStrFromArray(i.__originalInnerHTML,n)+i.innerHTML}catch(r){window.TtwLog.error("window.apis.el_div.unshift_child Error : "+r)}};

//----------------------------------------------------------------------------------------------------window.apis.el_div.u***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;