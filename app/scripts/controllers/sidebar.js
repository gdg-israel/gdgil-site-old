'use strict';

angular.module('gdgilSiteApp')
	.controller('SidebarCtrl', function ($scope, $location) {
		$scope.items = [
			{title: 'GDG Israel', link: '/', icons: 'home'},
			{title: 'About', link: '/about', icons: 'beer'},
			{title: 'Events', link: '/events', icons: 'calendar'},
			{title: 'Videos', link: '/videos', icons: 'facetime_video'},
			{title: 'Content', link: '/content', icons: 'notes'},
			{title: 'Experts', link: '/experts', icons: 'parents'}
		];

		$scope.isSelected = function (item) {
			return item.link === $location.path();
		};
	});
