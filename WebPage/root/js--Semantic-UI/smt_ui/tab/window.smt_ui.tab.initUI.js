
//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/tab/window.smt_ui.tab.initUI.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic UI Tab Initialize
 * @function
 * @param {Array} a [ {HTMLElement}, {HTMLElement's Controller} ]
 * @param {Object} o tab options
 * <code>
	auto	false	Whether tab should load remote content as same url as history
	deactivate	'siblings'	When set to siblings will only deactivate elements that are DOM siblings with the activated element. When set to all the component will deactivate all other elements initialized at the same time.
	history	false	Whether to record history events for tab changes
	ignoreFirstLoad	false	Do not load content remotely on first tab load. Useful when open tab is rendered on server.
	evaluateScripts	once	Whether inline scripts in tab HTML should be parsed on tab load. Defaults to once, parsing only on first load. Can also be set to true or false to always parse or never parse inline scripts.
	alwaysRefresh	false	Tab should reload content every time it is opened
	deactivate 2.2	siblings	Can be set to either siblings or all. Siblings will only de-activate tab activators that are siblings of the clicked element when a tab is selected. All will deactivate all other tab activators initialized at the same time.
	cacheType 2.2	response	Can be set to either response, DOM or html. Using DOM will cache the a clone of the DOM tree, preserving all events as they existed on render. response will cache the original response on load, this way callbacks always receive the same content. Using html will cache the resulting html after all callbacks, making sure any changes to content are preserved.
	cache	true	Tab should cache content after loading locally to avoid server trip on second load
	apiSettings	false	Settings object for $.api call
	historyType	hash	Can be set to hash or state. Hash will use an in-page link to create history events. State will use DOM History and load pages from server on refresh.
	path	false	When using historyType state you must specify the base URL for all internal links.
	context	false	Tabs are limited to those found inside this context
	childrenOnly	false	If enabled limits tabs to children of passed context
	maxDepth	25	Maximum amount of nested tabs allowed (avoids recursion)
	Callbacks
	Callbacks specify a function to occur after a specific behavior.

	Parameters	Context	Description
	onFirstLoad	tabPath, parameterArray, historyEvent	Tab	Callback only the first time a tab is loaded
	onLoad	tabPath, parameterArray, historyEvent	Tab	Callback every time a tab is loaded
	onRequest	tabPath	Tab	Called when a tab begins loading remote content
	onVisible	tabPath	Tab	Called after a tab becomes visible
 * </code>
 */
window.smt_ui.tab.initUI = function( a, o )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.tab.initUI():void----------" );

	var el = a[ 0 ];

	/*/
	var selectors = $( el ).find( ".menu .tab" );
	/*/
	var selectors = $( el ).find( ".menu .item" );
	//*/
	if( !selectors.length )
	{
		window.TtwLog.warn( "Semantic-UI Tab 객체가 아니다" );
		return null;
	}

	selectors.tab( o || {} );

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.tab.initUI():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;