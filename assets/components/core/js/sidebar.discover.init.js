(function($)
{
	$('body')
	.on('click', '.close-discover', function(e){
		$('#sidebar-discover-wrapper').removeClass('open');
		$('[data-toggle="sidebar-discover"]').removeClass('open');
		$('#discover').remove();
	});

	window.closeDiscover = function()
	{
		var discover = $('#discover'),
			target = discover.find('> div');

		if (!target.length)
			return;

		target.attr('id', target.data('id'));
		target.attr('class', target.data('class'));
		target.insertAfter('#sidebar-discover-wrapper > ul > li > a[href="#' + target.attr('id') + '"]');
	}

	$('#sidebar-discover-wrapper > ul > li > a').on('click', function(e)
	{
		closeDiscover();

		if ($(this).is('[data-toggle="sidebar-discover"]'))
			e.preventDefault();

		if ($('#sidebar-discover-wrapper.open').length)
		{
			e.preventDefault();
			e.stopPropagation();
		}

		if ($('.sidebar-discover-mini').length)
			$('body').removeClass('sidebar-discover-mini');
	
		if ($('#sidebar-discover-wrapper.open').length)
		{
			$('#sidebar-discover-wrapper, [data-toggle="sidebar-discover"]').removeClass('open hover-closed');
			closeDiscover();
			return;
		}

		var that = $(this);

		$('[data-toggle="sidebar-discover"]').removeClass('open');
		that.addClass('open');

		var wrapper = $('#sidebar-discover-wrapper'),
			main = wrapper.find('> ul'),
			discover = wrapper.find('> #discover'),
			target = $(that.attr('href'));

		target.data('id', target.attr('id'));
		target.data('class', target.attr('class'));
		target.removeAttr('class id');

		if (!discover.length)
		{
			discover = $('<div/>').attr('id', 'discover');
			wrapper.append(discover);
		}

		discover.html(target);
		wrapper.addClass('open');
	});
	
})(jQuery);