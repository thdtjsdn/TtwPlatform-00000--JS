//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/element/window.apis.element.createElement__Canvas.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Canvas Element를 새롭게 생성하여 반환한다.
 * @return {HTMLCanvasElement}
 */
window.apis.element.createElement__Canvas = function()
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.apis.element.createElement__Canvas():{HTMLCanvasElement}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.apis.element.createElement__Canvas():{HTMLCanvasElement}----------" );
	return window.document.createElement( "canvas" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;