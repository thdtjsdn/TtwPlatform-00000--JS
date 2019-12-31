//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis_ui/__define/200_define_window.apis_ui.message.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis_ui.message;

window.apis_ui.message = window.apis_ui.message || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis_ui.message;

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Function} calllback function( result ){}
 * @return {HTMLElement}
 * @example
 * <code>
	window.apis_ui.message.alert( "경고", null, function( result ){ console.log( result ); } );

	window.apis_ui.message.alert({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"
		, text : "내용 메세지"
		, callback : function( result ){ console.log( result ); }
	}, null );

	window.apis_ui.message.alert({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"

		//, text : "내용 메세지"
		, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )

		, type : null
		, callback : function( result ){ console.log( result ); }
	});
 * </code>
 */
window.apis_ui.message.alert = TtwMessageBox.alert;

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Function} calllback function( result ){}
 * @return {HTMLElement}
 * @example
 * <code>
	window.apis_ui.message.confirm( "확인", null, function( result ){ console.log( result ); } );

	window.apis_ui.message.confirm({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"
		, text : "내용 메세지"

		, type : null

		, callback : function( result ){ console.log( result ); }
	});

	window.apis_ui.message.confirm({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"

		//, text : "내용 메세지"
		, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )
	}, null, function( result ){ console.log( result ); } );
 * </code>
 */
window.apis_ui.message.confirm = TtwMessageBox.confirm;

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.apis_ui.message.error( "모달 메세지를 띄우겠다" );
	window.apis_ui.message.modalbox.hide( o );
 * </code>
 */
window.apis_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.apis_ui.message.message( s ); };

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Number} time 1000이 1초
 * @return {HTMLElement}
 * @example
 * <code>
	window.apis_ui.message.message( "잠시 보이고 사라질 메세지" );

	window.apis_ui.message.message( "10초 보이고 사라질 메세지", null, 10000 );
 * </code>
 */
window.apis_ui.message.message = TtwMessageBox.message;

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.apis_ui.message.modalbox( "모달 메세지를 띄우겠다" );
	window.apis_ui.message.modalbox.hide( o );
 * </code>
 */
window.apis_ui.message.modalbox = TtwMessageBox.modalbox;

//----------------------------------------------------------------------------------------------------;

/**
 * 메세지 박스 API를 전부 활성화 시킨다.
 * @function
 */
window.apis_ui.message.active = function()
{
	window.apis_ui.message.alert = TtwMessageBox.alert;
	window.apis_ui.message.confirm = TtwMessageBox.confirm;
	window.apis_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.apis_ui.message.message( s ); };
	window.apis_ui.message.message = TtwMessageBox.message;
	window.apis_ui.message.modalbox = TtwMessageBox.modalbox;
};

/**
 * 메세지 박스 작동 해제 소스
 * @function
 */
window.apis_ui.message.deactive = function(){ window.apis_ui.message.alert = window.apis_ui.message.confirm = window.apis_ui.message.error = window.apis_ui.message.message = window.apis_ui.message.modalbox = function(){}; };

//--------------------------------------------------SYS0030(Brand Portal);

/**
 * 메세지 박스 API를 활성화 시킨다.
 * window.apis_ui.message.alert 만 활성화 시킨다.
 * SYS0030(BrandPortal)에서 사용한다.
 * @function
 */
window.apis_ui.message.active.BrandPortal = function()
{
	window.apis_ui.message.alert = TtwMessageBox.alert;
	//window.apis_ui.message.confirm = TtwMessageBox.confirm;
	//window.apis_ui.message.error = function( s ){ window.TtwLog.error( s ); return window.apis_ui.message.message( s ); };
	//window.apis_ui.message.message = TtwMessageBox.message;
	//window.apis_ui.message.modalbox = TtwMessageBox.modalbox;
};
window.apis_ui.message.active.SYS0030 = window.apis_ui.message.active.BrandPortal;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;