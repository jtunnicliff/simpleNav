/* =======================================================================================================
simpleNav
Version 4.1
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
		'full' 	: true,
		'edge2edge' : false,
		'dropdownicon': "<i class='fa fa-chevron-down'></i>"
	}, options);
			
	/* ================================================================================================ */
	/* Set width's on each nav item to span the full width =====================================  */	
	/* ================================================================================================ */
		
	if(settings.full){
		var totalmenuwidth = 0;
		var numitems = $(this).children('li').length;
            	if(settings.edge2edge){
                	numitems--;
            	}  
		$(this).children('li').each(function() {
			totalmenuwidth += $(this).width(); 
		});
		var itemwidth = parseInt(($(this).width() - totalmenuwidth) / (numitems));
        	var widthchange=0;  
        	$(this).children('li').each(function() {
            		widthchange=itemwidth;
            		if(settings.edge2edge){
                		if($(this).is(':first-child')) { 
                    			widthchange=widthchange/2;
                    			$(this).children('a').css({"text-align":"left"});
                		} 
                		if($(this).is(':last-child')) {
                    			widthchange=widthchange/2;
                    			$(this).children('a').css({"text-align":"right"});
                		}
            		}
			$(this).children('a').css({ "width":$(this).width()+widthchange, "padding-left":"0", "padding-right":"0" });
		});  
          
        	/* ensure menu items will not wrap */
        	var newwidth=0;
        	$(this).children('li').each(function() {
			newwidth += $(this).width(); 
		}); 
        	var correction=newwidth-$(this).width();
        	console.log(correction);
        	if(correction>0){
            		console.log($(this).children('li:last-child').width());
            		var fixwidth=$(this).children('li:last-child').width()-correction;
            		$(this).children('li:last-child').css({"width":fixwidth+'px'});
        	}
	}
			
    	/* ================================================================================================ */
	/* Add a drop down icon ==================================================================  */
	/* ================================================================================================ */    
       
        if(settings.dropdownicon!="none"){
        	$(this).children('li').children('ul').parent('li').children('a').append(settings.dropdownicon);            
        }
        
	/* ================================================================================================ */
	/* Make the drop downs work ==================================================================  */
	/* ================================================================================================ */

	switch(settings.fx) {
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
	
	
	
