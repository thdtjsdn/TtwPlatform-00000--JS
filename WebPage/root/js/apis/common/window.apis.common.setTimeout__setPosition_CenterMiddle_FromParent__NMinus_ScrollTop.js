//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/common/window.apis.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Timeout를 구동한다.
 * @function
 * @param {HTMLElement} el
 * @param {Number} time
 * @return {Number}
 */
window.apis.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop = function( el, time )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.apis.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():{Number}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.apis.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():{Number}----------" );

	return setTimeout( function(){ window.apis.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop( el ); }, time ? time : 500 );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;