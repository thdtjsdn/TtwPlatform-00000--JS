//----------------------------------------------------------------------------------------------------;
//var fileNm = "js--Semantic-UI/smt_ui/dropdown/window.smt_ui.dropdown.initUI.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Semantic UI Dropdown Initialize
 * @function
 * @param {Array} a [ {HTMLElement}, {HTMLElement's Controller} ]
 * @param {Object} o dropdown options
 * <code>
	values	false	When specified allows you to initialize dropdown with specific values. See usage guide for details.
	on	click	Event used to trigger dropdown (Hover, Click, Custom Event)
	ignoreCase	falseNew in 2.2.13	Whether values with matching cases should be treated as identical when adding them to a dropdown.
	allowReselection	false	When set to true will fire onChange even when the value a user select matches the currently selected value.
	allowAdditions	false	Whether search selection should allow users to add their own selections, works for single or multiselect.
	hideAdditions	true	If disabled user additions will appear in the dropdown's menu using a specially formatted selection item formatted by templates.addition.
	action	auto
	Sets a default action to occur. (See usage guide)

	activate (default)
	Updates dropdown text with selected value, sets element state to active, updates any hidden fields if available
	select
	activates menu and updates input fields, but does not change current text
	combo
	changes text of previous sibling element
	nothing
	no action occurs
	hide
	Dropdown menu is hidden
	function(text, value, element){}
	custom function is executed with values specified in callback
	minCharacters	1	The minimum characters for a search to begin showing results
	match	both	When using search selection specifies how to match values.
	both
	Matches against text and value
	value
	matches against value only
	text
	matches against text only
	selectOnKeydown	true	Whether dropdown should select new option when using keyboard shortcuts. Setting to false will require enter or left click to confirm a choice.
	forceSelection	true	Whether search selection will force currently selected choice when element is blurred.
	allowCategorySelection	false	Whether menu items with sub-menus (categories) should be selectable
	placeholder	auto
	auto
	Convert option with "" (blank string) value to placeholder text
	value
	Sets string value to placeholder text, leaves "" value
	false
	Leaves "" value as a selectable option


	Callbacks
	onChange(value, text, $choice)	Dropdown	Is called after a dropdown value changes. Receives the name and value of selection and the active menu element
	onAdd(addedValue, addedText, $addedChoice)	Dropdown	Is called after a dropdown selection is added using a multiple select dropdown, only receives the added value
	onRemove(removedValue, removedText, $removedChoice)	Dropdown	Is called after a dropdown selection is removed using a multiple select dropdown, only receives the removed value
	onLabelCreate(value, text)	$label (jQDOM)	Allows you to modify a label before it is added. Expects the jQ DOM element for a label to be returned.
	onLabelRemove(value)	$label (jqDOM)	Called when a label is remove, return false; will prevent the label from being removed.
	onLabelSelect($selectedLabels)	Dropdown	Is called after a label is selected by a user
	onNoResults(searchValue)	Dropdown	Is called after a dropdown is searched with no matching values
	onShow	Dropdown	Is called before a dropdown is shown. If false is returned, dropdown will not be shown.
	onHide	Dropdown	Is called before a dropdown is hidden. If false is returned, dropdown will not be hidden.
 * </code>
 */
window.smt_ui.dropdown.initUI = function( a, o )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.dropdown.initUI():void----------" );

	var el = a[ 0 ];

	var selectors = $( el ).find( ".ui.dropdown" );
	if( !selectors.length )
	{
		window.TtwLog.warn( "Semantic-UI Dropdown 객체가 아니다" );
		return null;
	}

	selectors.dropdown( o || {} );

	//window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.dropdown.initUI():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;