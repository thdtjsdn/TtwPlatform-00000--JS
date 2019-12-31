//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--File/service_file/single_sync/window.service_file.single_sync.upload_readAsArrayBuffer.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * ArrayBuffer 타입의 파일 데이터를 업로드 요청하는 서비스
 * @function
 * @param {Object} d
 * <code>
	{
		_storeItemKey : ""
		, id : ""
		, fileNm : ""
		, offset :
		, total_offset :
		, totalBytes :

		, requestHeaders : { Content-type : "application/x-www-form-urlencoded" }
		, xhr : {XMLHTTPRequest}
	}
 * </code>
 * @param {Function} cbFunction function( result ){}
 */
window.service_file.single_sync.upload_readAsArrayBuffer = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] -window.service_file.single_sync.upload_readAsArrayBuffer():void----------" );

	//Target Object;
	var to = d.target;

	var url = window.apis.url.getServerURLByServers( window.apis.STATIC.CONFIG.URL.SCODE + "_APIServer" ) + "/file/single_sync/upload_readAsArrayBuffer?"
		+ "_storeItemKey=" + to._storeItemKey
		+ "&fileNm=" + to.file.name
		+ "&id=" + to.id
		+ "&offset=" + to.offset_count
		+ "&total_offset=" + to.total_offset
		+ "&totalBytes=" + to.file.size;

	//POST 방식의 XMLHTTPRequest 요청 XMLHTTPRequest 객체를 재사용한다.;
	window.b2link_service.common._fn_req_POST__ArrayBuffer__Ref( to.xhr, url, d.arrayBuffer, to.requestHeaders, cbFunction );

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_file.single_sync.upload_readAsArrayBuffer():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;