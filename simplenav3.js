/* =======================================================================================================
simpleNav3
Written By Jody Tunnicliff


=========================================================================================================== */


(function( $ ) {
		$.fn.simpleNav = function(options) {
		
		/* ================================================================================================ */
		/* Set the default options ==================================================================  */
		/* ================================================================================================ */
		
			var settings = $.extend( {
				'fx' 		: 'slide',
				'speed'		: 500,
				'full' 	: true
			}, options);
			
		/* ================================================================================================ */
		/* Set items to table cell is full width option is activated =====================================  */	
		/* ================================================================================================ */
		
			if(settings.full){
				var ew = 1;
				var e = $(this).children('li').length;
				$(this).children('li').each(function() {
					ew += $(this).width();
				});
				var pad = parseInt(($(this).width() - ew) / (e*2));
				$(this).children('li').children('a').css({ "padding-left":pad,"padding-right":pad });
				$(this).addClass('table');
				$(this).children('li').each(function() {
					$(this).addClass('tablecell');
				});
			}
			
		/* ================================================================================================ */
		/* Make the drop downs work ==================================================================  */
		/* ================================================================================================ */

		switch(settings.fx)
		{
			case "slide":
				var fxin='slideDown';
				var fxout='slideUp';
				break;
			case "fade":
				var fxin='fadeIn';
				var fxout='fadeOut';
				break;
			case "none":
				var fxin='show';
				var fxout='hide';
				settings.speed=0;
				break;
			default:
				var fxin='slideDown';
				var fxout='slideUp';
				break;
		}
		
			
			$(this).find('li').hover(
			function(e1) { 
				$(this).children("ul").stop(true,true)[fxin](settings.speed);
				e1.preventDefault();
			},
			function(e2) { 
				$(this).children("ul").stop(true,true).delay(250)[fxout](settings.speed);
				e2.preventDefault();
			}
			
			);
			
		/* ================================================================================================ */		
		/* Make the drop downs work on touch devices ==================================================  */
		/* ================================================================================================ */
		
			try {
				element.addEventListener( "touchstart", function(e){ onStart(e); }, false );
				function onStart ( touchEvent ) {
				  touchEvent.preventDefault();
				}
			}
			catch(err){}
			
		};
	})( jQuery );
	
	
	