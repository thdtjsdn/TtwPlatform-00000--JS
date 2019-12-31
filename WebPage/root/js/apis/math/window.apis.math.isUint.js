//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/math/window.apis.math.isUint.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.apis.math.isUint = function( n )
{
	//window.Rh2Log.timeStamp( "---- [ S ] - window.apis.math.isUint():{Boolean}----------" );

	if( typeof( n ) == "string" || typeof( n ) == "number" )
	{
		n += "";

		if( isNaN( n ) ) return false;
		else
		{
			if( n.indexOf( "." ) > - 1 ) return false;
			else
			{
				if( n < 0 ) return false;
				return true;
			}
		}
	}

	//window.Rh2Log.timeStamp( "---- [ E ] - window.apis.math.isUint():{Boolean}----------" );

	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;