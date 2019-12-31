//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.event.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.event;

window.apis.event = window.apis.event || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.event;


//----------------------------------------------------------------------------------------------------window.apis.event.a***;

/**
 * addEventListener 대신 사용하기 위한 용도
 * 무조건 동일 EventListener를 한번 removeEventListener을 실행 후 addEventListener을 한다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Function} fn
 */
window.apis.event.addEventBeforeRemove=function(e,n,t){e.removeEventListener(n,t,!1),e.addEventListener(n,t,!1,0,!0)};

//----------------------------------------------------------------------------------------------------window.apis.event.a***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__A***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.APPENDED_CHILD} evtDetail
 */
//window.apis.event.dispatchCE__APPENDED_CHILD=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.APPENDED_CHILD,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__A***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__C***;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.CHANGED_LOCALE} evtDetail
 */
window.apis.event.dispatchCE__CHANGED_LOCALE=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.CHANGED_LOCALE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.CREATED_CUSTOM_ELEMENT} evtDetail
 */
window.apis.event.dispatchCE__CREATED_CUSTOM_ELEMENT=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.CREATED_CUSTOM_ELEMENT,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.CREATED_EL} evtDetail
 */
window.apis.event.dispatchCE__CREATED_EL=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.CREATED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.CREATED_IMPORT_HTML_EL} evtDetail
 */
window.apis.event.dispatchCE__CREATED_IMPORT_HTML_EL=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.CREATED_IMPORT_HTML_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.CREATED_IMPORT_HTML_JS} evtDetail
 */
window.apis.event.dispatchCE__CREATED_IMPORT_HTML_JS=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.CREATED_IMPORT_HTML_JS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.CREATED_INCLUDE_HTML_EL} evtDetail
 */
window.apis.event.dispatchCE__CREATED_INCLUDE_HTML_EL=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.CREATED_INCLUDE_HTML_EL,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.CREATION_COMPLETE} evtDetail
 */
window.apis.event.dispatchCE__CREATION_COMPLETE=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.CREATION_COMPLETE,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__C***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__D***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.DATA_LOAD_COMPLETE} evtDetail
 */
window.apis.event.dispatchCE__DATA_LOAD_COMPLETE=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.DATA_LOAD_COMPLETE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.DATA_WRITE_CANCEL} evtDetail
 */
//window.apis.event.dispatchCE__DATA_WRITE_CANCEL=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.DATA_WRITE_CANCEL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.DATA_WRITE_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__DATA_WRITE_COMPLETE=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.DATA_WRITE_COMPLETE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.DISPOSED_EL} evtDetail
 */
window.apis.event.dispatchCE__DISPOSED_EL=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.DISPOSED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.DISPOSED_JS} evtDetail
 */
window.apis.event.dispatchCE__DISPOSED_JS=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.DISPOSED_JS,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__D***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__F***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PRIVATE_MULTI_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_COMPLETE=function(E,n){window.apis.event.dispatchCustomEvent(E,window.apis.event.FILE_DELETE_PRIVATE_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PRIVATE_MULTI_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_FAILUE=function(E,n){window.apis.event.dispatchCustomEvent(E,window.apis.event.FILE_DELETE_PRIVATE_MULTI_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_COMPLETE=function(E,n){window.apis.event.dispatchCustomEvent(E,window.apis.event.FILE_DELETE_PRIVATE_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PRIVATE_SINGLE_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_FAILUE=function(E,n){window.apis.event.dispatchCustomEvent(E,window.apis.event.FILE_DELETE_PRIVATE_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PUBLIC_MULTI_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_COMPLETE=function(E,n){window.apis.event.dispatchCustomEvent(E,window.apis.event.FILE_DELETE_PUBLIC_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PUBLIC_MULTI_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_FAILUE=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_DELETE_PUBLIC_MULTI_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_COMPLETE=function(E,n){window.apis.event.dispatchCustomEvent(E,window.apis.event.FILE_DELETE_PUBLIC_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_DELETE_PUBLIC_SINGLE_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_FAILUE=function(E,n){window.apis.event.dispatchCustomEvent(E,window.apis.event.FILE_DELETE_PUBLIC_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_COMPLETE=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_FAILUE=function(n,_){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PRIVATE_MULTI_FAILUE,_)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_FAILUE=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_COMPLETE=function(n,L){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_FAILUE=function(n,L){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PUBLIC_MULTI_FAILUE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE} evtDetail
 */
//window.apis.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_FAILUE=function(n,L){window.apis.event.dispatchCustomEvent(n,window.apis.event.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE,L)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__F***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__G***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.apis.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__G***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__H***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.HIDED_EL} evtDetail
 */
window.apis.event.dispatchCE__HIDED_EL=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.HIDED_EL,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__H***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__I***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.INITIALIZED} evtDetail
 */
window.apis.event.dispatchCE__INITIALIZED=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.INITIALIZED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.INITIALIZED_ALL_CHILDREN} evtDetail
 */
window.apis.event.dispatchCE__INITIALIZED_ALL_CHILDREN=function(n,I){window.apis.event.dispatchCustomEvent(n,window.apis.event.INITIALIZED_ALL_CHILDREN,I)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.INTERVAL_END} evtDetail
 */
window.apis.event.dispatchCE__INTERVAL_END=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.INTERVAL_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.INTERVAL_START} evtDetail
 */
window.apis.event.dispatchCE__INTERVAL_START=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.INTERVAL_START,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__I***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__L***;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.LIST_DATA_CHANGED} evtDetail
 */
window.apis.event.dispatchCE__LIST_DATA_CHANGED=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.LIST_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.LIST_SELECT_ITEM} evtDetail
 */
window.apis.event.dispatchCE__LIST_SELECT_ITEM=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.LIST_SELECT_ITEM,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.LIST_SELECTED_ITEM} evtDetail
 */
window.apis.event.dispatchCE__LIST_SELECTED_ITEM=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.LIST_SELECTED_ITEM,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.LOADED_CHILDREN} evtDetail
 */
window.apis.event.dispatchCE__LOADED_CHILDREN=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.LOADED_CHILDREN,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__L***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__N***;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.NAVIGATION_DATA_CHANGED} evtDetail
 */
window.apis.event.dispatchCE__NAVIGATION_DATA_CHANGED=function(n,A){window.apis.event.dispatchCustomEvent(n,window.apis.event.NAVIGATION_DATA_CHANGED,A)};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.NAVIGATION_ITEM_SELECTED} evtDetail
 */
window.apis.event.dispatchCE__NAVIGATION_ITEM_SELECTED=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.NAVIGATION_ITEM_SELECTED,E)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__N***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__R***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.REMOVED_CHILD} evtDetail
 */
window.apis.event.dispatchCE__REMOVED_CHILD=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.REMOVED_CHILD,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.REQUEST_DATA} evtDetail
 */
window.apis.event.dispatchCE__REQUEST_DATA=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.REQUEST_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.RESPONSE_DATA} evtDetail
 */
window.apis.event.dispatchCE__RESPONSE_DATA=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.RESPONSE_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.REMOVED_CHILD} evtDetail
 */
window.apis.event.dispatchCE__RESIZED_EL=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.RESIZED_EL,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__R***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__S***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.SEARCH_UI_INPUTED_TEXT} evtDetail
 */
//window.apis.event.dispatchCE__SEARCH_UI_INPUTED_TEXT=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.SEARCH_UI_INPUTED_TEXT,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.SEARCH_UI_SELECTED_TYPE} evtDetail
 */
//window.apis.event.dispatchCE__SEARCH_UI_SELECTED_TYPE=function(n,E){window.apis.event.dispatchCustomEvent(n,window.apis.event.SEARCH_UI_SELECTED_TYPE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.SHOWED_EL} evtDetail
 */
window.apis.event.dispatchCE__SHOWED_EL=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.SHOWED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.SIGN_IN_FAILURE} evtDetail
 */
window.apis.event.dispatchCE__SIGN_IN_FAILURE=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.SIGN_IN_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.SIGN_IN_SUCCESS} evtDetail
 */
window.apis.event.dispatchCE__SIGN_IN_SUCCESS=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.SIGN_IN_SUCCESS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.SIGN_OUT_FAILURE} evtDetail
 */
 window.apis.event.dispatchCE__SIGN_OUT_FAILURE=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.SIGN_OUT_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.SIGN_OUT_SUCCESS} evtDetail
 */
window.apis.event.dispatchCE__SIGN_OUT_SUCCESS=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.SIGN_OUT_SUCCESS,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__S***;


//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__T***;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.TABLE_DATA_CHANGED} evtDetail
 */
window.apis.event.dispatchCE__TABLE_DATA_CHANGED=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.TABLE_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.TIMEOUT_END} evtDetail
 */
 window.apis.event.dispatchCE__TIMEOUT_END=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.TIMEOUT_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.apis.eventDetail.TIMEOUT_START} evtDetail
 */
 window.apis.event.dispatchCE__TIMEOUT_START=function(n,i){window.apis.event.dispatchCustomEvent(n,window.apis.event.TIMEOUT_START,i)};

//----------------------------------------------------------------------------------------------------window.apis.event.dispatchCE__T***;


//----------------------------------------------------------------------------------------------------window.apis.event.d***;

/**
 * CustomEvent를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Obejct} evtDetail
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.apis.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.apis.event.dispatchEvent( window.document, "asd" );
 *
 * window.apis.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.apis.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
//window.apis.event.dispatchCustomEvent=function(t,n,o){window.TtwLog.info(t),window.TtwLog.info("evtType : "+n),window.TtwLog.info("evtDetail : "+o),SUtilCustomEvent.dispatchCustomEvent(t,n,o)};
window.apis.event.dispatchCustomEvent=function(t,n,o){SUtilCustomEvent.dispatchCustomEvent(t,n,o)};

/**
 * Event를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.apis.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.apis.event.dispatchEvent( window.document, "asd" );
 *
 * window.apis.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.apis.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
window.apis.event.dispatchEvent=function(n,t){window.TtwLog.info(n),window.TtwLog.info("evtType : "+t),SUtilCustomEvent.dispatchEvent(n,t)};

//----------------------------------------------------------------------------------------------------window.apis.event.d***;


//----------------------------------------------------------------------------------------------------window.apis.event.g***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.apis.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.apis.event.g***;


//----------------------------------------------------------------------------------------------------window.apis.event.r***;

/**
 * HTMLElement의 Custom Property에 존재하는 키값 EventListener를 removeEventListener 후 Key & Value도 파괴 시키는 함수
 * @function
 * @param {HTMLElement} el HTMLElement
 * @param {String} evtType event type
 * @param {String} key el[ key ]의 Value는 무조건 EventListener에 해당하는 Function 이여야 한다.
 * @example
 * <code>
	var el = window.document.getElementById( "test" );
		el.__evt_mClick = function( e ){ console.log( e.type ); };
	window.apis.event.removeEvent_TargetAndKey( el, "click", "__evt_mClick" );
 * </code>
 */
window.apis.event.removeEvent_TargetAndKey=function(e,n,t){e.removeEventListener(n,e[t],!1),e[t]=null,delete e[t]};

//----------------------------------------------------------------------------------------------------window.apis.event.r***;


//----------------------------------------------------------------------------------------------------window.apis.event.s***;

/**
 * 이벤트 버블링을 중단 시킨다.
 * @function
 * @param {Event|***Event} e
 */
window.apis.event.stopEvent = function( e ){ try{ e.stopImmediatePropagation(); e.stopPropagation(); }catch(er){} };
//----------------------------------------------------------------------------------------------------window.apis.event.s***;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;