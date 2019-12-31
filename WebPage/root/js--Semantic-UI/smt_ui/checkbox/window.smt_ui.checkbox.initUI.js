//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/checkbox/window.smt_ui.checkbox.initUI.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic UI checkbox Visible - show By UI Array
 * @function
 * @param {Array} a [ {HTMLElement}, {HTMLElement's Controller} ]
 * @param {Object} o checkbox options
 * <code>
	{
		uncheckable : "auto"//Setting to true/false will determine whether an input will allow no selection. Auto will set disallow this behavior only for radio boxes
		, fireOnInit : false//Whether callbacks for checked status should be fired on init as well as change

		, onChange : function(){}
		, onChecked : function(){}
		, onUnchecked : function(){}

		, onDisable : function(){}
		, onEnable : function(){}
		, onDeterminate : functio(){}
		, onIndeterminate : function(){}
	}
 * </code>
 */
window.smt_ui.checkbox.initUI = function( a, o )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.checkbox.initUI():void----------" );

	var el = a[ 0 ];

	var selectors = $( el ).find( ".checkbox" );
	if( !selectors.length )
	{
		window.TtwLog.warn( "Semantic-UI Checkbox 객체가 아니다" );
		return null;
	}

	selectors.checkbox( o || {} );

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.checkbox.initUI():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;