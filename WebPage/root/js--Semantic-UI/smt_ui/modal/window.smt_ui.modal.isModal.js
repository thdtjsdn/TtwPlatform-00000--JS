//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.isModal.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * HTMLElement가 Semantic-UI의 modal 속성인지 판단한다.
 * @function
 * @param {Boolean}
 */
window.smt_ui.modal.isModal = function( el )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.modal.isModal():{Boolean}----------" );

	if( -1 != el.className.indexOf( "modal" ) ) return 1;
	return 0;

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.modal.isModal():{Boolean}----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;