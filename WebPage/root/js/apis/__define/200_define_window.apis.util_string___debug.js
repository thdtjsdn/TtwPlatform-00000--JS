//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.util_string___debug.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.util_string;

//window.apis.util_string = window.apis.util_string || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.util_string;


//----------------------------------------------------------------------------------------------------window.apis.util_string.b***;

/**
 * {{xxx}} 형태의 문자열을 "" 로 변경
 * @function
 * @param {String} s string data
 * @return {String}
 */
window.apis.util_string.braceStringToEmpty = function( s )
{
	//window.KaiLog.timeStamp( "---- [ S ] - window.apis.util_string.braceStringToEmpty():{String}----------" );

	if( "string" == typeof s )
		if( -1 < s.search( "{{" ) )
		{
			//window.KaiLog.timeStamp( "---- [ E ] - window.apis.util_string.braceStringToEmpty():{String}----------return "";" );
			return "";
		}

	//window.KaiLog.timeStamp( "---- [ E ] - window.apis.util_string.braceStringToEmpty():{String}----------return s;" );
	return s;
};

//----------------------------------------------------------------------------------------------------window.apis.util_string.b***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;