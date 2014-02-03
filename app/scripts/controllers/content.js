'use strict';

angular.module('gdgilSiteApp')
	.controller('ContentItemCtrl', function ($scope, $routeParams, $sce, parse) {
		$scope.item = parse.getContentItem($routeParams.id);

		$scope.$watch('item.youtube', function (youtubeId) {
			$scope.youtubeUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + youtubeId + '?rel=0');
		});
	});
