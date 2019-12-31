//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.isModal.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * modal 스타일의 HTMLElement에서 modal 속성을 제거한다.
 * @function
 */
window.smt_ui.modal.modalToNModal = function( el )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.modal.modalToNModal():void----------" );

	if( window.smt_ui.modal.isModal( el ) )
	{
		window.TtwLog.log( el.className + " 의 Semantic-UI modal 속성을 제거" );
		el.className = el.className.replace( "hidden", "" ).replace( "modal", "" ).replace( /\ \ /gi, "" );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.modal.modalToNModal():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;