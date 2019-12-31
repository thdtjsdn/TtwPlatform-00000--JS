//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/util/window.apis.util.importJSsFromScriptElement__Reuse.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * HTML에 존재하는 <script>를 가져와서 로딩한다.
 * @function
 * @param {HTMLElement} t element
 */
window.apis.util.importJSsFromScriptElement__Reuse = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.util.importJSsFromScriptElement__Reuse():void----------" );

	var f0 = window.apis.util.importJS__Reuse;
	var a = t.getElementsByTagName( "script" );
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		try{ f0( a[ i ].src ); }
		catch( e )
		{
			window.TtwLog.error( "window.apis.util.importJSsFromScriptElement__Reuse Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.util.importJSsFromScriptElement__Reuse():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;