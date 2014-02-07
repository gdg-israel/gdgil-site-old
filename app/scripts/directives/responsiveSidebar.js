'use strict';

angular.module('gdgilSiteApp')
	.directive('gdgResponsiveSidebar', function ($window, $timeout) {
		var MIN_MENU_WIDTH = 780;

		return function (scope, element) {
			var isMobile = false;

			function updateMenu() {
				var newIsMobile = $window.innerWidth < MIN_MENU_WIDTH;
				// Only update the menu if window width crossed the MIN_MENU_WIDTH boundary
				if (newIsMobile !== isMobile) {
					isMobile = newIsMobile;
					if (isMobile) {
						element.addClass('menu-hidden');
					} else {
						element.removeClass('menu-hidden');
					}
				}
			}

			angular.element($window).bind('resize', function () {
				updateMenu();
			});

			$timeout(updateMenu);

			angular.element('#gdg-responsive-sidebar-toggle-btn').click(function () {
				element.toggleClass('menu-hidden');
			});
		};
	});