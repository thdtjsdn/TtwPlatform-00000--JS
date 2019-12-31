//----------------------------------------------------------------------------------------------------;
var fileNm = "./js__b2link__SYS0015/smt_ui/apiExplorer/window.smt_ui.apiExplorer.APIExplorer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 *
 * @example
 * <code>
	var els = window.smt_ui.apiExplorer.APIExplorer();
	var el = els[ 0 ];
	var ec = els[ 1 ];
 * </code>
 */
window.smt_ui.apiExplorer.APIExplorer = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.apiExplorer.APIExplorer():{Array}----------" );

	var _original_el = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT;
	var _original_id = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID;
	var _original_display = _original_el.style.display;

	var p = {
		url : window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/ui/smt_ui/APIExplorer/"
		//url : "http://localhost:49323/ui/smt_ui/APIExplorer/"
		//url : "./ui/smt_ui/APIExplorer/"
		, nm : "APIExplorer"
		, key : "SYS0015$smt_ui$apiExplorer$APIExplorer"
	};

	window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP );
	var o = window.smt_ui.addUI__DefaultModalFalse__NCSS( p, arguments[ 0 ] );

	_original_el.style.display = "none";
	window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( _original_id );

	var el = o[ 0 ];
		el.style.zIndex = 9999999999999;

	window.addEventListener( "keyup", function( e ){
		if( 120 == e.keyCode )
			window.b2link.element.switchShowHide( el );

		if( "none" == el.style.display ) _original_el.style.display = _original_display;
		else _original_el.style.display = "none";
	}
	, false, 0, true );

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.apiExplorer.APIExplorer():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;