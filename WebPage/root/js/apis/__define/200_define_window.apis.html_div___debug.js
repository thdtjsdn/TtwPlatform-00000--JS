//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.html_div___debug.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.html_div;

//window.apis.html_div = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.html_div;


//----------------------------------------------------------------------------------------------------window.apis.html_div.a***;

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.apis.html_div.apply_child_set_data_by_classname = function( div, a )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.apis.html_div.apply_child_set_data_by_classname():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var $f3 = window.apis.element.getElementsByClassName;
	var arr_length = a.length;

	var parentDiv = div.parentNode;
	var div_class_name = div.className;

	var i = $f3( parentDiv, div_class_name ).length;
	for( ; i > 0; i-- ) parentDiv.removeChild( parentDiv.childNodes[ i ] );

	for( var i = 0; i < arr_length; i++ )
	{
		var new_div = document.createElement( "div" );
			new_div.innerHTML = div.__originalInnerHTML;
			new_div.className = div_class_name;

		window.apis.el_input.setInputValueAttributeFromClassNameDataObject( new_div, a[ i ] );

		new_div.setAttribute( "item_data", JSON.stringify( a[ i ] ) );
		parentDiv.appendChild( new_div );
		new_div = null;
	}

	window.JamesLog.timeStamp( "---- [ E ] - window.apis.html_div.apply_child_set_data_by_classname():{HTMLElement}----------return div;" );
	return parentDiv;
};

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.apis.html_div.apply_child_set_data_by_classname_include_other_child = function( div, a , classname )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.apis.html_div.apply_child_set_data_by_classname_include_other_child():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var arr_length = a.length;

	var r = "";

	for( var i = 0; i < arr_length; i++ )
	{
		window.apis.el_input.setInputValueAttributeFromClassNameDataObject( div, a[ i ] );
		if( a[ i ][ classname ].length > 0 )
		{
			var child = window.apis.element.getElementByClassName( div, classname );
				child.innerHTML = window.apis.html_div.apply_child_set_data_by_classname( child, a[ i ][ classname ] ).innerHTML;
		}
		r += div.innerHTML;
		div.innerHTML = div.__originalInnerHTML;
	}

	//console.log( r );
	if( r ) div.innerHTML = r;

	window.JamesLog.timeStamp( "---- [ E ] - window.apis.html_div.apply_child_set_data_by_classname_include_other_child():{HTMLElement}----------return div;" );
	return div;
};

//----------------------------------------------------------------------------------------------------window.apis.html_div.a***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;