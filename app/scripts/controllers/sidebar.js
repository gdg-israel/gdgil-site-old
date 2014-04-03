'use strict';

angular.module('gdgilSiteApp')
	.controller('SidebarCtrl', function ($scope, $location) {
		$scope.items = [
			{title: 'GDG Israel', link: '/', icon: 'home'},
			{title: 'About', link: '/about', icon: 'beer'},
			{title: 'Videos', link: '/videos', icon: 'facetime_video'},
			{title: 'Team', link: '/experts', icon: 'parents'}
		];

		$scope.isSelected = function (item) {
			return item.link === $location.path();
		};
	});
