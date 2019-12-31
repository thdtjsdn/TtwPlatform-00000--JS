//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/common/window.apis_service.common._checkSessionAuth__ErrorMessage.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.apis_service.common._checkSessionAuth__ErrorMessage = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis_service.common._checkSessionAuth__ErrorMessage():void----------" );

	window.HykLog.error( "시스템 기능 사용 권한 오류" );
	window.HykLog.error( JSON.stringify( result ) );
	window.HykLog.error( "당신은 위 권한이 없습니다. 필요시 공식적인 절차로 관리자에게 요청 바랍니다." );

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis_service.common._checkSessionAuth__ErrorMessage():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;