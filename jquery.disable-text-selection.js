/* global $ */

$(document).ready( function() {
	'use strict';
	
	$(function(){
		$.extend($.fn.disableTextSelect = function() {
	        
	        /* remove $.browser as it is deprecated in jQuery > 1.9 and replace it with navigator.userAgent */
	        var userAgent = navigator.userAgent;
			return this.each(function(){
				if( userAgent.indexOf('Firefox') > -1 ){//Firefox
					$(this).css('MozUserSelect','none');
				}else if( userAgent.indexOf('MSIE') > -1 ){//IE
					$(this).bind('selectstart',function(){return false;});
				}else{//Opera, etc.
					$(this).mousedown(function(){return false;});
				}
			});
		});
		$('.noSelect').disableTextSelect();//No text selection on elements with a class of 'noSelect'
	});
});