'use strict';

angular.module('gdgilSiteApp')
	.controller('ContentItemCtrl', function ($scope, $resource, $routeParams) {
		console.log($routeParams.id);
		$scope.item = $resource('/mock/item:itemId.json', {itemId: $routeParams.id}).get();
	});
