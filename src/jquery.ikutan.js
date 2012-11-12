/**
 * jquery.ikutan.js
 * Auto height div column
 * @author Hendro Wibowo (hendrothemail@gmail.com)
 * 
 */

if (jQuery) (function($) {
	$.extend($.fn, {
		ikutan: function(opt){			
			var self = $(this);
			var heights = $(this).children().map(function (){
		        return $(this).height();
		    }).get(),
		    maxHeight = Math.max.apply(null, heights);		    
		    $(this).children().height(maxHeight);
		    $(this).height(maxHeight);
		}
	});
})(jQuery);	