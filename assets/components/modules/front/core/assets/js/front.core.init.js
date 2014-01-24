(function($, window)
{
	$('.dropdown-menu.login input').on('focus', function(e){
		e.stopPropagation();
	})

})(jQuery, window);