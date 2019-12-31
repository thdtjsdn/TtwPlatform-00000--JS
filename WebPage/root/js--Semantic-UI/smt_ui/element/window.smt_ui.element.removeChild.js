//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/element/window.smt_ui.element.removeChild.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic UI HTMLElement appendChild
 * @function
 * @param {HTMLElement} p parent
 * @param {HTMLElement} c child
 */
window.smt_ui.element.removeChild = function( p, c )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.element.removeChild():void----------" );

	window.b2link.element.removeChild( p, c );

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.element.removeChild():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;