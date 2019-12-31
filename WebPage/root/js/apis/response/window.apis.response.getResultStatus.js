//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/response/window.apis.response.getResultStatus.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _result_r = {
		0 : 1//OK;
		//, 1 : 1//InternalError - 사용안함;
		, 2 : 0//Bad Value;
		, 3 : 0//OBSOLETE_DuplicateKey;
		, 13 : 0//Unauthorized;
		, 18 : 0//AuthenticationFailed;
		, 24 : 0//LockTimeout;
		, 86 : 0//IndexKeySpecsConflict;

		, "B21001601" : 0//mid가 존재하지 않음;
		, "B21001602" : 0//비밀번호 인증 5회 이상 틀림;
		, "B21001603" : 0//password가 맞지 않음;
		, "B21001604" : 0//승인되지 않은 Authority Code;
	};

	var _fnStore = {
		0 : 0
		, 1 : 1
		, 18 : 0//AuthenticationFailed;
		, "false" : 0
		, "true" : 1

		, "result.r" : function( result ){
			return _result_r[ result.r ];
		}
	};

	/**
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	window.apis.response.getResultStatus = function( result )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.apis.response.getResultStatus():{*}----------" );
		//window.TtwLog.timeStamp( "Input result : " );
		//window.TtwLog.timeStamp( result );

		try
		{
			//----------result - 순수 에러코드 {uint} or {Boolean} 일시;
			if( _fnStore.hasOwnProperty( result ) )
			{
				var r = _fnStore[ result ];
				//window.TtwLog.timeStamp( "return r : " + r );
				//window.TtwLog.timeStamp( "---- [ E ] - window.apis.response.getResultStatus():{*}----------return r;" );
				return r;
			}


			//----------result가 {Object} 타입 일시;
			//MongoDB 표준 에러 코드를 준수해야한다;
			//{ r : NaN, m : "" };
			if( result.hasOwnProperty( "r" ) )
			{
				if( _fnStore.hasOwnProperty( "result.r" ) )
				{
					var r = _fnStore[ "result.r" ]( result );
					//window.TtwLog.timeStamp( "return r : " + r );
					//window.TtwLog.timeStamp( "---- [ E ] - window.apis.response.getResultStatus():{*}----------return r;" );
					return r;
				}
			}


			//----------result {Object} 타입 일시 - 일부 코드 파편화로 인한 result.state가 존재 할 시;
			//삭제하기 - 20170514 - 송선우 - 사용되는 모든 소스에서 제거하기;
			//확인하기 - 20171019 - 송선우 - 현재는 B2LiNK-B2Ker-Dev에서 전부 없어진 걸로 판단됨;
			//확인하기 - 20171019 - 송선우 - B2LiNK-BrandPortal-Dev에서는 원래 없는 걸로 판단됨;
			//{ state : NaN, ??? : ?? };
			if( result.hasOwnProperty( "state" ) )
			{
				var r = _fnStore[ result.state ];
				//window.TtwLog.timeStamp( "return r : " + r );
				//window.TtwLog.timeStamp( "---- [ E ] - window.apis.response.getResultStatus():{*}----------return r;" );
				return r;
			}

			if( "string" == typeof( result ) ) if( -1 != result.indexOf( "404 Not Found" ) ) return 0;

		}
		catch( er )
		{
			window.TtwLog.error( "window.apis.response.getResultStatus Error : " + er );
		}

		//window.TtwLog.timeStamp( "return result : " );
		//window.TtwLog.timeStamp( result );

		//window.TtwLog.timeStamp( "---- [ E ] - window.apis.response.getResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
