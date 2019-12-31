//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.ui_feature.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.ui_feature;

window.apis.ui_feature = window.apis.ui_feature || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.ui_feature;


//--------------------------------------------------window.apis.ui_feature.d***;

/**
 * @function
 * @param {HTMLElement} t
 * @param {Boolean} bAdd false false면 이벤트를 제거만 한다 true시 1회 이벤트 제거후 다시 이벤트를 등록한다.
 * @param {Boolean} bMDownReAppend true시 마우스 다운이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 * @param {Boolean} bMUpReAppend true시 마우스 업이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 */
!function(){var e=function(e){var t=e.target;return"BUTTON"==t.tagName||"I"==t.tagName?1:void 0},t=function(t){if(!e(t)){var o=t.currentTarget,a=o.parentElement,m=a.style;m.__originalLeft=m.left,m.__originalTop=m.top,m.__originalRight=m.right,m.__originalBottom=m.bottom,m.__originalWidth=m.clientWidth,m.__originalHeight=m.clientHeight,m.width=m.__originalWidth+"px",m.height=m.__originalHeight+"px",m.right="",m.bottom="",t.stopImmediatePropagation(),t.stopPropagation(),window.apis.element._appendChild(a.parentElement,a),i._t0=a,window.removeEventListener("mousemove",i,!1),window.addEventListener("mousemove",i,!1,0,!0),a&&(a.removeEventListener("mouseout",n,!1),a.addEventListener("mouseout",n,!1,0,!0)),a&&(a.removeEventListener("mouseover",r,!1),a.addEventListener("mouseover",r,!1,0,!0))}},o=function(t){if(!e(t)){var o=t.currentTarget,a=o.parentElement,m=m;m.__originalLeft=m.left,m.__originalTop=m.top,m.__originalRight=m.right,m.__originalBottom=m.bottom,m.__originalWidth=m.clientWidth,m.__originalHeight=m.clientHeight,m.width=m.__originalWidth+"px",m.height=m.__originalHeight+"px",m.right="",m.bottom="",t.stopImmediatePropagation(),t.stopPropagation(),window.apis.element._appendChild(a.parentElement,a),i._t0=a,window.removeEventListener("mousemove",i,!1),window.addEventListener("mousemove",i,!1,0,!0),a&&(a.removeEventListener("mouseout",n,!1),a.addEventListener("mouseout",n,!1,0,!0)),a&&(a.removeEventListener("mouseover",r,!1),a.addEventListener("mouseover",r,!1,0,!0))}},i=function(t){if(!e(t)){var o=i._t0;o.style.left=o.offsetLeft+t.movementX+"px",o.style.top=o.offsetTop+t.movementY+"px",t.stopImmediatePropagation(),t.stopPropagation()}},n=function(t){if(!e(t)){var o=i._t0;n._time0=setTimeout(function(){window.removeEventListener("mousemove",i,!1),o&&o.removeEventListener("mouseout",n,!1)},300),t.stopImmediatePropagation(),t.stopPropagation()}};n._time0=0;var r=function(t){e(t)||(clearTimeout(n._time0),t.stopImmediatePropagation(),t.stopPropagation())},a=function(t){if(!e(t)){var o=i._t0;t.stopImmediatePropagation(),t.stopPropagation(),o&&o.removeEventListener("mouseout",n,!1),o&&o.removeEventListener("mouseover",r,!1),i._t0=null,window.removeEventListener("mousemove",i,!1)}},m=function(t){if(!e(t)){var o=i._t0;t.stopImmediatePropagation(),t.stopPropagation(),window.apis.element.appendChild(o.parentElement,o),o&&o.removeEventListener("mouseout",n,!1),o&&o.removeEventListener("mouseover",r,!1),i._t0=null,window.removeEventListener("mousemove",i,!1)}};window.apis.ui_feature.drag=function(e,i,n,r){return e?(e.removeEventListener("mousedown",t,!1),e.removeEventListener("mousedown",o,!1),e.removeEventListener("mouseup",a,!1),void(i&&(n?e.addEventListener("mousedown",o,!1,0,!0):e.addEventListener("mousedown",t,!1,0,!0),r?e.addEventListener("mouseup",m,!1,0,!0):e.addEventListener("mouseup",a,!1,0,!0)))):(window.b2link_ui.message.error("window.apis.ui_feature.drag 't'가 존재 하지 않습니다. 로직을 다시 확인 하세요."),void window.b2link_ui.message.error("\n	 - TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성"))}}();

//--------------------------------------------------window.apis.ui_feature.d***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;