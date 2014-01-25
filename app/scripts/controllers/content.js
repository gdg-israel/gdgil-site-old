'use strict';

angular.module('gdgilSiteApp')
	.controller('ContentItemCtrl', function ($scope, $routeParams, contentProvider) {
		$scope.item = contentProvider.getItem($routeParams.id);
	});
