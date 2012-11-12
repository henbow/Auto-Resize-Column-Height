/**
 * jquery.ikutan.js
 * Auto height div column
 * @author Hendro Wibowo (hendro@tiwule.net)
 * 
 */

if (jQuery) (function($) {
	$.extend($.fn, {
		ikutan: function(opt){
			var opts = {
				targetElem: opt.target == undefined ? 'div' : opt.target				
			};
			var self = $(this);
			var heights = $(this).children(opts.targetElem).map(function (){ return $(this).height(); }).get();
		    var maxHeight = Math.max.apply(null, heights);		    
		    $(this).children().height(maxHeight);
		    $(this).height(maxHeight);
		}
	});
})(jQuery);	

/**
 * End of file jquery.ikutan.js
 *  
 */