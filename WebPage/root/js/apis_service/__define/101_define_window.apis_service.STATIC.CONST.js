//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/__define/101_define_window.apis_service.STATIC.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.apis_service.STATIC.CONST;

window.apis_service.STATIC.CONST = window.apis_service.STATIC.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis_service.STATIC.CONST;

//--------------------------------------------------window.apis_service.STATIC.CONST.RESPONSE_CODE;

window.apis_service.STATIC.CONST.RESPONSE_CODE = window.apis_service.STATIC.CONST.RESPONSE_CODE || {};

(function(){
	var _ = window.apis_service.STATIC.CONST.RESPONSE_CODE;
		_.__defineGetter__(  "0", function(){ return "REQUEST_FAILED"; } );
		_.__defineGetter__(  "1", function(){ return "REQUEST_SUCCESS"; } );
		_.__defineGetter__(  "2", function(){ return "BAD_VALUE"; } );
		_.__defineGetter__(  "7", function(){ return "HOST_NOT_FOUND"; } );
		_.__defineGetter__( "18", function(){ return "AUTHENTICATION_FAILED"; } );
		_.__defineGetter__( "89", function(){ return "NETWORK_TIMEOUT"; } );
		_.__defineGetter__( "96", function(){ return "OPERATION_FAILED"; } );

		_.__defineGetter__( "REQUEST_FAILED"       , function(){ return  0; } );
		_.__defineGetter__( "REQUEST_SUCCESS"      , function(){ return  1; } );
		_.__defineGetter__( "BAD_VALUE"            , function(){ return  2; } );
		_.__defineGetter__( "HOST_NOT_FOUND"       , function(){ return  7; } );
		_.__defineGetter__( "AUTHENTICATION_FAILED", function(){ return 18; } );
		_.__defineGetter__( "NETWORK_TIMEOUT"      , function(){ return 89; } );
		_.__defineGetter__( "OPERATION_FAILED"     , function(){ return 96; } );
})();

//--------------------------------------------------window.apis_service.STATIC.CONST.RESPONSE_CODE;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;