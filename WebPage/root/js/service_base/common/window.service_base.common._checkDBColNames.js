//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/service_base/common/window.service_base.common._checkDBColNames.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Database Name과 Collection Name를 체크한다.
 *
 * @function
 * @param {String} nm_db
 * @param {String} nm_col
 */
window.service_base.common._checkDBColNames = function( nm_db, nm_col )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._checkDBColNames():void----------" );

	if( !nm_db )
	{
		window.b2link_ui.message.error( "nm_db : " + nm_db );
		window.TtwLog.error( "nm_db : " + nm_db );
		debugger;
	}

	if( !nm_col )
	{
		window.b2link_ui.message.error( "nm_col : " + nm_col );
		window.TtwLog.error( "nm_col : " + nm_col );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._checkDBColNames():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;