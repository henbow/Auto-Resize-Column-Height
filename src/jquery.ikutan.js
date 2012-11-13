/**
 * jquery.ikutan.js
 * Auto height div column
 * @author Hendro Wibowo (hendro@tiwule.net)
 * @since 13 November 2012
 */

if (jQuery) (function($) {
	$.extend($.fn, {
		ikutan: function(opt){
			if(!opt) var opt = {};
			if(opt.target == undefined) opt.target = 'div';
			if(opt.bottomPadding == undefined) opt.bottomPadding = 0;
			if(opt.animate == undefined) opt.animate = false;
			
			var self = $(this);
			var heights = self.children(opt.target).map(function (){ return self.height(); }).get();
		    var maxHeight = Math.max.apply(null, heights);
		    
		    if(opt.animate) {
			    self.children().animate({'height':maxHeight});
		    } else {
		    	self.children().height(maxHeight);
		    }
		    
		    self.height(maxHeight + opt.bottomPadding);
		}
	});
})(jQuery);	

/**
 * End of file jquery.ikutan.js
 *  
 */