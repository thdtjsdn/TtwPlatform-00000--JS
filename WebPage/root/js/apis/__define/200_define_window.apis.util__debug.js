//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.util__debug.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.util;

//window.apis.util = {};

//--------------------------------------------------window.apis.util.d***;

window.apis.util.dateDifference_object = function( date_obj1, date_obj2 )
{
	window.b2link_ui.message.error( "window.apis.util.dateDifference_object -> window.apis.date.dateDifference_object 교체 바람" );
	return window.apis.date.dateDifference_object( date_obj1, date_obj2 );
};

window.apis.util.dateFormatFromDateArray = function( d )
{
	window.b2link_ui.message.error( "window.apis.util.dateFormatFromDateArray -> window.apis.date.dateFormatFromDateArray 교체 바람" );
	return window.apis.date.dateFormatFromDateArray( d );
};

window.apis.util.dateFormatFromDateObject = function( d )
{
	window.b2link_ui.message.error( "window.apis.util.dateFormatFromDateObject -> window.apis.date.dateFormatFromDateObject 교체 바람" );
	return window.apis.date.dateFormatFromDateObject( d );
};

window.apis.util.dateGetObjectDateFromDateString_Dash = function( dateString )
{
	window.b2link_ui.message.error( "window.apis.util.dateGetObjectDateFromDateString_Dash -> window.apis.date.getObjectDateFromDateString_Dash 교체 바람" );
	return window.apis.date.getObjectDateFromDateString_Dash( dateString );
};

//--------------------------------------------------window.apis.util.d***;


//--------------------------------------------------window.apis.util.f***;

/**
 * String format
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 * @author  cpark
 *
 * -- Usage
 * !!! {0} = {#IDX_OF_ARRAY}
 *
 * var str = "http://localhost?key0={0}&key1={1}&key2={2}&key3={0}";
 * var values = [ "val0", 111, "val2"];
 * var str = window.apis.util.format(str, values);
 *
 * result : http://localhost?key0=val0&key1=111&key2=val2&key3=val0
 */
window.apis.util.format = function( str, values )
{
	var formatted = str;
	for( var i=0; i<values.length; i++ )
	{
		var regexp = new RegExp( '\\{' + i + '\\}', 'gi' );
		formatted = formatted.replace( regexp, values[ i ] );
	}
	return formatted;
};

//--------------------------------------------------window.apis.util.f***;


//--------------------------------------------------window.apis.util.t***;

/**
 * trim
 * @function
 * @param {String} s
 * @return {String}
 * @author cpark
 */
(function(){
	var _reg0 = /(^\s*)|(\s*$)/gi;
	window.apis.util.trim = function( s ){ return s.replace( _reg0, "" ); };
})();

//--------------------------------------------------window.apis.util.t***;


//----------------------------------------------------------------------------------------------------[ E ] - window.apis.util;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;