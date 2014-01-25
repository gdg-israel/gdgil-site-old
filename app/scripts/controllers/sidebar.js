'use strict';

angular.module('gdgilSiteApp')
	.controller('SidebarCtrl', function ($scope, $location) {
		$scope.items = [
			{title: 'GDG Israel', link: '/', icon: 'home'},
			{title: 'About', link: '/about', icon: 'beer'},
			//{title: 'Events', link: '/events', icon: 'calendar'},
			{title: 'Videos', link: '/videos', icon: 'facetime_video'},
			{title: 'Contents', link: '/contents', icon: 'notes'}//,
			//{title: 'Experts', link: '/experts', icon: 'parents'}
		];

		$scope.isSelected = function (item) {
			return item.link === $location.path();
		};
	});
