//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.el_style_table.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.el_style_table;

window.apis.el_style_table = window.apis.el_style_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.el_style_table;


//----------------------------------------------------------------------------------------------------window.apis.el_style_table.h***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.apis.el_style_table.hideColumn( table, 3 );
	window.apis.el_style_table.hideColumn( table, 4 );
	window.apis.el_style_table.hideColumn( table, 5 );

	window.apis.el_style_table.showColumn( table, 3 );
	window.apis.el_style_table.showColumn( table, 4 );
	window.apis.el_style_table.showColumn( table, 5 );

	window.apis.el_style_table.showAllColumns( table );
 * </code>
 */
!function(){var n="th:nth-of-type( <!=n=!> ),td:nth-of-type( <!=n=!> ){display: none;}";window.apis.el_style_table.hideColumn=function(e,t){return window.apis.el_style.addCSSText_name(e,n.replace(/\<\!\=n\=\!\>/gi,t),"table-hideColumn"+t)}}();

//----------------------------------------------------------------------------------------------------window.apis.el_style_table.h***;


//----------------------------------------------------------------------------------------------------window.apis.el_style_table.s***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.apis.el_style_table.hideColumn( table, 3 );
	window.apis.el_style_table.hideColumn( table, 4 );
	window.apis.el_style_table.hideColumn( table, 5 );

	window.apis.el_style_table.showColumn( table, 3 );
	window.apis.el_style_table.showColumn( table, 4 );
	window.apis.el_style_table.showColumn( table, 5 );

	window.apis.el_style_table.showAllColumns( table );
 * </code>
 */
window.apis.el_style_table.showAllColumns=function(l){window.apis.el_style.removeAllStyleElements_name(l,"table-hideColumn")};

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.apis.el_style_table.hideColumn( table, 3 );
	window.apis.el_style_table.hideColumn( table, 4 );
	window.apis.el_style_table.hideColumn( table, 5 );

	window.apis.el_style_table.showColumn( table, 3 );
	window.apis.el_style_table.showColumn( table, 4 );
	window.apis.el_style_table.showColumn( table, 5 );

	window.apis.el_style_table.showAllColumns( table );
 * </code>
 */
window.apis.el_style_table.showColumn=function(e,l){return window.apis.el_style.removeStyleElement(e,"table-hideColumn"+l)};

//----------------------------------------------------------------------------------------------------window.apis.el_style_table.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;