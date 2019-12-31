//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/obj/window.apis.obj.copyStructure.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * d의 자료구조를 t에 복제 한다.
 * @function
 * @param {Object} t
 * @param {Object} d
 * @example
 * <code>
	var o0 = { a : 1, b : { c : { d : 55 }, asd : [ 1,2,3,4,5 ], ggg : [ { d : 5} ] }, bb : false, gg : "" };
	var o1 = {};

	window.apis.obj.copyStructure( o1, o0 );

	JSON.stringify( o1, null, "\t" );
 * </code>
 */
window.apis.obj.copyStructure = function( t, d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.obj.copyStructure():void----------" );

	var io;
	for( var s in d )
	{
		io = d[ s ];
		if( "object" == typeof io )
		{
			t[ s ] = {};
			window.apis.obj.copyStructure( t[ s ], io );
		}
		else t[ s ] = io;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.obj.copyStructure():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;