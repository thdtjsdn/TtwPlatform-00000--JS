//----------------------------------------------------------------------------------------------------;
var fileNm = "js/apis_ui/common/window.apis_ui.common._checkSessionAuth__ErrorMessage.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * @property {Object}
	 */
	var _queryCRUDStatusLabels = {
		cn : {
		 	"_c" : "쓰기"
			, "_r" : "읽기"
			, "_u" : "수정"
			, "_d" : "삭제"
		}
		, kr : {
			"_c" : "쓰기"
			, "_r" : "읽기"
			, "_u" : "수정"
			, "_d" : "삭제"
		}
		, us : {
		 	"_c" : "Create"
			, "_r" : "Read"
			, "_u" : "Update"
			, "_d" : "Delete"
		}
	};

	/**
	 * @function
	 * @param {*} result
	 */
	window.apis_ui.common._checkSessionAuth__ErrorMessage = function( result )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.apis_ui.common._checkSessionAuth__ErrorMessage():void----------" );

		var rd = result.d;

		var nm_db_col = rd.nm_db + "." + rd.nm_col;
		var nm_db_col_crud = nm_db_col + "." + rd.queryCRUDStatus;

		/*/
		window.apis_ui.message.error( JSON.stringify( result ) );
		//*/
		//TODO : : 다국어 적용
		window.apis_ui.message.error( nm_db_col_crud + " 권한이 없습니다." );
		//*/

		//LOCALE에 맞는 Label Object 가져오기;
		var o = _queryCRUDStatusLabels[ window.b2link.STATIC.CONFIG.URL.UI.LOCALE ];

		//사용자에게 요청을 확인하는 메세지창 띄우기;
		window.apis_ui.message.confirm( nm_db_col + "</br>"
				+ o[ rd.queryCRUDStatus ]
				+ " 권한이 없습니다.</br>"
				+ "권한 요청을 하시겠습니까?</br>"
			, function( flag ){
				if( !flag ) return;

				var _url = window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/authority/authority_request/add?";

				//SessionServer에 권한 부여를 요청하기;
				window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( result )
					, function( r ){
						var m = "";
						if( r.r == 0 ) m = "권한 요청을 성공했습니다.";
						else if( r.r == 3 ) m = "동일한 권한 요청이 존재합니다.";
						else m = "권한 요청을 실패 했습니다.";

						window.apis_ui.message.alert( m );
					}
				);
			}
		);

		window.TtwLog.timeStamp( "---- [ E ] - window.apis_ui.common._checkSessionAuth__ErrorMessage():void----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
