//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/date/window.apis.date.getISOStringFromDateObject.new.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Object 타입의 Date를 ISOString 형식의 Date로 바꿔서 반환한다.
 * @function
 * @param {Object} d { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
 * @return {String} 2017-01-09T08:18:19.000Z
 */
window.apis.date.getISOStringFromDateObject.new = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.date.getISOStringFromDateObject.new():{String}----------" );

	var _date = new Date( d.y + "." + d.m + "." + d.d + " " + d.ho + ":" + d.mi + ":" + d.se );

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.date.getISOStringFromDateObject.new():{String}----------return _date.toISOString();" );
	return _date.toISOString();
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;