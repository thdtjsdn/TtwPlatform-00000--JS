//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/date/window.apis.date.getDateObjectFromInputsObject.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * HTMLInputElement Object에서 Element를 Element.value를 추출하여 동일 구조의 Object를 반환한다.
 * @function
 * @param {Object} d { "y" : {HTMLInputElement}, "m" : {HTMLInputElement}, "d" : {HTMLInputElement}, "ho" : {HTMLInputElement}, "mi" : {HTMLInputElement}, "se" : {HTMLInputElement} }
 * @return {Object} { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
 */
window.apis.date.getDateObjectFromInputsObject = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.date.getDateObjectFromInputsObject():{Object}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.date.getDateObjectFromInputsObject():{Object}----------return {}; );
	return {
		y : d.y.value
		, m : d.m.value
		, d : d.d.value
		, ho : d.ho.value
		, mi : d.mi.value
		, se : d.se.value
		//, mil : d.mil.value
	};
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;