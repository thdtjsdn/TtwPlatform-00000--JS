//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/history/window.apis.history.pushState.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * State 추가
 * @function
 * @param {Object} stateObj
	pushState()에 의해 생성된 새로운 히스토리 항을 포함하고 있는 자바스크립트 객체입니다.
	사용자가 새로운 상태로 이동할 때 마다, popstate 이벤트가 발생하고, 이 이벤트의 state 속성은 히스토리의 state객체 사본을 가집니다.
	state 객체는 직렬화할 수 있는 어떤 것도 될 수 있습니다.
	Firefox는 state 객체들을 사용자의 디스크에 저장하며, 그 state 객체들은 사용자가 브라우저를 재시작 하여도 다시 사용할 수 있습니다.
	state 객체의 직렬화 결과 크기는 최대 640k로 제한됩니다.
	만약 사용자가 더 큰 직렬 표현 데이타를 pushState()로 보낸다면, 메소드는 예외를 발생시킵니다.
	만약 사용자가 이 보다 더 큰 공간이 필요하면 sessionStorage나 localStorage를 사용하십시오.
 *
 * <code>
	{
		//시스템 코드;
		SCODE : "SYS0000"

		//window.b2link_ui.***.*** 등의 API;
		, api : ""

		//api에 주입될 Parameter;
		, params : ""
	}
 * </code>
 *
 * @param {String} title
	Firefox 는 현재 이 변수를 무시합니다.
	나중에 사용될 수도 있기 때문에 빈 문자열을 지정해 놓는 것은 안전합니다.
	빈 문자열 대신 이동하고자 하는 state 마다 짧은 명칭을 부여하는 것도 좋습니다.
 *
 * @param {String} url
 	새로운 히스토리 엔트리의 URL을 지정합니다.
	pushState() 호출 이후에는 브라우저가 이 URL을 로딩하지 않는 것을 명심하시기 바랍니다.
	하지만 아마 나중에도 사용될 수 있습니다, 예를 들면, 사용자가 브라우저를 다시 시작했을 때처럼 말이죠.
	새롭게 할당되는 URL은 현재의 URL에 기준하기 때문에, 절대 경로일 필요는 없습니다.
	새로운 URL은 기존의 URL을 기준으로 해석됩니다.
	새로운 URL은 현재 URL에서 유추될 수 없다면 pushState()는 예외를 발생시킵니다.
	이 변수는 선택 사항으로, 명시되지 않는다면, 현재 URL로 지정됩니다.
 *
 * @example
 * <code>
	window.apis.history.pushState( {a:0}, "asd0", "asd0.html" );
	window.apis.history.pushState( {a:1}, "asd1", "asd1.html" );

	window.apis.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"1"}, "asd0", "asd0/asd/asd" );
	window.apis.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"1"}, "asd1", "asd1/asd/asd" );

	window.apis.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"1"}, "asd0", "" );
	window.apis.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"2"}, "asd1", "" );
 * </code>
 */
window.apis.history.pushState = function( stateObj, title, url )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.history.pushState():void----------" );

	var b = true;
	if( !stateObj.SCODE ) b = false;
	if( !stateObj.api ) b = false;
	if( !stateObj.params ) b = false;

	if( !b )
	{
		window.TtwLog.error( "[ ERROR ] - B2Ker기반의 State Object에는 'SCODE', 'api', 'params' 프로퍼티가 필수 값이다." );
		return;
	}

	return window.history.pushState( stateObj, title, url );

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.history.pushState():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;