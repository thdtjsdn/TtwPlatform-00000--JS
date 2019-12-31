//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.eventDetail.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.eventDetail;

window.apis.eventDetail = window.apis.eventDetail || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.eventDetail;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.A;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.APPENDED_CHILD=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.A;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.C;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @return null
 */
 window.apis.eventDetail.CHANGED_LOCALE=function(){return null};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.CREATED_CUSTOM_ELEMENT=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.CREATED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
 window.apis.eventDetail.CREATED_IMPORT_HTML_EL=function(){return{}};

 /**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.CREATED_IMPORT_HTML_JS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.CREATED_INCLUDE_HTML_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.CREATION_COMPLETE=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.C;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.D;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
//window.apis.eventDetail.DATA_WRITE_CANCEL=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.apis.eventDetail.DATA_WRITE_CANCEL Error : event Values가 부족합니다."),e};
window.apis.eventDetail.DATA_WRITE_CANCEL=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
window.apis.eventDetail.DATA_WRITE_COMPLETE=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.DISPOSED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.DISPOSED_JS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.D;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.H;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.HIDED_EL=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.H;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.I;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.INITIALIZED=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.INITIALIZED_ALL_CHILDREN=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.INTERVAL_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.INTERVAL_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.I;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.L;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.apis.eventDetail.LIST_DATA_CHANGED=function(e){return e.firstItem&&e.lastItem||window.Rh2Log.error("window.apis.eventDetail.LIST_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.LIST_SELECT_ITEM=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.LIST_SELECTED_ITEM=function(e){if(!e.selectedItem)throw global.TtwLog.error("[ ERROR ] - selectedItem 키값이 존재해야한다."),new Error("[ ERROR ] - selectedItem 키값이 존재해야한다.");return e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.LOADED_CHILDREN=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.L;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.N;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.apis.eventDetail.NAVIGATION_DATA_CHANGED=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.apis.eventDetail.NAVIGATION_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.apis.eventDetail.NAVIGATION_ITEM_SELECTED=function(n){return n};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.N;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.R;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.REMOVED_CHILD=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.REQUEST_DATA=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.RESIZED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.RESPONSE_DATA=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.R;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.S;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"searchKeyword" : ""
 *	, "searchType" : ""
 * }
 * </code>
 */
window.apis.eventDetail.SEARCH_UI_INPUTED_TEXT=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{

	}
 * </code>
 */
window.apis.eventDetail.SEARCH_UI_SELECTED_TYPE = function( d )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.apis.eventDetail.SEARCH_UI_SELECTED_TYPE():void----------" );

	if( !d.selectedItem )
	{
		//*///키값을 강제하는 방법
		global.TtwLog.error( "[ ERROR ] - selectedItem 키값이 존재해야한다." );
		throw new Error( "[ ERROR ] - selectedItem 키값이 존재해야한다." );
		debugger;
		/*/
		//보편적인 방법;
		return { selectedItem : d };
		//*/
	}

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.apis.eventDetail.SEARCH_UI_SELECTED_TYPE():void----------" );

	return d;
};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.SHOWED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.SIGN_IN_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.SIGN_IN_SUCCESS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.SIGN_OUT_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.SIGN_OUT_SUCCESS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.S;


//----------------------------------------------------------------------------------------------------window.apis.eventDetail.T;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.apis.eventDetail.TABLE_DATA_CHANGED=function(e){return e.hasOwnProperty("firstItem")&&e.hasOwnProperty("lastItem")||window.TtwLog.error("window.apis.eventDetail.TABLE_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.TIMEOUT_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.apis.eventDetail.TIMEOUT_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.apis.eventDetail.T;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;