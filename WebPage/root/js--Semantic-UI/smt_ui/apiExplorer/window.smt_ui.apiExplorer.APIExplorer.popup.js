//----------------------------------------------------------------------------------------------------;
var fileNm = "./js__b2link__SYS0015/smt_ui/apiExplorer/window.smt_ui.apiExplorer.APIExplorer.popup.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Window}
 */
window.smt_ui.apiExplorer.APIExplorer.popup = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.apiExplorer.APIExplorer.popup():{Array}----------" );

	var newWindow = window.b2link.open.newWindow(
		window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/index-popup.html"
			+ "?api=window.smt_ui.apiExplorer.APIExplorer"
			+ '&params='
			+ "&SCODE=" + window.b2link.STATIC.CONFIG.URL.SCODE
		, "SYS0015.smt_ui.apiExplorer.APIExplorer"
	);

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.apiExplorer.APIExplorer.popup():{Array}----------return newWindow;" );
	return newWindow;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;