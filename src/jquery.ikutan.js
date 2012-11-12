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
			console.log(opt.bottomPadding);
			
			var self = $(this);
			var heights = $(this).children(opt.target).map(function (){ return $(this).height(); }).get();
		    var maxHeight = Math.max.apply(null, heights);		    
		    $(this).children().height(maxHeight);
		    $(this).height(maxHeight + opt.bottomPadding);
		}
	});
})(jQuery);	

/**
 * End of file jquery.ikutan.js
 *  
 */