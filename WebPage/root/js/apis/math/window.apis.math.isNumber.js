//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/math/window.apis.math.isNumber.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.apis.math.isNumber = function( n )
{
	//window.Rh2Log.timeStamp( "---- [ S ] - window.apis.math.isNumber():{Boolean}----------" );

	if( typeof( n ) == "string" )
	{
		n -= 0;

		if( isNaN( n ) ) return false;
		return true;
	}

	if( typeof( n ) == "number" )
	{
		return true;
	}

	//window.Rh2Log.timeStamp( "---- [ E ] - window.apis.math.isNumber():{Boolean}----------" );

	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;