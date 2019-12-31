//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/element/window.apis.element.injectValuesForListItem.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * element에 Data 여러개를 "list_item_values" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 * @param {Array|Object|*} arguments[ 2 ] 이상부터 data와 같은 구조를 가지고 있어야 한다.
 */
window.apis.element.injectValuesForListItem = function( t, data )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.apis.element.injectValuesForListItem():void----------" );

	t.list_item_value = data;
	t.list_item_values = [];

	var i=1, iLen=agruments.length;
	for( ; i<iLen; ++i ) t.list_item_values.push( arguments[ i ] );

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.apis.element.injectValuesForListItem():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;