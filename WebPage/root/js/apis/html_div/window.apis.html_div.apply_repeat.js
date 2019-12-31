//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis/html_div/window.apis.html_div.apply_repeat.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//확인하기 - 20171117 - 송선우 - window.apis.html_div.apply_child과의 차이점 확인 하기;
/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.apis.html_div.apply_repeat = function( div, a )
{
	window.TtwLog.warn( "window.apis.html_div.apply_repeat -> window.apis.html_div.apply_child로 교체하기 동일 기능으로 판단됨" );
	return window.apis.html_div.apply_child( div, a );
}
//window.apis.html_div.apply_repeat = function( div, arr )
//{
//	window.KaiLog.timeStamp( "---- [ S ] - window.apis.html_div.apply_repeat():{HTMLElement}----------" );
//
//	if ( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;
//
//	if ( 0 === arr.length ) { div.innerHTML = ""; return div; }
//
//	var r = "";
//	//수정 - 20171117 - 송선우;
//	/*/
//	var i=0, iLen=arr.length;
//	for( ; i<iLen; ++i )
//	{
//		r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, [ arr[ i ] ] );
//	}
//	/*/
//	r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, arr );
//	//*/
//
//	if( r ) div.innerHTML = r;
//
//	window.KaiLog.timeStamp( "---- [ E ] - window.apis.html_div.apply_repeat():{HTMLElement}----------return div;" );
//	return div;
//};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;