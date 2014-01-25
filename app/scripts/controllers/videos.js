'use strict';

angular.module('gdgilSiteApp')
	.controller('VideosCtrl', function ($scope, $resource) {
		$scope.videos = $resource('/mock/videos.json').query();
	});
