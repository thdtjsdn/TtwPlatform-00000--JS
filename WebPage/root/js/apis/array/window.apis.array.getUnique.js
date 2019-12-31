//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/array/window.apis.array.getUnique.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Array( 1차원배열 ) 중복 요소 제거
 * @function
 * @param {Array} a [ "감", "사과", "사과" ]
 * @return {Array} r [ "감", "사과" ]
 * @example
 * <code>
	 window.apis.array.getUnique( [ "감", "사과", "사과" ] );
 * </code>
 */
window.apis.array.getUnique = function( a )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.apis.array.getUnique():{Array}----------" );

	var r = [];
	var temp = {};
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var io = a[ i ];
		if( temp.hasOwnProperty( io ) ) continue;
		r.push( io );
		temp[ io ] = io;
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.apis.array.getUnique():{Array}----------return r;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
