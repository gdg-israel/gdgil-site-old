'use strict';

angular.module('gdgilSiteApp')
	.controller('VideosCtrl', function ($scope, parse) {
		$scope.videos = parse.getContentItems();
	});
