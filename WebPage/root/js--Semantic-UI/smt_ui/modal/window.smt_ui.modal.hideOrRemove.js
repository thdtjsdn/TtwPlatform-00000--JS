//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.hideOrRemove.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic UI Modal Hide or Remove
 * modal이 className에 선언 되어있지만 Modal 용도와 그냥 View 용도 공용으로 사용시 판단내려서 화면에서 제거해주는 기능
 * @function
 * @param {HTMLElement} el
 */
window.smt_ui.modal.hideOrRemove = function( el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.modal.hideOrRemove():void----------" );

	//modal 객체를 modal이 아닌 용도로 사용시 처리 하기 위한 조건문;
	if( window.smt_ui.modal.isModal( el ) )
		window.smt_ui.modal.hideByClassName( el.classList[ 0 ] );
	else
		window.b2link.element.removeChildFromParentElement( el );

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.modal.hideOrRemove():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;