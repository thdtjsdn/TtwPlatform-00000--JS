//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/date/window.apis.date.isDateFuture.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * There is a little time differences in same date between two Date() Object,
 * To compare just dates, Set Hours, Minites, Seconds as 0
 * Check if {{date1}} is past than {{date2}}
 *
 * @function
 * @return {Boolean}
 */
window.apis.date.isDateFuture = function( date1, date2 )
{
	window.cparkLog.timeStamp( "---- [ S ] - window.apis.date.isDateFuture():{String}----------" );

	var _d1 = new Date( date1.y, date1.m, date1.d, 0, 0, 0 );
	var _d2 = new Date( date2.y, date2.m, date2.d, 0, 0, 0 );

	var timeDifference = _d1.getTime() - _d2.getTime();
	if( timeDifference >= 0 ) return true;
	else return false;

	window.cparkLog.timeStamp( "---- [ E ] - window.apis.date.isDateFuture():{String}----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;