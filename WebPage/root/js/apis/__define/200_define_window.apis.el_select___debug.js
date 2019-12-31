//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.el_select___debug.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.el_select;

window.apis.el_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.el_select;


//----------------------------------------------------------------------------------------------------window.apis.el_select.p;

/**
 * <select> Element의 children을 갱신한다.
 * <select></select> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <option value="1">송선우0</option>, <option value="2">송선우1</??> 형태로 갱신한다.
 *
 * @function
 * @param {HTMLElement} selector
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @param {Object} options { key : {String}, value : {String}, add_select_text_yn : {Boolean}, select_text : {String}}
 * <code>
	{
		"key"  : option 의 value 에 바인딩 될 값.
		, "value" : option의 innerHTML 에 바인딩 될 값.
		, "add_select_text_yn" : 추가로 select 에 첫 행을 넣을 지 여부.
		, "select_text" : 추가로 slelect 의 첫 행에 넣을 문자열.
	}
 * </code>
 *
 * @return {HTMLElement}
 */
window.apis.el_select.push_children = function( selector, a , options )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.apis.el_selector.push_children():{HTMLElement}----------" );

	if( 0 == a.length )
	{
		selector.innerHTML = "";
		return selector;
	}

	var key = "";
	var value = "";
	var add_select_text_yn = 0;
	var select_text = "";

	if( options.hasOwnProperty( "key" ) ) key = options.key;
	if( options.hasOwnProperty( "value" ) ) value = options.value;
	if( options.hasOwnProperty( "add_select_text_yn" ) ) add_select_text_yn = options.add_select_text_yn;
	if( options.hasOwnProperty( "select_text" ) ) select_text = options.select_text;

	if( !key || !value )
	{
		window.b2link_ui.message.error( "window.apis.el_select.push_children( selector, a , key, value, add_select_text_yn, select_text )" );
		window.b2link_ui.message.error( "key 혹은 value 가 null 입니다." );
		return;
	}

	if( !select_text ) select_text = "-- Select --";

	if( add_select_text_yn )
	{
		var opt = document.createElement( "option" );
			opt.value = "";
			opt.innerHTML = select_text;
		selector.appendChild( opt );
	}

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var opt = document.createElement( "option" );
		var obj = a[ i ];
		opt.value = obj[ key ];
		opt.innerHTML = obj[ value ];
		selector.appendChild( opt );
		obj = null;
	}

	window.JamesLog.timeStamp( "---- [ E ] - window.apis.el_selector.push_children():{HTMLElement}----------return selector;" );
	return selector;
};

//----------------------------------------------------------------------------------------------------window.apis.el_select.p;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;