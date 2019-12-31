//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.el_list.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.el_list;

window.apis.el_list = window.apis.el_list || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.el_list;


//----------------------------------------------------------------------------------------------------window.apis.el_list.g***;

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element가 가지고 있는 'list_item_value'에서 '_id' Property를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {uint}
 */
window.apis.el_list.getIndex_First=function(i){return parseInt(window.apis.el_list.getItem_First(i).list_item_value._id)};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element가 가지고 있는 'list_item_value'에서 '_id' Property를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {uint}
 */
window.apis.el_list.getIndex_Last=function(t){return parseInt(window.apis.el_list.getItem_Last(t).list_item_value._id)};

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {HTMLElement} li, tr, ...
 */
window.apis.el_list.getItem_First=function(i){return i.children[0]};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {HTMLElement} li, tr, ...
 */
window.apis.el_list.getItem_Last=function(n){return n.children[n.children.length-1]};

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {Object}
 */
window.apis.el_list.getItemData_First=function(t){return t.children[0].list_item_value};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {Object}
 */
window.apis.el_list.getItemData_Last=function(t){return t.children[t.children.length-1].list_item_value};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @param {Object} d
 * <code>
 * {
 *	"maxCount" : NaN
 *	, "limit" : NaN
 * }
 * </code>
 * @return {Object}
 */
window.apis.el_list.getItemData_Last__maxCount_Limit=function(t,i){return t.children[i.maxCount%i.limit-1].list_item_value};

//----------------------------------------------------------------------------------------------------window.apis.el_list.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;