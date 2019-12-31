//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/util/window.apis.util.importJSsFromScriptElement.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * HTML에 존재하는 <script>를 가져와서 로딩한다.
 * @function
 * @param {HTMLElement} t element
 */
window.apis.util.importJSsFromScriptElement = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.apis.util.importJSsFromScriptElement():void----------" );

	var f0 = window.apis.util.importJS;
	var a = t.getElementsByTagName( "script" );
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		try{ f0( a[ i ].src ); }
		catch( e )
		{
			window.TtwLog.error( "window.apis.util.importJSsFromScriptElement Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.apis.util.importJSsFromScriptElement():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;