//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/accordion/window.smt_ui.accordion.initUI.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic UI Accordion Initialize
 * @function
 * @param {Array} a [ {HTMLElement}, {HTMLElement's Controller} ]
 * @param {Object} o accordion options
 * <code>
	exclusive	true	Only allow one section open at a time
	on	click	Event on title that will cause accordion to open
	animateChildren	true	Whether child content opacity should be animated (may cause performance issues with many child elements)
	closeNested	true	Close open nested accordion content when an element closes
	collapsible	true	Allow active sections to collapse
	duration	500	Duration in ms of opening animation
	easing	easeInOutQuint	Easing of opening animation. EaseInOutQuint is included with accordion, for additional options you must include easing equations.


	Callbacks
	onOpening	active content	Callback before element opens
	onOpen	active content	Callback after element is open
	onClosing	active content	Callback before element closes
	onClose	active content	Callback after element is closed
	onChanging	active content	Callback before element opens or closes
	onChange	active content	Callback on element open or close
 * </code>
 */
window.smt_ui.accordion.initUI = function( a, o )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.accordion.initUI():void----------" );

	var el = a[ 0 ];

	var selectors = $( el ).find( ".ui.accordion" );
	if( !selectors.length )
	{
		window.TtwLog.warn( "Semantic-UI Accordion 객체가 아니다" );
		return null;
	}

	selectors.accordion( o || {} );

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.accordion.initUI():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;