//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/__define/200_define_window.apis.open.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.apis.open;

window.apis.open = window.apis.open || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.apis.open;

//*/
window.apis.open[ "Dev-JSONEditor" ] = function(){ window.open( "http://222.239.10.122:49323/index-Dev-Doc_JSONEditor.html?json_url=http://222.239.10.120:43320/_mongodb/status/serverStatusMin" ); };
window.apis.open[ "Dev-SMTEditor" ] = function(){ window.open( "http://222.239.10.122:49323/index-smt_template_list.html" ); };
window.apis.open[ "Dev-SourceEditor" ] = function(){ window.open( "http://222.239.10.122:49323/index-Dev-SourceEditor.html" ); };

window.apis.open.SYS0010 = function(){ window.open( "http://222.239.10.122:33333" ); };
window.apis.open.SYS0020 = function(){ window.open( "http://222.239.10.122:49321" ); };
window.apis.open.SYS0030 = function(){ window.open( "http://222.239.10.122:45321" ); };
window.apis.open.SYS0100 = function(){ window.open( "http://222.239.10.122:44321" ); };
//*/

//----------------------------------------------------------------------------------------------------window.apis.open.n***;

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} options
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
!function(){window.apis.open._map={},window.apis.open.newWindow=function(n,w,o){return window.apis.open._map[w]=window.open(n,w,o),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+o),window.apis.open._map[w]}}();

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} opt__pos_size
 * @param {String} opt__functionality
 * @param {String} opt__requiring_privileges
 * @return {Window}

 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
window.apis.open.newWindow_opts=function(n,w,o,i,d){var p=o+", "+i+", "+d;return window.apis.open._map[w]=window.open(n,w,p),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+p),window.apis.open._map[w]};

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {Number} pw
 * @param {Number} ph
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	window.apis.open.newWindow__CompactPopup( "http://localhost:33333/index-popup.html?api=window.ui_member.public.forgotPassword()", "SYS0010.member.public.forgotPassword", 505.81, 282.86 );
 * </code>
 */
//!function(){window.apis.open._map=window.apis.open._map||{},window.apis.open.newWindow__CompactPopup=function(n,o,i,w){var e=window.screen.availWidth,a=window.screen.availHeight,t=window.screen.availLeft||window.screenLeft,p=window.screen.availTop||window.screenTop,d=t+e/2-i/2,l=p+a/2-w/2;return window.apis.open._map[o]=window.open(n,o,"location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top="+l+",left="+d+",width="+i+",height="+w),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+o+" - "+i+" * "+w),window.apis.open._map[o]}}();
//!function(){window.apis.open._map=window.apis.open._map||{},window.apis.open.newWindow__CompactPopup=function(n,o,e,i){if("object"!=typeof e){if("number"!=typeof e||"number"!=typeof i)return void window.TtwLog.error("[ ERROR ] - 3번째 파라메터가 {}가 아니면 3, 4번째 파라메터는 Number만 들어와야 한다.");e={w:e,h:i}}var w,t,a="location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top=";if(e.bCenter){var l=window.screen.availWidth,p=window.screen.availHeight,r=window.screen.availLeft||window.screenLeft,d=window.screen.availTop||window.screenTop;w=r+l/2-e.w/2,t=d+p/2-e.h/2,a+=t+",left="+w+",width="+e.w+",height="+e.h}else w=window.screen.availLeft+e.l,t=window.screen.availTop+e.t,a+=t+",left="+w+",width="+e.w+",height="+e.h;window.apis.open._map[o]=window.open(n,o,a),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+o+" - "+e.w+" * "+e.h+" - "+w+", "+t);var b=window.apis.open._map[o];return b.onbeforeunload=function(){window.apis.open._map[o]=null,delete window.apis.open._map[o]},window.apis.open._map[o]}}();
!function(){window.apis.open._map=window.apis.open._map||{},window.apis.open.newWindow__CompactPopup=function(n,o,i,w){return i.params="location=no,toolbar=no,scrollbars=no,resizable=no,status=no",window.apis.open.newWindow__RelativeCoords(n,o,i,w)}}();

/**
 * Popup Window를 생성하고 HTML을 주입한다.
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {Object} data
 * <code>
	{
		, w : 500//width;
		, h : 500//height;
		, l : 200//left;
		, t : 200//top;
		, bCenter : false
	}
 * </code>
 * @param {String} HTML
 * @param {Function} func HTML DOM 로딩 완료 후 구동될 JS 함수 소스
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>

	var html = `<div class="ui segments">
		<div class="ui segment">
			<h5 class="ui header">Basic Line Chart</h5>
		</div>
		<div class="ui segment" style="height: 500px;">
			<div id="echarts" style="height: 100%">
			</div>
		</div>
	</div>`;

	window.apis.open.newWindow__CompactPopup__HTML( "a.html", "a", { w:500, h:500, l:500, t:300 }, html );

 * </code>
 */
!function(){window.apis.open._map=window.apis.open._map||{},window.apis.open.newWindow__CompactPopup__HTML=function(n,o,e,i,w){var a,t,l="location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top=";if(e.bCenter){var d=window.screen.availWidth,p=window.screen.availHeight,r=window.screen.availLeft||window.screenLeft,c=window.screen.availTop||window.screenTop;a=r+d/2-e.w/2,t=c+p/2-e.h/2,l+=t+",left="+a+",width="+e.w+",height="+e.h}else a=window.screen.availLeft+e.l,t=window.screen.availTop+e.t,l+=t+",left="+a+",width="+e.w+",height="+e.h;window.apis.open._map[o]=window.open(n,o,l),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+o+" - "+e.w+" * "+e.h+" - "+a+", "+t);var b=window.apis.open._map[o];return b.onload=function(){b.document.body.innerHTML=i},b.onbeforeunload=function(){window.apis.open._map[o]=null,delete window.apis.open._map[o]},window.apis.open._map[o]}}();

/**
 * Popup Window를 생성하고 HTML과 JS 함수를 주입한다.
 * JS는 HTML DOM이 생성된 후 구동된다.
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {Object} data
 * <code>
	{
		, w : 500//width;
		, h : 500//height;
		, l : 200//left;
		, t : 200//top;
		, bCenter : false
	}
 * </code>
 * @param {String} HTML
 * @param {Function} func HTML DOM 로딩 완료 후 구동될 JS 함수 소스
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>

	var html = `<div class="ui segments">
		<div class="ui segment">
			<h5 class="ui header">Basic Line Chart</h5>
		</div>
		<div class="ui segment" style="height: 500px;">
			<div id="echarts" style="height: 100%">
			</div>
		</div>
	</div>`;

	var func = function(){var host = window.opener.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
		var dom = window.document.getElementById( "echarts" );
		var myChart = window.opener.echarts.init( dom );

		var app = {};
		var option = {
			  xAxis : { type : "category", data : [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ] }
			, yAxis : { type : "value" }
			, series : [ { type : "bar", data : [ 120, 200, 150, 80, 70, 110, 130 ] } ]
		};

		if( option && typeof option === "object" ) myChart.setOption( option, true );
	}

	window.apis.open.newWindow__CompactPopup__HTML_JS( "a.html", "a", { w:500, h:500, l:500, t:300 }, html, func );


	//or

	//JSON.stringify;
	var data = '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]';

	var html = `<div class="ui segments">
		<div class="ui segment">
			<h5 class="ui header">Basic Line Chart</h5>
		</div>
		<div class="ui segment" style="height: 500px;">
			<div id="echarts" style="height: 100%">
			</div>
		</div>
	</div>
	<script id="data" data='<!=DATA=!>'></script>`;

	html = html.replace( "<!=DATA=!>", data );

	var func = function(){
		window.DATA = JSON.parse( window.document.getElementById( "data" ).getAttribute( "data" ) );
		var host = window.opener.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
		var dom = window.document.getElementById( "echarts" );
		var myChart = window.opener.echarts.init( dom );

		var app = {};
		var option = {
			  xAxis : { type : "category", data : window.DATA }
			, yAxis : { type : "value" }
			, series : [ { type : "bar", data : [ 120, 200, 150, 80, 70, 110, 130 ] } ]
		};

		if( option && typeof option === "object" ) myChart.setOption( option, true );
	}

	window.apis.open.newWindow__CompactPopup__HTML_JS( "a.html", "a", { w:500, h:500, l:500, t:300 }, html, func );

 * </code>
 */
!function(){window.apis.open._map=window.apis.open._map||{},window.apis.open.newWindow__CompactPopup__HTML_JS=function(n,e,o,i,w){var t,d,a="location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top=";if(o.bCenter){var l=window.screen.availWidth,r=window.screen.availHeight,p=window.screen.availLeft||window.screenLeft,c=window.screen.availTop||window.screenTop;t=p+l/2-o.w/2,d=c+r/2-o.h/2,a+=d+",left="+t+",width="+o.w+",height="+o.h}else t=window.screen.availLeft+o.l,d=window.screen.availTop+o.t,a+=d+",left="+t+",width="+o.w+",height="+o.h;window.apis.open._map[e]=window.open(n,e,a),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+e+" - "+o.w+" * "+o.h+" - "+t+", "+d);var s=window.apis.open._map[e];return s.onload=function(){s.document.body.addEventListener("DOMNodeInserted",function(n){s.document.body.removeEventListener("DOMNodeInserted",arguments.callee),setTimeout(function(){s.eval("("+w.toString()+")();")},1e3)}),s.document.body.innerHTML=i},s.onbeforeunload=function(){window.apis.open._map[e]=null,delete window.apis.open._map[e]},window.apis.open._map[e]}}();

/**
	 * @function
	 * @param {String} url
	 * @param {String} winName
	 * @param {Object} data
	 * <code>
		{
			, w : 500//width;
			, h : 500//height;
			, l : 200//left;
			, t : 200//top;
			, bCenter : false
			, params : ""//Popup Parameters;
		}
	 * </code>
	 * @return {Window}
	 *
	 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
	 * @example
	 * <code>

	 	var html = `<div class="ui segments">
			<div class="ui segment">
				<h5 class="ui header">Basic Line Chart</h5>
			</div>
			<div class="ui segment" style="height: 500px;">
				<div id="echarts" style="height: 100%">
				</div>
			</div>
		</div>`;

		window.apis.open.newWindow__CompactPopup( "a.html", "a", { w:500, h:500, l:500, t:300 } );

		//------------------------------------------------------------------------------------------;

		var p = window.open( "./index-popup.html", "B2Ker-Popup"
			, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
			//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
			//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
			//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
		);

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

		//alwaysRaised 안됨;
		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

		//close 안됨;
		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

		//modal 안됨;
		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
	 * </code>
	 */
!function(){window.apis.open._map=window.apis.open._map||{},window.apis.open.newWindow__RelativeCoords=function(n,e,o,i){if("object"!=typeof o){if("number"!=typeof o||"number"!=typeof i)return void window.TtwLog.error("[ ERROR ] - 3번째 파라메터가 {}가 아니면 3, 4번째 파라메터는 Number만 들어와야 한다.");o={w:o,h:i}}var w="";w=o.params?o.params+",top=":"top=";var a,t;if(o.bCenter){var d=window.screen.availWidth,p=window.screen.availHeight,r=window.screen.availLeft||window.screenLeft,l=window.screen.availTop||window.screenTop;a=r+d/2-o.w/2,t=l+p/2-o.h/2,w+=t+",left="+a+",width="+o.w+",height="+o.h}else a=window.screen.availLeft+o.l,t=window.screen.availTop+o.t,w+=t+",left="+a+",width="+o.w+",height="+o.h;window.apis.open._map[e]=window.open(n,e,w),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+e+" - "+o.w+" * "+o.h+" - "+a+", "+t);var f=window.apis.open._map[e];return f.onbeforeunload=function(){window.apis.open._map[e]=null,delete window.apis.open._map[e]},window.apis.open._map[e]}}();

//----------------------------------------------------------------------------------------------------window.apis.open.n***;

/**
 * @function
 * @param {String} key Popup 생성시 사용한 명명
 * @return {Window}
 */
window.apis.open.getWindow = function( key )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.apis.open.getWindow():{Window}----------" );

	var t = window.apis.open._map[ key ];
	if( !t )
	{
		window.TtwLog.error( key + "에 해당하는 Popup이 없음" );
		return null;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.apis.open.getWindow():{Window}----------return t;" );
	return t;
}

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;