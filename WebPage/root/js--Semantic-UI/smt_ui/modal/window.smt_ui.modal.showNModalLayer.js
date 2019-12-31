
//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/modal/window.smt_ui.modal.isModal.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic-UI의 modal 속성을 가진 Element를 modal아 아닌 형태의 Layer로 표출한다.
 * @function
 * @param {Object} d
 * <code>
	{
		element : {HTMLElement}
		, parentElement : {HTMLElement}//Default : window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP
		, css : {
			width : "500px"
			, height : "200px"
			, position : "absolute"
		}
	}
 * </code>
 */
window.smt_ui.modal.showNModalLayer = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.modal.showNModalLayer():{Boolean}----------" );

	if( !d.hasOwnProperty( "bMouseEnabled" ) ) d.bMouseEnabled = true;
	if( !d.hasOwnProperty( "bAlign" ) ) d.bAlign = true;
	var el = d.element;
	var elp = d.parentElement || window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP;


	el.__originalStyle_showNModalLayer = el.getAttribute( "style" );

	//modal 스타일의 HTMLElement에서 modal 속성을 제거한다.;
	window.smt_ui.modal.modalToNModal( el );

	el.style.width = d.css.width;
	el.style.height = d.css.height;
	el.style.position = d.css.position;

	window.smt_ui.element.appendChild( elp, el );

	if( d.bAlign ) window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( el );

	//마우스 인식 활성화;
	if( d.bMouseEnabled ) window.b2link.element.mouseEnable( el );

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.modal.showNModalLayer():{Boolean}----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;