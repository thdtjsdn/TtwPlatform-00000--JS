//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.ui_modal.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.ui_modal;

window.apis.ui_modal = window.apis.ui_modal || {};

//--------------------------------------------------;

window.apis.ui_modal._evt_mClick__modal_bg = function( e )
{
	e.stopImmediatePropagation();
	e.stopPropagation();
	window.apis.ui_modal.hide();
};

//--------------------------------------------------;

window.apis.ui_modal.addEvent__mClick__modal_bg=function(){window.apis.ui_modal.removeEvent__mClick__modal_bg(),window.apis.ui_modal.modal_bg.addEventListener("click",window.apis.ui_modal._evt_mClick__modal_bg,!1,0,!0)};
window.apis.ui_modal.removeEvent__mClick__modal_bg=function(){window.apis.ui_modal.modal_bg.removeEventListener("click",window.apis.ui_modal._evt_mClick__modal_bg,!1)};

//--------------------------------------------------;

/**
 * window.apis.ui.APPEND_CHILD_TARGET_ELEMENT를 기준으로 FullSize View객체를 변경한다.
 * @function
 * @param {HTMLElement} el
 */
window.apis.ui_modal.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT = function( el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.apis.ui_modal.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );

	var s = el.style;
		s.position = "absolute";

	if( el.__FULL_SIZE_MODE )
	{
		var p = window.apis.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement;

		//var le = 10;
		var le = p.offsetLeft + 10;
		var ri = 10;//right;
		var to = 1;//top;
		var bo = 1;//bottom;

		s.left = le + "px";
		s.right = ri + "px";

		s.top = to + "px";
		//s.bottom = bo + "px";

		var minMaxWidth = window.apis.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth - 10 - ri + "px";
		s.minWidth = s.maxWidth = minMaxWidth;

		window.apis.event.dispatchCE__RESIZED_EL( el, null );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.apis.ui_modal.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.ui_modal;


//----------------------------------------------------------------------------------------------------window.apis.ui_modal.a***;

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 *  - bRemoveAllChildren으로 조절 가능 기본이 true
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 appendChild 한다.
 * @function
 * @param {HTMLElement} o
 * @param {Boolean} bRemoveAllChildren true
 */
window.apis.ui_modal.appendChild=function(n,i){0!=i&&(i=!0),i&&window.apis.ui_modal.removeAllChildren(),window.apis.element.appendChild(window.apis.ui_modal.modal_content,n)};

/**
 * Modal Content DIV에 객체를 추가한다.
 * Modal Content DIV에 있던 객체들은 Modal Background Content에 옮긴다.
 * @function
 * @param {HTMLElement} o
 */
window.apis.ui_modal.appendChild_MoveCurrentChildren=function(n){window.apis.ui_modal.move_ContentChildrenToBGContent(),window.apis.ui_modal.appendChild(n,!1)};

/**
 * Modal Background Content DIV에 객체를 추가한다.
 * @function
 * @param {HTMLElement} o
 */
window.apis.ui_modal.appendChildToBGContent=function(n){window.apis.element.appendChild(window.apis.ui_modal.modal_bg_content,n)};

/**
 * 사용안함
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 *  - bRemoveAllChildren으로 조절 가능 기본이 true
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 appendChild 한다.
 * @function
 * @param {HTMLElement} o
 * @param {Boolean} bRemoveAllChildren true
 */
window.apis.ui_modal.appendSubChild=function(n,i){0!=i&&(i=!0),i&&window.apis.ui_modal.removeAllChildren(),window.apis.element.appendChild(window.apis.ui_modal.modal_content,n)};

//----------------------------------------------------------------------------------------------------window.apis.ui_modal.a***;


//----------------------------------------------------------------------------------------------------window.apis.ui_modal.d***;

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 dispose 한다.
 * @function
 */
window.apis.ui_modal.disposeAllChildren=function(){window.apis.element.disposeAllChildren(window.apis.ui_modal.modal_content)};

//----------------------------------------------------------------------------------------------------window.apis.ui_modal.d***;


//----------------------------------------------------------------------------------------------------window.apis.ui_modal.h***;

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 숨긴다.
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "none"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "none"
 * @function
 */
//!function(){window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.hide=function(){window.apis.ui_modal;window.apis.ui_modal.hide._f0()},window.apis.ui_modal.hide._f0=function(){var i=window.apis.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none"},window.apis.ui_modal.hide._timeout0=0}();
!function(){window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.hide=function(){window.apis.ui_modal;window.apis.ui_modal.hide._f0()},window.apis.ui_modal.hide._f0=function(){var i=window.apis.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none",window.apis.ui_modal.addEvent__mClick__modal_bg()},window.apis.ui_modal.hide._timeout0=0}();

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 숨긴다.
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "none"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.opacity = 0
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "none"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 2 ] ).style.display = "none"
 * hide시 transition 효과를 추가 한다.
 * @function
 */
//!function(){window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.hide_transition=function(){var i=window.apis.ui_modal;i.modal_bg_content.children.length||(i.modal_bg.style.opacity=0,clearTimeout(window.apis.ui_modal.hide_transition._timeout0),window.apis.ui_modal.hide_transition._timeout0=setTimeout(window.apis.ui_modal.hide_transition._f0,1))},window.apis.ui_modal.hide_transition._f0=function(){var i=window.apis.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none",window.apis.element.mouseEnable(i.modal_content)},window.apis.ui_modal.hide_transition._timeout0=0}();
!function(){window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.hide_transition=function(){var i=window.apis.ui_modal;i.modal_bg_content.children.length||(i.modal_bg.style.opacity=0,clearTimeout(window.apis.ui_modal.hide_transition._timeout0),window.apis.ui_modal.hide_transition._timeout0=setTimeout(window.apis.ui_modal.hide_transition._f0,1))},window.apis.ui_modal.hide_transition._f0=function(){var i=window.apis.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none",window.apis.ui_modal.addEvent__mClick__modal_bg()},window.apis.ui_modal.hide_transition._timeout0=0}();

//----------------------------------------------------------------------------------------------------window.apis.ui_modal.h***;


//----------------------------------------------------------------------------------------------------window.apis.ui_modal.i***;

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )의 기초 설정을 셋팅한다.
 * Application이 처음 구동 될시 1회 자동으로 실행하고 기능이 사라지는 함수다.
 * - Modal Background Content DIV : 화면에 표시는 되지만, 작동 불가능 상태의 객체
 * - Modal Background DIV : 검은색 반투명 모달 레이어
 * - Modal Content DIV : 작동상태가 될 객체가 추가될 레이어
 * 형태로 구성되어있다.
 * @function
 */
//!function(){var n=window.apis.ui_modal,i=window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.apis.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.apis.element.mouseEnable(n.modal_bg),window.apis.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.apis.ui_modal.hide()},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.apis.ui_modal.initialize=function(){}},window.apis.ui_modal.initialize()}();
//!function(){var n=window.apis.ui_modal,i=window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.apis.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.apis.element.mouseEnable(n.modal_bg),window.apis.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.apis.ui_modal.hide()},!1,0,!0),n.modal_content.addEventListener("click",function(n){"divContainer topModal modal-content"==n.target.className&&(n.stopImmediatePropagation(),n.stopPropagation(),window.apis.ui_modal.hide())},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.apis.ui_modal.initialize=function(){}},window.apis.ui_modal.initialize()}();
//!function(){var n=window.apis.ui_modal,i=window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.apis.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.apis.element.mouseEnable(n.modal_bg),window.apis.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.apis.ui_modal.hide()},!1,0,!0),n.modal_content.addEventListener("click",function(n){"divContainer topModal modal-content"==n.target.className&&(n.stopImmediatePropagation(),n.stopPropagation(),window.apis.ui_modal.hide())},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.apis.ui_modal.initialize=function(){}};try{window.apis.ui_modal.initialize()}catch(o){window.TtwLog.error("window.apis.ui_modal.initialize 실패")}}();
!function(){var n=window.apis.ui_modal,i=window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.apis.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.apis.element.mouseEnable(n.modal_bg),window.apis.element.mouseEnable(n.modal_bg),window.apis.ui_modal.addEvent__mClick__modal_bg(),n.modal_content.addEventListener("click",function(n){"divContainer topModal modal-content"==n.target.className&&(n.stopImmediatePropagation(),n.stopPropagation(),window.apis.ui_modal.hide())},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.apis.ui_modal.initialize=function(){}};try{window.apis.ui_modal.initialize()}catch(o){window.TtwLog.error("window.apis.ui_modal.initialize 실패")}}();

/**
 * @function
 * @return {Boolean}
 */
!function(){var i=window.apis.ui_modal;window.apis.ui_modal.isVisible=function(){var n=i.modal_bg.style;return"none"==n.display?!1:"none"!=n.display?!0:void 0}}();

//----------------------------------------------------------------------------------------------------window.apis.ui_modal.i***;


//----------------------------------------------------------------------------------------------------window.apis.ui_modal.m***;

/**
 * Modal Background Content DIV에 있는 모든 객체를 Modal Content로 옮긴다.
 * @function
 */
window.apis.ui_modal.move_BGContentChildrenToContent=function(){try{for(var n=window.apis.ui_modal.modal_bg_content,o=window.apis.ui_modal.appendChild,i=n.children,d=0,l=i.length;l>d;++d)o(i[0],!1);l&&window.apis.ui_modal.show()}catch(t){window.TtwLog.error("window.apis.ui_modal.move_BGContentChildrenToContent Error : "+t)}};

/**
 * Modal Background Content DIV에 마지막으로 추가된 객체를 Modal Content DIV에 추가가 된다.
 * @function
 */
window.apis.ui_modal.move_BGContentLastChildToContent=function(){try{var n=window.apis.ui_modal.modal_bg_content.children,o=n.length;o&&(window.apis.ui_modal.show(),window.apis.ui_modal.appendChild(n[o-1],!1))}catch(i){window.TtwLog.error("window.apis.ui_modal.move_BGContentLastChildToContent Error : "+i)}};

/**
 * Modal Content DIV에 있는 객체들를 Modal Content DIV에 옮긴다.
 * @function
 */
window.apis.ui_modal.move_ContentChildrenToBGContent=function(){try{for(var n=window.apis.ui_modal.modal_content,o=window.apis.ui_modal.appendChildToBGContent,i=n.children,t=0,d=i.length;d>t;++t)o(i[0])}catch(l){window.TtwLog.error("Error : "+l)}};

//----------------------------------------------------------------------------------------------------window.apis.ui_modal.m***;


//----------------------------------------------------------------------------------------------------window.apis.ui_modal.r***;

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 * //Children들의 style.opacity를 0으로 만든다.
 * @function
 */
window.apis.ui_modal.removeAllChildren=function(){try{for(var o=window.apis.ui_modal.modal_content,i=window.apis.ui_modal.removeChild,n=o.children,l=0,r=n.length;r>l;++l)i(n[0])}catch(d){window.TtwLog.error("Error : "+d)}};

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 removeChild 한다.
 * @function
 * @param {HTMLElement} o
 */
window.apis.ui_modal.removeChild=function(o){try{window.apis.element.removeChild(window.apis.ui_modal.modal_content,o)}catch(l){global.TtwLog.error("window.apis.ui_modal.removeChild Error : "+l),global.TtwLog.error(window.apis.element.getID_Or_ClassName(o)+"가 Modal Content의 자식 객체가 아니다.")}};

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 removeChild 한다.
 * @function
 * @param {HTMLElement} o
 */
window.apis.ui_modal.removeChild_BGC=function(o){try{window.apis.element.removeChild(window.apis.ui_modal.modal_bg_content,o)}catch(l){global.TtwLog.error("window.apis.ui_modal.removeChild_BGC Error : "+l),global.TtwLog.error(window.apis.element.getID_Or_ClassName(o)+"가 Modal Background Content의 자식 객체가 아니다.")}};

//----------------------------------------------------------------------------------------------------window.apis.ui_modal.r***;


//----------------------------------------------------------------------------------------------------window.apis.ui_modal.s***;

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0.5
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "block"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.list.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var o=window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.show=function(){o.style.display="block";var l=window.apis.ui_modal;l.modal_bg_content.style.display="block",l.modal_bg.style.display="block",l.modal_bg.style.opacity=0,l.modal_content.style.display="block",window.apis.ui_modal.show._f0()},window.apis.ui_modal.show._f0=function(){window.apis.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.apis.ui_modal.modal_bg).opacity},window.apis.ui_modal.show._timeout0=0}();

/**
 * 모달을 띄운다.
 * 사용자 인터렉션으로 모달 종료 불가
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0.5
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "block"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.list.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var o=window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.show_NClose=function(){o.style.display="block";var l=window.apis.ui_modal;l.modal_bg_content.style.display="block",l.modal_bg.style.display="block",l.modal_bg.style.opacity=0,l.modal_content.style.display="block",window.apis.ui_modal.removeEvent__mClick__modal_bg(),window.apis.ui_modal.show_NClose._f0()},window.apis.ui_modal.show_NClose._f0=function(){window.apis.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.apis.ui_modal.modal_bg).opacity},window.apis.ui_modal.show_NClose._timeout0=0}();

/**
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = "block"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.opacity = 0.5
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * Static Modal UI( window.apis.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 2 ] ).style.display = "block"
 * show시 transition 효과를 추가 한다.
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var i=window.apis.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.apis.ui_modal.show_transition=function(){var o=window.apis.ui_modal;i.style.display="block",o.modal_bg_content.style.display="block",o.modal_bg.style.display="block",o.modal_content.style.display="block",clearTimeout(window.apis.ui_modal.show_transition._timeout0),window.apis.ui_modal.show_transition._timeout0=setTimeout(window.apis.ui_modal.show_transition._f0,1)},window.apis.ui_modal.show_transition._f0=function(){window.apis.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.apis.ui_modal.modal_bg).opacity},window.apis.ui_modal.show_transition._timeout0=0}();

//----------------------------------------------------------------------------------------------------window.apis.ui_modal.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;