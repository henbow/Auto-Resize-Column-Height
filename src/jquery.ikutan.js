/**
 * jquery.ikutan.js
 * Auto height div column
 * @author Hendro Wibowo (hendro@tiwule.net)
 * 
 */

if (jQuery) (function($) {
	$.extend($.fn, {
		ikutan: function(opt){
			if(!opt) var opt = {};
			if(opt.target == undefined) opt.target = 'div';
			if(opt.bottomPadding == undefined) opt.bottomPadding = 0;
			if(opt.animate == undefined) opt.animate = false;
			
			var self = $(this);
			var heights = $(this).children(opt.target).map(function (){ return $(this).height(); }).get();
		    var maxHeight = Math.max.apply(null, heights);
		    
		    if(opt.animate) {
			    $(this).children().animate({'height':maxHeight});
		    } else {
		    	$(this).children().height(maxHeight);
		    }		    
		    
		    $(this).height(maxHeight + opt.bottomPadding);
		}
	});
})(jQuery);	

/**
 * End of file jquery.ikutan.js
 *  
 */