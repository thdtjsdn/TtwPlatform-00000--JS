//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.element.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis.element;

window.apis.element = window.apis.element || {};

//--------------------------------------------------window.apis.element.a***;

/**
 * target HTMLElement를 removeChild할 시에 scrollTop를 기억한다.
 * target HTMLElement를 appendChild할 시에 기억해놓은 scrollTop를 적용한다.
 * 사용이 끝난 HTMLElement는 window.apis.element.removeEvent_RestoreScrollTopByDomNodeInserted로 이벤트를 제거 해준다.
 * @function
 * @param {HTMLElement} domNodeElement HTMLElement
 * @param {HTMLElement} evtElement HTMLElement
 */
window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted=function(e,o){e.__targetElement__RestoreScrollTopByDomNodeInserted__domNodeElement=e,e.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement=o,e.removeEventListener("DOMNodeInserted",window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1),e.removeEventListener("DOMNodeRemoved",window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1),e.addEventListener("DOMNodeInserted",window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1,0,!0),e.addEventListener("DOMNodeRemoved",window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1,0,!0)},window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted=function(e){var o=e.currentTarget.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement;o.scrollTop=o.__scrollTop},window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved=function(e){var o=e.currentTarget.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement;o.scrollTop?o.__scrollTop=o.scrollTop:!o.scrollTop&&o.__scrollTop&&(o.scrollTop=o.__scrollTop)};

/**
 * parentElement에 element 객체를 추가한다.
 * parentElement._appendChild 함수가 존재하면 사용하고 없으면 window.apis.element.appendChild를 사용한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.apis.element._appendChild=function(e,n){try{if(!e._appendChild)return void window.apis.element.appendChild(e,n);e._appendChild(n);window.apis.element.getID_Or_ClassName}catch(i){window.b2link_ui.message.error("window.apis.element._appendChild Error : "+i)}};

/**
 * parentElement에 element 객체를 추가한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.apis.element.appendChild=function(e,n){try{e.appendChild(n);var i=window.apis.element.getID_Or_ClassName;window.TtwLog.timeStamp(i(e)+"에 "+i(n)+"를 추가 함")}catch(d){window.b2link_ui.message.error("window.apis.element.appendChild Error : "+d)}};

/**
 * parentElement에 element 객체를 추가한다.
 * 추가한 객체를 parentElement의 정 한가운데에 배치한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 * @param {Number} time 1000이 1초 default 300
 */
window.apis.element.appendChild_SetPositionCenterMiddle=function(e,n,i){if(e==window.apis.ui_modal.modal_content)return void window.b2link_ui.message.error("Modal에서는 이 API를 사용할수 없다.");try{window.apis.element.appendChild_SetPositionCenterMiddle._timeout0=i?i:window.apis.element.appendChild_SetPositionCenterMiddle._timeout0,window.apis.element.appendChild(e,n),window.apis.element.setPosition_CenterMiddle_FromParent__NMinus(n);var t=function(){window.TtwLog.warn(t._count++),window.apis.element.setPosition_CenterMiddle_FromParent__NMinus(n),n.offsetLeft>=0&&n.offsetTop>=0||t()};t._count=0,setTimeout(t,window.apis.element.appendChild_SetPositionCenterMiddle._timeout0)}catch(o){window.b2link_ui.message.error("window.apis.element.appendChild_SetPositionCenterMiddle Error : "+o)}},window.apis.element.appendChild_SetPositionCenterMiddle._timeout0=50,window.apis.element.appendChild_SetPositionCenterMiddle._evt=function(e){var n=e.target,i=function(){window.TtwLog.warn(i._count++),window.apis.element.setPosition_CenterMiddle_FromParent__NMinus(n),n.offsetLeft>0&&n.offsetTop>0||i()};i._count=0,setTimeout(i,window.apis.element.appendChild_SetPositionCenterMiddle._timeout0)},window.apis.element.appendChild_SetPositionCenterMiddle._evt._count=0;

//--------------------------------------------------window.apis.element.a***;


//--------------------------------------------------window.apis.element.c***;

/**
 * Element.value 값을 ""으로 초기화 한다.
 * @function
 * @param {Object} t HTMLElement들이 존재하는 Object
 * @param {*} defaultValue ""
 * @return {Object}
 */
window.apis.element.clearElementsValue=function(e,a){a=a||"";var t;try{for(var l in e)if(t=e[l],t.tagName)window.TtwLog.timeStamp("className0 : "+t.className),t.value="";else for(var n in t)window.TtwLog.timeStamp("className1 : "+t[n].className),t[n].value=""}catch(i){window.b2link_ui.message.error("window.apis.element.clearElementsValue Error : "+i)}return e};

//--------------------------------------------------window.apis.element.c***;


//--------------------------------------------------window.apis.element.d***;

/**
 * window.apis.element.dispose
 * element에 js 객체가 존재 할 시에 t.js.dispose() 호출하여 element와 js객체를 제거한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.apis.element.dispose=function(e){e.js?e.js.dispose():(window.apis.element.removeChildFromParentElement(e),e.innerHTML="",e=null)};

/**
 * window.apis.element.disposeAllChildren
 * element의 children[ i ]에 js 객체가 존재 할 시에 t.children[ i ].js.dispose() 호출하여 element와 js객체를 제거한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
(function(){var _f1=window.apis.element.dispose;window.apis.element.disposeAllChildren=function(e){for(var l,n=window.apis.element.disposeAllChildren,i=e.children,d=0,o=i.length;o>d;++d)l=i[0],l.children.length&&n(l),_f1(l)};})();

//--------------------------------------------------window.apis.element.d***;


//--------------------------------------------------window.apis.element.g***;

/**
 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 */
window.apis.element.getElementByClassName=function(e,n){return e.getElementsByClassName(n)[0]};

/**
 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 모든 객체를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 * @return {Array}
 */
window.apis.element.getElementsByClassName=function(e,n){return e.getElementsByClassName(n)};

/**
 * target Object 구조 그대로 HTMLElement Reference를 HTMLElement value로 만들어서 리턴한다.
 * @function
 * @param {Object} t HTMLElement들이 존재하는 Object
 * @return {Object}
 */
window.apis.element.getElementsValue=function(e){var t,n={};try{for(var a in e)if(t=e[a],t.tagName)window.TtwLog.timeStamp("className0 : "+t.className),n[a]=t.value;else{n[a]={};for(var l in t)window.TtwLog.timeStamp("className1 : "+t[l].className),n[a][l]=t[l].value}}catch(i){window.b2link_ui.message.error("window.apis.element.getElementsValue Error : "+i)}return n};

/**
 * Element에 id가 존재할 시 id를 돌려주고 id가 없을시 classList[ 0 ]를 돌려준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {String}
 */
window.apis.element.getID_Or_ClassList0=function(i){return i.id&&""!=i.id?i.id:""==i.classList[0]?i.tagName:i.classList[0]};

/**
 * Element에 id가 존재할 시 id를 돌려주고 id가 없을시 className를 돌려준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {String}
 */
window.apis.element.getID_Or_ClassName=function(e){return e.id&&""!=e.id?e.id:""==e.className?e.tagName:e.className};

//--------------------------------------------------window.apis.element.g***;


//--------------------------------------------------window.apis.element.h***;

/**
 * 대상 Element를 숨긴다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.apis.element.hide=function(n){n.style.display="none"};

//--------------------------------------------------window.apis.element.h***;


//--------------------------------------------------window.apis.element.i***;

/**
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 */
window.apis.element.injectValueForListItem=function(e,i){e.list_item_value=i};

/**
 * data.$idx = idx를 반영한다.
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 * @param {uint} idx
 */
window.apis.element.injectValueForListItemAndIDX=function(e,i,n){i.$idx=n,e.list_item_value=i};

/**
 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array} data
 */
!function(){var e=window.apis.element.injectValueForListItem;window.apis.element.injectValueForListItems=function(n,t){var l;if(n.children[0]&&"STYLE"==n.children[0].tagName){l=[];for(var i=n.children,r=0,a=i.length;a>r;++r)"STYLE"!=i[r].tagName&&l.push(i[r])}else l=n.children;for(var r=0,a=l.length>t.length?t.length:l.length;a>r;++r)e(l[r],t[r])}}();

/**
 * $data에 $idx property를 생성해서 데이터의 index 값을 주입한다.
 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array} data
 */
!function(){var e=window.apis.element.injectValueForListItem;window.apis.element.injectValueForListItemsAndIDX=function(n,t){var i;if(n.children[0]&&"STYLE"==n.children[0].tagName){i=[];for(var l=n.children,r=0,a=l.length;a>r;++r)"STYLE"!=l[r].tagName&&i.push(l[r])}else i=n.children;for(var r=0,a=i.length>t.length?t.length:i.length;a>r;++r)t[r].$idx=r,e(i[r],t[r])},window.apis.element.injectValueForListItemsAndID=window.apis.element.injectValueForListItemsAndIDX}();

//--------------------------------------------------window.apis.element.i***;


//--------------------------------------------------window.apis.element.m***;

/**
 * 대상 Element를 마우스 인식 못하게 만든다.
 *
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.apis.element.mouseDisable=SUtilDisObj.mouseDisable;

/**
 * 대상 Element를 마우스 인식 못하게 만든다.
 *
 * @function
 * @param {String} id htmlElementID
 * @return {HTMLElement}
 */
window.apis.element.mouseDisable__ID=SUtilDisObj.mouseDisable__ID;

/**
 * 대상 Element를 마우스 인식 하게 만든다.
 *
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.apis.element.mouseEnable=SUtilDisObj.mouseEnable;

/**
 * 대상 Element를 마우스 인식 하게 만든다.
 *
 * @function
 * @param {String} id htmlElementID
 * @return {HTMLElement}
 */
window.apis.element.mouseEnable__ID=SUtilDisObj.mouseEnable__ID;

//--------------------------------------------------window.apis.element.m***;

//--------------------------------------------------window.apis.element.r***;

/**
 * 대상 Element의 모든 자식 객체를 제거한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 */
window.apis.element.removeAllChildren=function(e){try{for(var r=window.apis.element.removeChild,n=e.children,l=0,o=n.length;o>l;++l)r(e,n[0])}catch(i){window.TtwLog.error("window.apis.element.removeAllChildren Error : "+i)}};

/**
 * parentElement에서 childElement를 제거한다.
 * 제거 로그를 id, class를 기반으로 출력한다.
 *
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.apis.element.removeChild=function(e,n){try{e.removeChild(n);window.apis.element.getID_Or_ClassName}catch(w){window.TtwLog.warn("warn : "+w)}};

/**
 * 해당 Element의 parentElement에서 제거 후 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {HTMLElement}
 */
window.apis.element.removeChildFromParentElement=function(e){try{return e.parentElement.removeChild(e)}catch(r){window.TtwLog.error("window.apis.element.removeChildFromParentElement Error : "+r)}};

/**
 * window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted로 추가한 이벤트를 제거한다.
 * @param {HTMLElement} domNodeElement
 */
window.apis.element.removeEvent_RestoreScrollTopByDomNodeInserted=function(e){var o;o=e?e:e.__targetElement__RestoreScrollTopByDomNodeInserted__domNodeElement,o||window.b2link_ui.error.message("window.apis.element.removeEvent_RestoreScrollTopByDomNodeInserted Error : 이벤트를 제거할 대상 객체가 존재하지 않음"),o.removeEventListener("DOMNodeInserted",window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1),o.removeEventListener("DOMNodeRemoved",window.apis.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1)};

/**
 * t HTMLElement를 el HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {HTMLElement} el
 * @return {HTMLElement} el HTMLElement를 반환한다.
 */
window.apis.element.replaceElement=function(e,n){try{e.parentElement.replaceChild(n,e);var t=window.apis.element.getID_Or_ClassName;return window.TtwLog.timeStamp(t(e)+"를 "+t(n)+"로 교체 함"),n}catch(r){window.TtwLog.error("window.apis.element.replaceElement Error : "+r)}};

/**
 * t HTMLElement를 html 문자열로 생성한 HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {String} html
 * @return {HTMLElement} html로 생성된 HTMLElement를 반환한다.
 */
window.apis.element.replaceElement__HTML=function(e,n){try{return window.apis.element.replaceElement(e,window.apis.html.createHTMLElement(n))}catch(l){window.TtwLog.error("window.apis.element.replaceElement__HTML Error : "+l)}};

/**
 * t HTMLElement를 URL로 불러온 html 문자열로 생성한 HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {String} htmlURL
 * @return {HTMLElement} html로 생성된 HTMLElement를 반환한다.
 */
window.apis.element.replaceElement__HTML_URL=function(e,n){try{return window.apis.element.replaceElement__HTML(e,window.apis.xhr.reqSync_String(n))}catch(r){window.TtwLog.error("window.apis.element.replaceElement__HTML_URL Error : "+r)}};

/**
 * target HTMLElement를 removeChild할 시에 scrollTop를 기억한다.
 * target HTMLElement를 appendChild할 시에 기억해놓은 scrollTop를 적용한다.
 * 1회성이다.
 * 1번 복원하고 이벤트는 자동으로 제거된다.
 * @function
 * @param {HTMLElement} domNodeElement HTMLElement
 * @param {HTMLElement} evtElement HTMLElement
 */
window.apis.element.restoreScrollTopByDomNodeInserted=function(e,o){var l=function(n){e.removeEventListener("DOMNodeInserted",l,!1),e.removeEventListener("DOMNodeRemoved",r,!1),o.scrollTop=o.__scrollTop},r=function(e){o.scrollTop?o.__scrollTop=o.scrollTop:!o.scrollTop&&o.__scrollTop&&(o.scrollTop=o.__scrollTop)};e.addEventListener("DOMNodeInserted",l,!1,0,!0),e.addEventListener("DOMNodeRemoved",r,!1,0,!0)};

//--------------------------------------------------window.apis.element.r***;

//--------------------------------------------------window.apis.element.s***;

/**
 * TBody의 모든 tr의 모든 th의 className을 변경한다.
 * @function
 * @param {HTMLElement} tbody HTMLElement
 */
window.apis.element.setClassName__tbody_tr_td=function(e,n){for(var l=e.children,t=0,r=l.length;r>t;++t)for(var a=l[t].children,d=0,i=a.length;i>d;++d)a[d].className=n};

/**
 * THead의 모든 tr의 모든 th의 className을 변경한다.
 * @function
 * @param {HTMLElement} thead HTMLElement
 */
window.apis.element.setClassName__thead_tr_th=function(e,t){for(var n=e.children,l=0,_=n.length;_>l;++l)for(var s=n[l].children,a=0,i=s.length;i>a;++a)s[a].className=t},window.apis.element.setClassName__tbody_tr_th=function(e,t){window.b2link_ui.message.error("window.apis.element.setClassName__tbody_tr_th -> window.apis.element.setClassName__thead_tr_th로 교체바람"),window.apis.element.setClassName__thead_tr_th(e,t)};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * top, bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Object} boolList
 * <code>
	{
		left : 0 or 1
		, top : 0 or 1
		, bottom : 0 or 1
		, right : 0 or 1
	}
 * </code>
 */
window.apis.element.setPosition_Center_FromParent=function(t,o){var e=t.parentElement.clientWidth,i=t.clientWidth,n=i/2,a=e/2,r=t.style;r.left=a-n+"px",o?(o.top&&(r.top="auto"),o.bottom&&(r.bottom="auto"),o.right&&(r.right="auto")):(r.top="auto",r.bottom="auto",r.right="auto")};

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * top, bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Object} boolList
 * <code>
	{
		left : 0 or 1
		, top : 0 or 1
		, bottom : 0 or 1
		, right : 0 or 1
	}
 * </code>
 */
 window.apis.element.setPosition_Center_FromWindow=function(t,o){var e=t.parentElement.clientWidth,i=(t.parentElement.clientHeight,t.clientWidth),n=(t.clientHeight,i/2),l=e/2,a=t.style;a.left=l-n+"px",o?(o.top&&(a.top="auto"),o.bottom&&(a.bottom="auto"),o.right&&(a.right="auto")):(a.top="auto",a.bottom="auto",a.right="auto")};

 /**
 * 대상 HTMLElement의 left를 Body 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Body 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.apis.element.setPosition_CenterMiddle_FromBody=function(t){var e=window.document.body,i=e.clientWidth,o=e.clientHeight,n=t.clientWidth,d=t.clientHeight,l=n/2,c=d/2,h=i/2,m=o/2,r=t.style;r.left=h-l+"px",r.top=m-c+"px",r.bottom="auto",r.right="auto"};

/**
 * 대상 HTMLElement의 left를 Body 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Body 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
//window.apis.element.setPosition_CenterMiddle_FromBody__NMinus=function(t){var e=window.document.body,i=e.clientWidth,o=e.clientHeight,n=t.clientWidth,l=t.clientHeight,d=n/2,u=l/2,a=i/2,c=o/2,h=t.style,r=a-d;r>0?h.left=r+"px":h.left="auto";var m=c-u;m>0?h.top=m+"px":h.top="auto",h.bottom="auto",h.right="auto"};
window.apis.element.setPosition_CenterMiddle_FromBody__NMinus=function(t){var e=window.document.body,i=e.clientWidth,n=e.clientHeight,o=t.clientWidth,l=t.clientHeight,d=o/2,c=l/2,u=i/2,a=n/2,h=t.style,p=u-d;p>0?h.left=p+"px":h.left="auto";var r=a-c;r>0?h.top=r+"px":h.top="auto"};

window.apis.element.setPosition_CenterMiddle_FromBody__NMinus_HS=function(t,e,o){var i=window.document.body,n=i.clientWidth,d=i.clientHeight,l=e,u=o,_=l/2,a=u/2,c=n/2,p=d/2,r=t.style,s=c-_;s>0?r.left=s+"px":r.left="auto";var w=p-a;w>0?r.top=w+"px":r.top="auto"};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.apis.element.setPosition_CenterMiddle_FromParent=function(t){var e=t.parentElement.clientWidth,n=t.parentElement.clientHeight,i=t.clientWidth,l=t.clientHeight,o=i/2,r=l/2,a=e/2,c=n/2,d=t.style;d.left=a-o+"px",d.top=c-r+"px",d.bottom="auto",d.right="auto"};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
//window.apis.element.setPosition_CenterMiddle_FromParent__NMinus=function(t){var e=t.parentElement.clientWidth,n=t.parentElement.clientHeight,i=t.clientWidth,o=t.clientHeight,l=i/2,a=o/2,r=e/2,p=n/2,u=t.style,c=r-l;c>0?u.left=c+"px":u.left="auto";var d=p-a;d>0?u.top=d+"px":u.top="auto",u.bottom="auto",u.right="auto"};
window.apis.element.setPosition_CenterMiddle_FromParent__NMinus=function(t,e){var o=t.parentElement.clientWidth,i=t.parentElement.clientHeight,n=t.clientWidth,l=t.clientHeight,a=n/2,r=l/2,p=o/2,u=i/2,h=t.style,m=p-a;m>0?h.left=m+"px":h.left="auto";var c=u-r;c>0?h.top=c+"px":h.top="auto",e&&(e.top&&(h.top="auto"),e.bottom&&(h.bottom="auto"),e.right&&(h.right="auto"))};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Window 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.apis.element.setPosition_CenterMiddle_FromWindow=function(t){var e=t.parentElement.clientWidth,i=t.parentElement.clientHeight,n=t.clientWidth,l=t.clientHeight,o=n/2,d=l/2,r=e/2,a=i/2,c=t.style;c.left=r-o+"px",c.top=a-d+"px",c.bottom="auto",c.right="auto"};

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Window 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.apis.element.setPosition_CenterMiddle_FromWindow__NMinus=function(t){var e=window.screen.width,i=window.screen.height,o=t.clientWidth,n=t.clientHeight,d=o/2,l=n/2,w=e/2,r=i/2,a=t.style,h=w-d;h>0?a.left=h+"px":a.left="auto";var s=r-l;s>0?a.top=s+"px":a.top="auto",a.bottom="auto",a.right="auto"};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} bottom
 */
window.apis.element.setPosition_LeftBottom=function(t,o,e){var i=t.style;i.bottom=e+"px",i.left=o+"px",i.right="",i.top="",window.apis.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} top
 */
window.apis.element.setPosition_LeftTop=function(t,o,e){var i=t.style;i.bottom="",i.left=o+"px",i.right="",i.top=e+"px",window.apis.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} bottom
 */
window.apis.element.setPosition_RightBottom=function(t,o,i){var e=t.style;e.bottom=i+"px",e.left="",e.right=o+"px",e.top="",window.apis.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} top
 */
window.apis.element.setPosition_RightTop=function(t,o,i){var e=t.style;e.bottom="",e.left="",e.right=o+"px",e.top=i+"px",window.apis.console.objStyle_LeftTopRightBottom(t)};

/**
 * 대상 Element를 화면에 보여준다.
 * p(parentElement)를 넣으면 appendChild 한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {HTMLElement} p HTMLElement
 */
window.apis.element.show=function(e,n){e.style.display="",0==e.style.opacity&&(e.style.opacity=1),n?n.appendChild(e):e.parentElement&&e.parentElement.appendChild(e)};

/**
 * 대상 Element를 화면에 보여준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.apis.element.switchShowHide=function(i){var l=i.style;i.hasOwnProperty("__originalDisplay")||(i.__originalDisplay=l.display);try{i.__originalDisplay==l.display?l.display="none":l.display=i.__originalDisplay}catch(n){window.TtwLog.error("window.apis.element.switchShowHide Error : "+n)}};

//--------------------------------------------------window.apis.element.s***;

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.element;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;