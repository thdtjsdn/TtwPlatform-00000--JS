//----------------------------------------------------------------------------------------------------;
var fileNm = "js--File/b2link/__define/200_define_window.apis.fileReader.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis.fileReader;

window.apis.fileReader = window.apis.fileReader || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.fileReader;

window.apis.fileReader.CONST = window.apis.fileReader.CONST = {};

(function(){
	var _ = window.apis.fileReader.CONST;

	/**
	 *
	 */

	/**
	 * 대/저 용량 파일 업로드 1회 Request시 전송 보낼 파일 사이즈
	 * @property {Number}
	 * @usages window.apis.fileReader.single__ArrayBuffer
	 */
	var UPLOAD_CHUNK_SIZE = 1024 * 1024
		///  2;//500Kb;
		//*  1;//1Mb;
		*  2;//2Mb;
		//*  3;//3Mb;
		//*  4;//4Mb;
		//*  5;//5Mb;
		//*  6;//6Mb;
		//* 50;//50Mb;
	_.__defineGetter__( "UPLOAD_CHUNK_SIZE", function(){ return UPLOAD_CHUNK_SIZE; } );

	/**
	 *
	 */

})();

//----------------------------------------------------------------------------------------------------;


//--------------------------------------------------[ S ] - window.apis.fileReader.single__ArrayBuffer;
/**
 * @property {Object}
 * <code>
	{
		window.apis.fileReader.single__ArrayBuffer.addEvent : function( el_input, el_button, cbComplete ){}

		window.apis.fileReader.single__ArrayBuffer.removeEvent : function( el_input, el_button ){}
	}
 * </code>
 */
window.apis.fileReader.single__ArrayBuffer={},function(){var e={},n=function(e,n){var i=e.target,r=i.files[0];return t(r,n)},t=function(n,i){var r=Date.now();return e[r]||(e[r]={file:n,complete:i,date:r,id:n.name+"_"+r,offset_count:0,fileReader:new FileReader,requestHeaders:t._requestHeaders,xhr:new XMLHttpRequest}),r};t._requestHeaders={"Content-type":"application/x-www-form-urlencoded"};var i=function(n){var t=e[n];if(!n)return void window.TtwLog.error("[ ERROR ] - _readFileData Warning : storeItemKey가 있어야 한다.");if(!t)return void window.TtwLog.error("[ ERROR ] - _readFileData Warning : storeItemKey 값이 잘못 됨");if(!t.file)return void window.TtwLog.error("[ ERROR ] - File not exist");t._storeItemKey=n,t.chunkSize=window.apis.fileReader.CONST.UPLOAD_CHUNK_SIZE,t.offset=t.offset||0,t.total_offset=parseInt(t.file.size/t.chunkSize),t.blob=t.file.slice(t.offset,t.chunkSize+t.offset);var i=t.fileReader,o=function(e){i.removeEventListener("loadend",o,!1),t.offset+=i.result.byteLength,window.TtwLog.timeStamp("[ READ ] - File Upload - "+t.offset+"/"+t.file.size+" -- "+t.offset_count),r(i.result,n),t.blob=null};i.addEventListener("loadend",o,!1,0,!0),i.readAsArrayBuffer(t.blob)},r=function(n,t){var o=e[t];return t?e[t]?void window.service_file.single_sync.upload_readAsArrayBuffer({target:o,arrayBuffer:n},function(e){if(!window.apis.response.getResultStatus(e)){window.TtwLog.error("[ ERROR ] - File Upload - "+o.file.name);var n=window.smt_ui.message.error.modal(),a=n[1];return a.headerText="File upload Error",a.messageText=e.m,void window.TtwLog.timeStamp("--- [ E ] - _uploadFileBinary::res():void----------return;")}return 1==e.isEnd?(window.TtwLog.timeStamp("[ COMPLETE ] - File Upload - "+o.offset_count+"/"+o.total_offset),o.complete&&o.complete(),void r.dispose(t)):(window.TtwLog.timeStamp("[ UPLOADING ] - File Upload - "+o.offset_count+"/"+o.total_offset),++o.offset_count,void setTimeout(function(){i(t)},100))}):void window.TtwLog.warn("_uploadFileBinary Warning : storeItemKey 값이 잘못 됨"):void window.TtwLog.warn("_uploadFileBinary Warning : storeItemKey 있어야 한다.")};r.dispose=function(n){var t=e[n];t.file=null,t.fileReader=null,t.xhr=null,t={},e[n]=t=null,delete e[n]}

/**
 * @function
 * @param {HTMLElement} el_input type="file"인 <Input> Element
 * @param {HTMLElement} el_button
 * @param {Function} cbComplete 파일 업로드가 완료된 후 호출 되는 함수
 * <code>
 * </code>
 */
,window.apis.fileReader.single__ArrayBuffer.addEvent=function(e,t,r){window.TtwLog.timeStamp("----- [ S ] - window.apis.fileReader.single__ArrayBuffer.addEvent():void----------"),e.__evt_change=function(o){window.apis.event.removeEvent_TargetAndKey(e,"change","__evt_change");var a=n(o,r);t.__evt_mClick=function(e){window.apis.event.removeEvent_TargetAndKey(t,"click","__evt_mClick"),i(a)},t.addEventListener("click",t.__evt_mClick,!1,0,!0)},e.addEventListener("change",e.__evt_change,!1,0,!0),window.TtwLog.timeStamp("----- [ E ] - window.apis.fileReader.single__ArrayBuffer.addEvent():void----------")}

/**
 * @function
 * @param {HTMLElement} el_input
 * @param {HTMLElement} el_button
 * @example
 * <code>
 * </code>
 */
,window.apis.fileReader.single__ArrayBuffer.removeEvent=function(e,n){window.TtwLog.timeStamp("----- [ S ] - window.apis.fileReader.single__ArrayBuffer.removeEvent():void----------"),e.__evt_change&&window.apis.event.removeEvent_TargetAndKey(e,"change","__evt_change"),n.__evt_mClick&&window.apis.event.removeEvent_TargetAndKey(n,"click","__evt_mClick"),window.TtwLog.timeStamp("----- [ E ] - window.apis.fileReader.single__ArrayBuffer.removeEvent():void----------")}}();
//--------------------------------------------------[ E ] - window.apis.fileReader.single__ArrayBuffer;


//--------------------------------------------------[ S ] - window.apis.fileReader.single__DataURL;
/**
 * @property {Object}
 * <code>
	{
		window.apis.fileReader.single__ArrayBuffer.addEvent : function( el_input, el_button, cbComplete ){}

		window.apis.fileReader.single__ArrayBuffer.removeEvent : function( el_input, el_button ){}
	}
 * </code>
 */
window.apis.fileReader.single__DataURL={},function(){var e={},n=function(e,n){var t=e.target,o=t.files[0];return i(o,n)},i=function(n,t){var o=Date.now();return e[o]||(e[o]={file:n,complete:t,date:o,id:n.name+"_"+o,requestHeaders:i._requestHeaders}),o};i._requestHeaders={"Content-type":"application/x-www-form-urlencoded"};var t=function(n){var i=e[n];if(!n)return void window.TtwLog.error("[ ERROR ] - _readFileData Warning : storeItemKey가 있어야 한다.");if(!i)return void window.TtwLog.error("[ ERROR ] - _readFileData Warning : storeItemKey 값이 잘못 됨");if(!i.file)return void window.TtwLog.error("[ ERROR ] - File not exist");i.storeItemKey=n;var t=new FileReader,a=function(e){t.removeEventListener("loadend",a,!1);var i=t.result,r=i.substring(0,i.indexOf("base64,")+7),d=i.replace(r,"");o(d,n),t=null};t.addEventListener("loadend",a,!1,0,!0),t.readAsDataURL(i.file)},o=function(n,i){var t=e[i];return i?e[i]?void window.service_file.single_sync.upload_textAsDataURL({target:t,dataURL:n},function(e){if(!window.apis.response.getResultStatus(e)){window.TtwLog.error("[ ERROR ] - File Upload - "+t.file.name+" - "+t.offset_count+"/"+t.total_offset);var n=window.smt_ui.message.error.modal(),a=n[1];return a.headerText="File upload Error",a.messageText=e.m,void window.TtwLog.timeStamp("--- [ E ] - _uploadFile::res():void----------return;")}window.TtwLog.timeStamp("[ COMPLETE ] - File Upload - "+t.file.name),t.complete&&t.complete(),o.dispose(i)}):void window.TtwLog.warn("_uploadFile Warning : storeItemKey 값이 잘못 됨"):void window.TtwLog.warn("_uploadFile Warning : storeItemKey 있어야 한다.")};o.dispose=function(n){var i=e[n];i.file=null,e[n]=i=null,delete e[n]}

/**
 * @function
 * @param {HTMLElement} el_input type="file"인 <Input> Element
 * @param {HTMLElement} el_button
 * @param {Function} cbComplete 파일 업로드가 완료된 후 호출 되는 함수
 */
,window.apis.fileReader.single__DataURL.addEvent=function(i,o,a){window.TtwLog.timeStamp("----- [ S ] - window.apis.fileReader.single__DataURL.addEvent():void----------"),window.apis.fileReader.single__DataURL.removeEvent(i,o),i.__evt_change=function(i){var r=n(i,a),d=e[r];return d.file.size>2097152?(window.TtwLog.warn("[ WARNING ] - el_input.__evt_change - 2MB 이하 파일만 가능하다."),void window.apis.event.removeEvent_TargetAndKey(o,"click","__evt_mClick")):(o.__evt_mClick=function(e){window.apis.event.removeEvent_TargetAndKey(o,"click","__evt_mClick"),t(r)},void o.addEventListener("click",o.__evt_mClick,!1,0,!0))},i.addEventListener("change",i.__evt_change,!1,0,!0),window.TtwLog.timeStamp("----- [ E ] - window.apis.fileReader.single__DataURL.addEvent():void----------")}

/**
 * @function
 * @param {HTMLElement} el_input
 * @param {HTMLElement} el_button
 */
,window.apis.fileReader.single__DataURL.removeEvent=function(e,n){window.TtwLog.timeStamp("----- [ S ] - window.apis.fileReader.single__DataURL.removeEvent():void----------"),e.__evt_change&&window.apis.event.removeEvent_TargetAndKey(e,"change","__evt_change"),n.__evt_mClick&&window.apis.event.removeEvent_TargetAndKey(n,"click","__evt_mClick"),window.TtwLog.timeStamp("----- [ E ] - window.apis.fileReader.single__DataURL.removeEvent():void----------")}}();
//--------------------------------------------------[ E ] - window.apis.fileReader.single__DataURL;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;