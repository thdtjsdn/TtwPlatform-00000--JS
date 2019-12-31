//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/element/window.smt_ui.element.appendChild.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic UI HTMLElement appendChild
 * @function
 * @param {HTMLElement} p parent
 * @param {HTMLElement} c child
 */
window.smt_ui.element.appendChild = function( p, c )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.element.appendChild():void----------" );

	window.b2link.element.appendChild( p, c );

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.element.appendChild():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;