//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/date/window.apis.date.getISOStringFromDateObject.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();

	/**
	 * Object 타입의 Date를 ISOString 형식의 Date로 바꿔서 반환한다.
	 * @function
	 * @param {Object} d { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
	 * @return {String} 2017-01-09T08:18:19.000Z
	 */
	window.apis.date.getISOStringFromDateObject = function( d )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.apis.date.getISOStringFromDateObject():{String}----------" );

		_date.setYear( d.y );
		_date.setMonth( d.m - 1 );
		_date.setDate( d.d );
		_date.setHours( d.ho );
		_date.setMinutes( d.mi );
		_date.setSeconds( d.se );
		//_date.setMilliseconds( d.mil );

		//window.TtwLog.timeStamp( "---- [ E ] - window.apis.date.getISOStringFromDateObject():{String}----------return _date.toISOString();" );
		return _date.toISOString();
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;