'use strict';

angular.module('gdgilSiteApp')
	.controller('ContentItemCtrl', function ($scope, $routeParams, $sce, contentProvider) {
		$scope.item = contentProvider.getItem($routeParams.id);

		$scope.$watch('item.youtube', function (youtubeId) {
			$scope.youtubeUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + youtubeId + '?rel=0');
		});
	});
